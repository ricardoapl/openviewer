<template>
  <div class="container table-responsive">
    <table class="table table-striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>UUID</th>
          <th>Recovery Method</th>
          <th>Service Type</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          is="segment-list-item"
          v-for="segment in segments"
          v-bind:key="segment.uuid"
          v-bind:segment="segment"
          >
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SegmentListItem from './SegmentListItem'
export default {
  name: 'SegmentList',
  components: {
    SegmentListItem
  },
  computed: {
    // XXX May want to have a look into Vuex mapState...
    segments () {
      return this.$store.state.segments.segments
    }
  },
  mounted () {
    // XXX May want to have a look into Vuex mapState...
    console.log('SegmentList created and mounted')
    const action = 'segments/getSegments'
    this.$store.dispatch(action)
  }
}
</script>
