<template>
  <div class="container table-responsive">
    <table class="table table-striped">
        <thead>
        <tr>
          <th>Host</th>
          <th>UUID</th>
          <th>Type</th>
          <th>Status</th>
          <th>Payload</th>
        </tr>
      </thead>
      <tbody>
        <tr
          is="notification-list-item"
          v-for="notification in notifications"
          v-bind:key="notification.id"
          v-bind:notification="notification"
          >
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import NotificationListItem from './NotificationListItem'
export default {
  name: 'NotificationList',
  components: {
    NotificationListItem
  },
  data: function () {
    return {
      notifications: []
    }
  },
  mounted () {
    console.log('NotificationList created and mounted')
    this.getNotifications()
  },
  methods: {
    getNotifications: function () {
      const url = '/instance-ha/v1/67862ce1fffa4afa80ad612f1e889c26/notifications'
      axios.get(url)
        .then(response => {
          console.log(response)
          this.notifications = response.data.notifications
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
