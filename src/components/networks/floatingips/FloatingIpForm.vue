<template>
  <!-- XXX Validate form with Vuelidate -->
  <div class="container mb-4">
    <div class="card border-info">
      <div class="card-header bg-info text-light text-center">
        <p class="h5"><strong>Create new floating ip</strong></p>
      </div>
      <form
        v-on:submit.prevent="submitForm()"
        action="http://127.0.0.1:9696/v2.0/floatingips"
        method="POST"
      >
        <div class="card-body">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="description">Description</label>
              <input type="text" class="form-control" id="description" v-model="description"/>
            </div>
            <!-- XXX May want to use different variable names here -->
            <div class="form-group col-md-6">
              <label for="pool">Pool</label>
              <select class="custom-select" id="pool" v-model="poolNetwork">
                <option
                  v-for="pool in pools"
                  v-bind:key="pool.network_id"
                  v-bind:value="pool.network_id"
                  >{{ getPoolName(pool.network_id) }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="card-footer text-center">
          <button type="submit" class="btn btn-success mr-2">Allocate IP</button>
          <button type="button" class="btn btn-secondary" v-on:click="$emit('hide')">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatingIpForm',
  data () {
    return {
      description: '',
      poolNetwork: ''
    }
  },
  computed: {
    pools () {
      return this.$store.state.networks.floatingPools
    },
    networks () {
      return this.$store.state.networks.networks
    }
  },
  mounted () {
    console.log('FloatingIpForm created and mounted')
  },
  methods: {
    // XXX Maybe this should be in computed section
    // XXX Use more idiomatic JavaScript
    getPoolName (poolNetworkId) {
      let poolName = ''
      const len = this.networks.length
      for (let idx = 0; idx < len; idx++) {
        const network = this.networks[idx]
        if (poolNetworkId === network.id) {
          poolName = network.name
          break
        }
      }
      return poolName
    },
    submitForm: function () {
      const url = 'http://127.0.0.1:9696/v2.0/floatingips'
      const body = {
        floatingip: {
          floating_network_id: this.poolNetwork,
          description: this.description
        }
      }
      axios.post(url, body)
        .then(response => {
          console.log(response)
          const action = 'networks/getFloatingIps'
          this.$store.dispatch(action)
          this.$emit('hide')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
