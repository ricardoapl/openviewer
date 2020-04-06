<template>
  <tr>
    <td>{{ notification.source_host_uuid }}</td>
    <td>{{ notification.notification_uuid }}</td>
    <td>{{ notification.type }}</td>
    <td>{{ notification.status }}</td>
    <td>{{ notification.payload }}</td>
  </tr>
</template>

<script>
export default {
  name: 'NotificationListItem',
  props: {
    notification: Object
  },
  mounted () {
    console.log('NotificationListItem created and mounted for notification with id ' + this.notification.id)
  }
}
</script>
