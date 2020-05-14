<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">
          Deployments
        </h1>
        <p>In this page you can manage all of your deployments.<br>If you want to create a new deployment click on the button down bellow.</p>
      </div>
      <button
        class="btn btn-outline-info mt-4"
        @click="showDeploymentForm = !showDeploymentForm"
      >
        Create deployment
      </button>
    </div>
    <deployments-form
      v-if="showDeploymentForm"
      @hide="showDeploymentForm = false"
    />
    <!-- XXX (ricardoapl) Add namespace filter bar -->
    <deployments-list :namespace="namespace" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DeploymentsForm from './DeploymentsForm'
import DeploymentsList from './DeploymentsList'
export default {
  name: 'DeploymentsView',
  components: {
    DeploymentsForm,
    DeploymentsList
  },
  data () {
    return {
      // XXX (ricardoapl) Add namespace filter bar
      namespace: '*',
      showDeploymentForm: false
    }
  },
  mounted () {
    console.log('DeploymentsView created and mounted')
    this.getDeployments()
  },
  methods: {
    ...mapActions({
      getDeployments: 'deployments/getDeployments'
    })
  }
}
</script>
