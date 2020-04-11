<template>
  <!-- XXX Validate form with Vuelidate -->
  <div class="container mb-4">
    <div class="card border-info">
      <div class="card-header bg-info text-light text-center">
        <p class="h5"><strong>Create new stack</strong></p>
      </div>
      <form
        v-on:submit.prevent="submitForm()" method="POST">
        <div class="card-body">
          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" v-model="name"/>
            </div>
            <div class="form-group col-md-3">
              <label for="image">Image</label>
              <select class="form-control" id="image" v-model="imageRef">
                <option
                  v-for="image in images"
                  v-bind:key="image.id"
                  v-bind:value="image.id"
                  >{{ image.name }}
                </option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <label for="flavor">Flavor</label>
              <select class="form-control" id="flavor" v-model="flavorRef">
                <option
                  v-for="flavor in flavors"
                  v-bind:key="flavor.id"
                  v-bind:value="flavor.id"
                  >{{ flavor.name }}
                </option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <label for="keyname">Key Pair</label>
              <select class="form-control" id="keyname" v-model="keyname">
              <!-- XXX Try to simplify identifier 'entry.keypair.xxx' (here or somewhere else) -->
                <option
                  v-for="entry in keypairs"
                  v-bind:key="entry.keypair.fingerprint"
                  v-bind:value="entry.keypair.name"
                  >{{ entry.keypair.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-row">
             <div class="form-group col-md-4">
              <label for="securiytGroup">Securaty Group</label>
              <select class="form-control" id="securiytGroup" v-model="securiytGroup">
                 <option
                  v-for="securiytGroup in securiytGroups"
                  v-bind:key="securiytGroup.id"
                  v-bind:value="securiytGroup.id"
                  >{{ securiytGroup.name }}
                </option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="privateNetwork">Private Network</label>
              <select class="form-control" id="privateNetwork" v-model="privateNetwork">
                <option
                  v-for="network in networks"
                  v-bind:key="network.id"
                  v-bind:value="network.id"
                  >{{ network.name }}
                </option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="publicNetwork">Public Network</label>
              <select class="form-control" id="publicNetwork" v-model="publicNetwork">
                <option
                  v-for="network in networks"
                  v-bind:key="network.id"
                  v-bind:value="network.id"
                  >{{ network.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
                <label for="description">Description</label>
                <textarea class="form-control" id="description" rows="3" v-model="description"></textarea>
            </div>
          </div>
        </div>
        <div class="card-footer text-center">
          <button type="submit" class="btn btn-success mr-2">Create Stack!</button>
          <button type="button" class="btn btn-secondary" v-on:click="$emit('hide')">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrchestrationForm',
  data () {
    return {
      name: '',
      imageRef: '',
      flavorRef: '',
      keyname: '',
      securiytGroup: '',
      privateNetwork: '',
      publicNetwork: '',
      description: ''
    }
  },
  computed: {
    flavors () {
      return this.$store.state.instances.flavors
    },
    networks () {
      return this.$store.state.networks.networks
    },
    images () {
      return this.$store.state.images.images
    },
    keypairs () {
      return this.$store.state.instances.keypairs
    },
    securiytGroups () {
      return this.$store.state.networks.securityGroups != null
        ? this.$store.state.networks.securityGroups.filter(o => {
          return o.tenant_id === this.$store.state.authentication.idSelectedProject
        })
        : ''
    }
  },
  mounted () {
    console.log('[OrchestrationForm] => created and mounted')
    this.preSelectOptions()
  },
  methods: {
    submitForm: function () {
      const body = {
        stack_name: this.name,
        template: {
          heat_template_version: '2018-08-31',
          description: this.description,
          resources: {
            Server_1: {
              type: 'OS::Nova::Server',
              properties: {
                networks: [{
                  port: {
                    get_resource: 'Port_1'
                  }
                }],
                flavor: this.flavorRef,
                image: this.imageRef,
                key_name: this.keyname,
                user_data_format: 'RAW',
                user_data: "#!/bin/bash\necho \"=====[BEGIN]=====\"\napt-get update\napt-get -y install apache2\necho '<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><title>This is not Apache2 Ubuntu Default Page: It Works</title></head><body style=\"text-align:center;\"><img style=\"width:100%;\" src=\"https://media1.tenor.com/images/67d432aeb972166c03684414b17d287e/tenor.gif\"><h1 style=\"font-size:100pt;\">It Works!</h1></body></html>' > /var/www/html/index.html\necho \"=====[END]=====\""
              }
            },
            Port_1: {
              type: 'OS::Neutron::Port',
              properties: {
                admin_state_up: true,
                security_groups: [this.securiytGroup],
                network: this.privateNetwork
              }
            },
            FloatingIP_1: {
              type: 'OS::Neutron::FloatingIP',
              properties: {
                floating_network: this.publicNetwork,
                port_id: {
                  get_resource: 'Port_1'
                }
              }
            }
          }
        },
        timeout_mins: '60'
      }
      // eslint-disable-next-line no-undef
      axios.post('heat-api/v1/' + this.$store.state.authentication.idSelectedProject + '/stacks', body)
        .then(response => {
          console.log('[CREATE-STACK] => ', response)
          this.$store.dispatch('orchestrations/getStacks')
          this.$emit('hide')
        })
        .catch(error => {
          console.log('[CREATE-STACK] => ', error)
        })
    },
    preSelectOptions () {
      if (this.keypairs != null) {
        this.keyname = this.keypairs[0].keypair.name
      }
      this.imageRef = this.searchIDbyNameInArray(this.images, 'bionic')
      this.flavorRef = this.searchIDbyNameInArray(this.flavors, 'ds2g')
      this.privateNetwork = this.searchIDbyNameInArray(this.networks, 'private')
      this.publicNetwork = this.searchIDbyNameInArray(this.networks, 'public')
      this.securiytGroup = this.searchIDbyNameInArray(this.securiytGroups, 'default')
      const date = new Date()
      this.name = 'MyStack-' + Date.parse(date)
    },
    searchIDbyNameInArray (array, keyord) {
      var returnVar = ''
      if (array != null) {
        array.forEach(element => {
          if (element.name.toLowerCase().match(keyord)) {
            returnVar = element.id
          }
        })
      }
      return returnVar
    }
  }
}
</script>
