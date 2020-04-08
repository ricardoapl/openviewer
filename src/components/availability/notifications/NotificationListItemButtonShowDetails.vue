<template>
  <button
    type="button"
    data-toggle="tooltip"
    data-placement="top"
    title="Show details"
    class="btn btn-info btn-sm"
    v-on:click="showDetails()"
    >
    <svg class="bi bi-info-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clip-rule="evenodd"/>
      <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
      <circle cx="8" cy="4.5" r="1"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'NotificationListItemButtonShowDetails',
  props: {
    notification: Object
  },
  mounted () {
    console.log('NotificationListItemButtonShowDetails created and mounted for notification with id ' + this.notification.notification_uuid)
    // XXX We may want to get rid of this jQuery voodoo in the future...
    $(function () { $('[data-toggle="tooltip"]').tooltip() })
  },
  methods: {
    // XXX Rename details to notification
    showDetails: function () {
      const projectId = this.$store.state.authentication.idSelectedProject
      const url = '/instance-ha/v1/' + projectId + '/notifications/' + this.notification.notification_uuid
      const config = {
        headers: {
          'OpenStack-API-Version': 'instance-ha 1.1'
        }
      }
      axios.get(url, config)
        .then(response => {
          console.log(response)
          // XXX Should we use mutations, or actions?
          const payload = response.data.notification.recovery_workflow_details
          // XXX Rename details to notification
          const mutation = 'notifications/setDetails'
          this.$store.commit(mutation, payload)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
