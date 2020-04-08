<template>
  <div class="container table-responsive">
    <table class="table table-striped">
        <thead>
        <tr>
          <th>Action</th>
          <th>Timestamp</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        <!-- XXX Rename identifiers -->
        <template v-for="entry in details">
          <tr
            is="notification-details-list-item"
            v-for="line in entry.progress_details"
            v-bind:key="line.timestamp"
            v-bind:content="line"
            v-bind:name="entry.name"
            >
          </tr>
        </template>
      </tbody>
      <tfoot class="text-center">
        <tr>
          <td colspan=3>
            <button type="button" class="btn btn-outline-secondary" v-on:click="close()">Close</button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import NotificationDetailsListItem from './NotificationDetailsListItem'
export default {
  name: 'NotificationDetailsList',
  components: {
    NotificationDetailsListItem
  },
  props: {
    details: Array
  },
  mounted () {
    console.log('NotificationDetailsList created and mounted')
  },
  methods: {
    close: function () {
      // XXX Rename details to notification
      const mutation = 'notifications/unsetDetails'
      this.$store.commit(mutation)
    }
  }
}
</script>
