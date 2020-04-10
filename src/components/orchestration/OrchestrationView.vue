<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">Orchestration</h1>
        <p>
          In this page your can launch one template created by us.
          <br>This template auto-deploy a instance with an floating IP, and launch a web server.
          <br>Click on the button down bellow and deploy it!
        </p>
      </div>
      <button class="btn btn-outline-info mt-4"
        v-on:click="showStackForm = true">
        Feeling Lucky!
      </button>
    </div>
    <orchestration-form
      v-if="showStackForm"
      v-on:hide="showStackForm = false">
    </orchestration-form>
    <orchestration-list></orchestration-list>
  </div>
</template>

<script>
// XXX Consider importing { mapActions } on a larger scope
import { mapActions } from 'vuex'
import OrchestrationForm from './OrchestrationForm'
import OrchestrationList from './OrchestrationList'
export default {
  name: 'OrchestrationView',
  components: {
    OrchestrationForm,
    OrchestrationList
  },
  data () {
    return {
      showStackForm: false
    }
  },
  mounted () {
    console.log('[OrchestrationView] => Created and mounted')
    this.getKeypairs()
    this.getFlavors()
    this.getNetworks()
    this.getImages()
    this.getSecurityGroups()
  },
  methods: {
    // XXX Consider removing action mapping in favor of this.$store...
    ...mapActions({
      getKeypairs: 'instances/getKeypairs',
      getFlavors: 'instances/getFlavors',
      getNetworks: 'networks/getNetworks',
      getSecurityGroups: 'networks/getSecurityGroups',
      getImages: 'images/getImages'
    })
  }
}
</script>
