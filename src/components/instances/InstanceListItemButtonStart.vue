<template>
  <button
    type="button"
    data-toggle="tooltip"
    data-placement="top"
    title="Start instance"
    class="btn btn-success btn-sm"
    v-on:click="startServer()"
    >
    <svg class="bi bi-play-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'InstanceListItemButtonStart',
  props: {
    server: Object
  },
  mounted () {
    console.log('InstanceListItemButtonStart created and mounted for server with id ' + this.server.id)
    // XXX We may want to get rid of this jQuery voodoo in the future...
    $(function () { $('[data-toggle="tooltip"]').tooltip() })
  },
  methods: {
    startServer: function () {
      console.log('startServer() called on InstanceListItemButtonStart for server ' + this.server.id)
      const url = '/compute/v2.1//servers/' + this.server.id + '/action'
      const body = {
        'os-start': null
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
