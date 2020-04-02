<template>
  <!-- XXX Apply Bootstrap grid system -->
  <div>
    <button
      class="btn btn-success"
      v-if="status == 'SHUTDOWN'"
      v-on:click="startServer()"
      >Start instance
    </button>
    <button
      class="btn btn-warning"
      v-if="status == 'RUNNING'"
      v-on:click="stopServer()"
      >Stop instance
    </button>
    <button
      class="btn btn-primary"
      v-on:click="editServer()"
      >Edit instance
    </button>
    <button
      class="btn btn-danger"
      v-on:click="deleteServer()"
      >Delete instance
    </button>
  </div>
</template>

<script>
export default {
  props: {
    status: String,
    server: Object
  },
  mounted () {
    console.log('InstanceListItemActions created and mounted for server with id ' + this.server.id)
  },
  methods: {
    startServer: function () {
      // TODO As part of US13
      console.log('startServer() called on InstanceListItemActions for server ' + this.server.id)
    },
    stopServer: function () {
      // TODO As part of US13
      console.log('stopServer() called on InstanceListItemActions for server ' + this.server.id)
    },
    editServer: function () {
      // TODO As part of US11
      console.log('editServer() called on InstanceListItemActions for server ' + this.server.id)
    },
    deleteServer: function () {
      console.log('deleteServer() called on InstanceListItemActions for server ' + this.server.id)
      axios.delete('/compute/v2.1/servers/' + this.server.id)
        .then(response => {
          console.log(response)
          // XXX Actions are async, and as such the InstanceList will update before the instance is removed
          this.$store.dispatch('instances/getServers')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
