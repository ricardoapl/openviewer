<template>
  <!-- XXX Validate form with Vuelidate -->
  <div class="container mb-4">
    <div class="card border-info">
      <div class="card-header bg-info text-light text-center">
        <p class="h5"><strong>Create new instance</strong></p>
      </div>
      <form
        v-on:submit.prevent="submitForm()"
        action="compute/v2.1/servers"
        method="POST"
      >
        <div class="card-body">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" v-model="name"/>
            </div>
            <div class="form-group col-md-4">
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
            <div class="form-group col-md-4">
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
            <div class="form-group col-md-6">
              <label for="network">Network</label>
              <select class="form-control" id="network" v-model="networkRef">
                <option
                  v-for="network in networks"
                  v-bind:key="network.id"
                  v-bind:value="network.id"
                  >{{ network.name }}
                </option>
              </select>
            </div>
            <div class="form-group col-md-6">
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
          </div>
        </div>
        <div class="card-footer text-center">
          <button type="submit" class="btn btn-success mr-2">Save Instance</button>
          <button type="button" class="btn btn-secondary" v-on:click="$emit('hide')">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstanceForm',
  data () {
    return {
      flavorRef: '',
      name: '',
      networkRef: '',
      imageRef: '',
      keyname: ''
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
    }
  },
  mounted () {
    console.log('InstanceForm created and mounted')
  },
  methods: {
    submitForm: function () {
      // XXX Building body is not the purpose of this method...
      const body = {
        server: {
          flavorRef: this.flavorRef,
          name: this.name,
          networks: [
            {
              uuid: this.networkRef
            }
          ],
          imageRef: this.imageRef,
          'OS-DCF:diskConfig': 'AUTO'
        }
      }
      Object.assign(
        body.server,
        this.keyname && { key_name: this.keyname }
      )
      axios.post('compute/v2.1/servers', body)
        .then(response => {
          console.log(response)
          this.$store.dispatch('instances/getServers')
          this.$emit('hide')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
