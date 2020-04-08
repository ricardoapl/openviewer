<template>
  <tr>
    <td>{{ notification.source_host_uuid }}</td>
    <td>{{ notification.notification_uuid }}</td>
    <td>{{ notification.type }}</td>
    <td>{{ notification.status }}</td>
    <td>{{ notification.payload }}</td>
    <td>
      <notification-list-item-button-show-details
        v-bind:notification="notification">
      </notification-list-item-button-show-details>
    </td>
  </tr>
</template>

<script>
import NotificationListItemButtonShowDetails from './NotificationListItemButtonShowDetails'
export default {
  name: 'NotificationListItem',
  components: {
    NotificationListItemButtonShowDetails
  },
  props: {
    notification: Object
  },
  mounted () {
    console.log('NotificationListItem created and mounted for notification with id ' + this.notification.notification_uuid)
  }
}
</script>
