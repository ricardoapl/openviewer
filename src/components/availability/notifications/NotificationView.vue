<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">Notifications</h1>
        <p>In this page you can see all of your notifications.</p>
      </div>
    </div>
    <notification-list></notification-list>
  </div>
</template>

<script>
import NotificationList from './NotificationList'
export default {
  name: 'NotificationView',
  components: {
    NotificationList
  },
  mounted () {
    console.log('NotificationView created and mounted')
  }
}
</script>
