<template>
  <div>
    <button
      type="button"
      data-toggle="tooltip"
      data-placement="top"
      title="Start instance"
      class="btn btn-danger btn-sm"
      v-if="status == 'SHUTDOWN'"
      v-on:click="startServer()"
      >
      <svg class="bi bi-stop-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 3.5h6A1.5 1.5 0 0112.5 5v6a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 11V5A1.5 1.5 0 015 3.5z"/>
      </svg>
    </button>
    <button
      type="button"
      data-toggle="tooltip"
      data-placement="top"
      title="Stop instance"
      class="btn btn-danger btn-sm"
      v-if="status == 'RUNNING'"
      v-on:click="stopServer()"
      >
      <svg class="bi bi-stop-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 3.5h6A1.5 1.5 0 0112.5 5v6a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 11V5A1.5 1.5 0 015 3.5z"/>
      </svg>
    </button>
    <button
      type="button"
      data-toggle="tooltip"
      data-placement="top"
      title="Edit instance"
      class="btn btn-primary btn-sm mr-1"
      v-on:click="editServer()"
      >
      <svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clip-rule="evenodd"/>
      </svg>
    </button>
    <button
      type="button"
      data-toggle="tooltip"
      data-placement="top"
      title="Delete instance"
      class="btn btn-danger btn-sm"
      v-on:click="deleteServer()"
      >
      <svg class="bi bi-trash-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clip-rule="evenodd"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'InstanceListItemActions',
  props: {
    status: String,
    server: Object
  },
  mounted () {
    console.log('InstanceListItemActions created and mounted for server with id ' + this.server.id)
    // XXX We may want to get rid of this jQuery voodoo in the future...
    $(function () { $('[data-toggle="tooltip"]').tooltip() })
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
