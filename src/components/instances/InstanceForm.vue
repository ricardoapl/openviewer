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
        <select class="form-control" id="network" v-model="networkId">
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
  data () {
    return {
      flavors: {},
      networks: [],
      images: [],
      flavorRef: '',
      name: '',
      networkId: '',
      imageRef: ''
    }
  },
  mounted () {
    console.log('InstanceForm created and mounted')
    this.getFlavors()
    this.getNetworks()
    this.getImages()
  },
  methods: {
    getFlavors: function () {
      // XXX Duplicate from InstanceList.vue
      axios.get('/compute/v2.1/flavors')
        .then(response => {
          this.flavors = response.data.flavors
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getNetworks: function () {
      // XXX Might want to 'fix' this URL...
      axios.get('http://127.0.0.1:9696/v2.0/networks')
        .then(response => {
          this.networks = response.data.networks
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getImages: function () {
      axios.get('/image/v2/images')
        .then(response => {
          this.images = response.data.images
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    submitForm: function () {
      const body = {
        server: {
          flavorRef: this.flavorRef,
          name: this.name,
          networks: [
            {
              uuid: this.networkId
            }
          ],
          imageRef: this.imageRef,
          'OS-DCF:diskConfig': 'AUTO'
        }
      }
      axios.post('compute/v2.1/servers', body)
        .then(response => {
          console.log(response)
          // XXX Send refresh request to InstanceList.vue through Vuex
          // XXX Hide form
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
