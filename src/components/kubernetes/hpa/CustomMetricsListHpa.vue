<template>
    <span class="row mt-3 ml-3">
        <!-- TODO: MINI FORM WHERE A USER CAN SPECIFY A CUSTOM METRIC -->
    </span>
</template>

<script>

export default {
  name: 'CustomMetricsListHpa',
  components: {
  },
  props: [
    
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
    addCustomMetric(customMetric){
        this.$emit('addCustomMetric',customMetric)
    }
  }
}
</script>

<style scoped>
.opacity {
  opacity: 0.5;
}
</style>
