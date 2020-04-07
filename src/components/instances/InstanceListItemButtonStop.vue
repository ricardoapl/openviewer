<template>
  <button
    type="button"
    data-toggle="tooltip"
    data-placement="top"
    title="Stop instance"
    class="btn btn-danger btn-sm"
    v-on:click="stopServer()"
    >
    <svg class="bi bi-stop-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3.5h6A1.5 1.5 0 0112.5 5v6a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 11V5A1.5 1.5 0 015 3.5z"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'InstanceListItemButtonStop',
  props: {
    server: Object
  },
  mounted () {
    console.log('InstanceListItemButtonStop created and mounted for server with id ' + this.server.id)
    // XXX We may want to get rid of this jQuery voodoo in the future...
    $(function () { $('[data-toggle="tooltip"]').tooltip() })
  },
  methods: {
    stopServer: function () {
      console.log('stopServer() called on InstanceListItemButtonStop for server ' + this.server.id)
      const url = '/compute/v2.1//servers/' + this.server.id + '/action'
      const body = {
        'os-stop': null
      }
      axios.post(url, body)
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
