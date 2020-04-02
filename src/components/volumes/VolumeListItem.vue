<template>
  <tr>
    <td>{{ volume.name || volume.id }} </td>
    <td>{{ volume.description || '-'}}</td>
    <td>{{ volume.size || '-'}}<small class="text-secondary"> GiB</small></td>
    <td><span class="badge badge-pill" v-bind:class="statusStyleClass">{{ volume.status || '-'}}</span></td>
    <td><span class="badge badge-pill" v-bind:class="attachStyleClass">{{ volume.attachments.length > 0 ? "Yes" : "No" || '-'}}</span></td>
    <td>
      <volume-list-item-actions
        v-bind:volume="volume">
      </volume-list-item-actions>
    </td>
  </tr>
</template>

<script>
import volumeListItemActions from './VolumeListItemActions'
export default {
  components: {
    volumeListItemActions
  },
  props: {
    volume: Object
  },
  computed: {
    statusStyleClass: function () {
      switch (this.volume.status) {
        case 'available':
          return 'badge-success'
        case 'error':
        case 'error_deleting':
          return 'badge-warning'
        case 'creating':
        case 'deleting':
          return 'badge-info'
        case 'in-use':
          return 'badge-primary'
        case 'attaching':
        case 'detaching':
          return 'badge-secondary'
        case 'maintenance':
          return 'badge-dark'
        default:
          return 'badge-light'
      }
    },
    attachStyleClass: function () {
      return this.volume.attachments.length > 0 ? 'badge-dark' : 'badge-light'
    }
  }
}
</script>
