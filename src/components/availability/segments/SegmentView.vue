<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">Segments</h1>
        <p>In this page you can control all of your segments.<br>If you want to create a new segment click on the button down bellow.</p>
      </div>
      <button
        class="btn btn-outline-info mt-4"
        v-on:click="showSegmentForm = !showSegmentForm"
        >Create Segment
      </button>
    </div>
    <segment-form
      v-if="showSegmentForm"
      v-on:hide="showSegmentForm = false">
    </segment-form>
    <segment-list></segment-list>
  </div>
</template>

<script>
import SegmentForm from './SegmentForm'
import SegmentList from './SegmentList'
export default {
  name: 'SegmentView',
  components: {
    SegmentForm,
    SegmentList
  },
  data () {
    return {
      showSegmentForm: false
    }
  },
  mounted () {
    console.log('SegmentView created and mounted')
  }
}
</script>
