<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">
          Horizontal Pod Autoscaling
        </h1>
        <p>Configure HPA with custom metrics API.<br>If you want to go to a dedicated Prometheus UI or Grafana click on the buttons down bellow.</p>
      </div>
      <button
        class="btn btn-outline-info mt-4 col-3 mr-2"
        @click="promUI()"
      >
        Prometheus UI
      </button>
      <button
        class="btn btn-outline-info mt-4 col-3 mr-2"
        @click="grafanaUI()"
      >
        Grafana
      </button>
    </div>
    <div class="container mt-5">
     
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MonitoringView',
  components: {
  },
  data () {
    return {
      showServicesForm: false,
      selectedNamespace: '*'
    }
  },
  computed: {
    
  },
  mounted () {
    
  },
  methods: {
      promUI(){
		window.open(this.$prometheus, "_blank");		
      },
      grafanaUI(){
        window.open(this.$grafana, "_blank");
      },
      getValues(){
          
      }
  }
}
</script>
