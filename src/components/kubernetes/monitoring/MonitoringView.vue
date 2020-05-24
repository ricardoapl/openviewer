<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">
          Monitoring
        </h1>
        <p>Monitor cluster, nodes, pods and many more.<br>Prometheus & Grafana can be accessed.</p>
      </div>
      <div class="row ">
        <span class="col-3"></span>
        <button
          class="btn btn-outline-secondary mt-4 col-3 mr-2"
          @click="promUI()"
        >
          Prometheus UI
        </button>
        <button
          class="btn btn-outline-secondary mt-4 col-3 mr-2"
          @click="grafanaUI()"
        >
          Grafana
        </button>
        <span class="col-3"></span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MonitoringView',
  components: {
  },
  data () {
    return {
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
  }
}
</script>
