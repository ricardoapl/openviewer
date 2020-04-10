<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">Orchestration</h1>
        <p>
          In this page your can lunch one template created by us.
          <br>This template auto-deploy a instance with an floating IP, and lunch a web server.~
          <br>Click on the button down bellow and deploy it!
        </p>
      </div>
      <button class="btn btn-outline-info mt-4">
        Feeling Lucky!
    </button>
    </div>
    <orchestration-list></orchestration-list>
  </div>
</template>

<script>
import OrchestrationList from './OrchestrationList'
export default {
  name: 'OrchestrationView',
  components: {
    OrchestrationList
  },
  mounted () {
    console.log('[OrchestrationView] => Created and mounted')
  }
}
</script>
