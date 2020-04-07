<template>
  <!-- XXX Validate form with Vuelidate -->
  <div class="container">
    <form
      v-on:submit.prevent="submitForm()"
      action="compute/v2.1/servers"
      method="POST"
    >
      <div class="from-group">
        <label for="flavor">Flavor</label>
        <select class="form-control" id="flavor" v-model="flavorRef">
          <option
            v-for="flavor in flavors"
            v-bind:key="flavor.id"
            v-bind:value="flavor.id"
            >{{ flavor.name }}
          </option>
        </select>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name"/>
        <label for="network">Network</label>
        <select class="form-control" id="network" v-model="networkRef">
          <option
            v-for="network in networks"
            v-bind:key="network.id"
            v-bind:value="network.id"
            >{{ network.name }}
          </option>
        </select>
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
      <input type="submit" value="Submit"/>
    </form>
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
      imageRef: ''
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
    }
  },
  mounted () {
    console.log('InstanceForm created and mounted')
  },
  methods: {
    submitForm: function () {
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
