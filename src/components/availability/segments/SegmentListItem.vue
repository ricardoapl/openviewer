<template>
  <tr>
    <td>{{ segment.name }}</td>
    <td>{{ segment.uuid }}</td>
    <td>{{ segment.recovery_method }}</td>
    <td>{{ segment.service_type }}</td>
    <td>{{ segment.descripton }}</td>
    <td>
      <segment-list-item-actions
        v-bind:segment="segment">
      </segment-list-item-actions>
    </td>
  </tr>
</template>

<script>
import SegmentListItemActions from './SegmentListItemActions'
export default {
  name: 'SegmentListItem',
  components: {
    SegmentListItemActions
  },
  props: {
    segment: Object
  },
  mounted () {
    console.log('SegmentListItem created and mounted for segment with id ' + this.segment.id)
  }
}
</script>
