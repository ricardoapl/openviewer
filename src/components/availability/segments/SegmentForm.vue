<template>
  <!-- XXX Validate form with Vuelidate -->
  <div class="container mb-4">
    <div class="card border-info">
      <div class="card-header bg-info text-light text-center">
        <p class="h5"><strong>Create new segment</strong></p>
      </div>
      <form
        v-on:submit.prevent="submitForm()"
        action="/instance-ha/v1/67862ce1fffa4afa80ad612f1e889c26/segments"
        method="POST"
      >
        <div class="card-body">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="name">Segment Name</label>
              <input type="text" class="form-control" id="name" v-model="segment.name"/>
            </div>
            <div class="form-group col-md-4">
              <!-- XXX May want to find a better id name... -->
              <label for="recovery">Recovery Method</label>
              <select class="custom-select" id="recovery" v-model="segment.recovery_method">
                <option
                  v-for="recovery in recoveries"
                  v-bind:key="recovery.id"
                  v-bind:value="recovery.id"
                  >{{ recovery.name }}
                </option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <!-- XXX May want to find a better id name... -->
              <label for="service">Service Type</label>
              <input type="text" class="form-control" id="service" v-model="segment.service_type"/>
            </div>
            <div class="form-group col-md-8">
              <label for="description">Description</label>
              <textarea class="form-control" id="description" rows="3" v-model="segment.description"></textarea>
            </div>
          </div>
        </div>
        <div class="card-footer text-center">
          <button type="submit" class="btn btn-success mr-2">Save Segment</button>
          <button type="button" class="btn btn-outline-secondary" v-on:click="$emit('hide')">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SegmentForm',
  data () {
    return {
      segment: {},
      // XXX The following array should be obtained from OpenStack, i.e., not hardcoded
      recoveries: [
        { id: 'auto', name: 'auto' },
        { id: 'auto_priority', name: 'auto_priority' },
        { id: 'reserved_host', name: 'reserved_host' },
        { id: 'rh_priority', name: 'rh_priority' }
      ]
    }
  },
  mounted () {
    console.log('SegmentForm created and mounted')
  },
  methods: {
    submitForm: function () {
      const projectId = this.$store.state.authentication.idSelectedProject
      const url = '/instance-ha/v1/' + projectId + '/segments'
      const body = {
        segment: this.segment
      }
      axios.post(url, body)
        .then(response => {
          console.log(response)
          const action = 'segments/getSegments'
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
