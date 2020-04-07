<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">Floating IPs</h1>
        <p>In this page you can control all of your floating IPs.<br>If you want to create a new floating IP click on the button down bellow.</p>
      </div>
      <button
        class="btn btn-outline-info mt-4"
        v-on:click="showFloatingIpForm = !showFloatingIpForm"
        >Create Floating IP
      </button>
    </div>
    <floating-ip-form
      v-if="showFloatingIpForm"
      v-on:hide="showFloatingIpForm = false">
    </floating-ip-form>
    <floating-ip-list></floating-ip-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FloatingIpForm from './FloatingIpForm'
import FloatingIpList from './FloatingIpList'
export default {
  name: 'FloatingIpView',
  components: {
    FloatingIpForm,
    FloatingIpList
  },
  data () {
    return {
      showFloatingIpForm: false
    }
  },
  mounted () {
    console.log('FloatingIpView created and mounted')
    this.getFloatingPools()
  },
  methods: {
    ...mapActions({
      getFloatingPools: 'networks/getFloatingPools'
    })
  }
}
</script>
