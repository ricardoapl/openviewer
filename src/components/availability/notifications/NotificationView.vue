<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">Notifications</h1>
        <p>In this page you can see all of your notifications.</p>
      </div>
    </div>
    <notification-details-list
      v-if="showDetails"
      v-bind:details="details">
    </notification-details-list>
    <notification-list></notification-list>
  </div>
</template>

<script>
import NotificationList from './NotificationList'
import NotificationDetailsList from './NotificationDetailsList'
export default {
  name: 'NotificationView',
  components: {
    NotificationList,
    NotificationDetailsList
  },
  computed: {
    details () {
      return this.$store.state.notifications.details
    },
    showDetails () {
      return this.details !== null
    }
  },
  mounted () {
    console.log('NotificationView created and mounted')
  }
}
</script>
