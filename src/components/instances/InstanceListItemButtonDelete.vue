<template>
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
</template>

<script>
export default {
  name: 'InstanceListItemButtonDelete',
  props: {
    server: Object
  },
  mounted () {
    console.log('InstanceListItemButtonDelete created and mounted for server with id ' + this.server.id)
    // XXX We may want to get rid of this jQuery voodoo in the future...
    $(function () { $('[data-toggle="tooltip"]').tooltip() })
  },
  methods: {
    deleteServer: function () {
      console.log('deleteServer() called on InstanceListItemButtonDelete for server ' + this.server.id)
      const url = '/compute/v2.1/servers/' + this.server.id
      axios.delete(url)
        .then(response => {
          console.log(response)
          const action = 'instances/getServers'
          this.$store.dispatch(action)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
