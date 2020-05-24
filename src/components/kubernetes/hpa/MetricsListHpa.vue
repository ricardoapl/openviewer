<template>
    <span class="row mt-3 ml-3">
        <div :class="{ opacity: selectedMetrics.length>0 && this.selectedMetrics.map(function(x) {return x.id; }).indexOf('cpu_Utilization')==-1}" class="col mb-3" >
        <div class="card text-center">
            <div class="card-body">
            <div class="mt-2">
                <span class="badge badge-success">resource metrics</span>
                <p class="mt-2 lead">
                CPU
                </p>
            </div>
            <p class="card-text">
                Utilization (%)
            </p>
            <button
                class="btn btn-info"
                @click="addMetric('cpu_Utilization')"
            >
                Select
            </button>
            </div>
        </div>
        </div>
        <div :class="{ opacity: selectedMetrics.length>0 && this.selectedMetrics.map(function(x) {return x.id; }).indexOf('cpu_AverageValue')==-1 }" class="col mb-3" >
        <div class="card text-center">
            <div class="card-body">
            <div class="mt-2">
                <span class="badge badge-success">resource metrics</span>
                <p class="mt-2 lead">
                CPU
                </p>
            </div>
            <p class="card-text">
                Average Value
            </p>
            <button
                class="btn btn-info"
                @click="addMetric('cpu_AverageValue')"
            >
                Select
            </button>
            </div>
        </div>
        </div>
        <div :class="{ opacity: selectedMetrics.length>0 && this.selectedMetrics.map(function(x) {return x.id; }).indexOf('memory_Utilization')==-1  }" class="col mb-3" style="width:300px">
        <div class="card text-center">
            <div class="card-body">
            <div class="mt-2">
                <span class="badge badge-success">resource metrics</span>
                <p class="mt-2 lead">
                Memory
                </p>
            </div>
            <p class="card-text">
                Utilization (%)
            </p>
            <button
                class="btn btn-info"
                @click="addMetric('memory_Utilization')"
            >
                Select
            </button>
            </div>
        </div>
        </div>
        <div :class="{ opacity: selectedMetrics.length>0 && this.selectedMetrics.map(function(x) {return x.id; }).indexOf('memory_AverageValue')==-1 }" class="col mb-3" style="width:300px">
        <div class="card text-center">
            <div class="card-body">
            <div class="mt-2">
                <span class="badge badge-success">resource metrics</span>
                <p class="mt-2 lead">
                Memory
                </p>
            </div>
            <p class="card-text">
                Average Value
            </p>
            <button
                class="btn btn-info"
                @click="addMetric('memory_AverageValue')"
            >
                Select
            </button>
            </div>
        </div>
        </div>
    </span>
</template>

<script>

export default {
  name: 'MetricsListHpa',
  components: {
  },
  props: [
    'selectedMetrics'
  ],
  data () {
    return {

    }
  },
  computed: {
    
  },
  mounted () {
    console.log('MetricsListHpa created and mounted')
  },
  methods: {
    addMetric(metric){
        this.$emit('addMetric',metric)
    }
  }
}
</script>

<style scoped>
.opacity {
  opacity: 0.5;
}
</style>
