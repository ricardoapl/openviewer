<template>
  <div>
    <button
      class="btn btn-warning"
      v-if="status == 'SHUTDOWN'"
      v-on:click="startServer()"
      >Start instance
    </button>
    <button
      class="btn btn-success"
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
      // TODO As part of US12
      console.log('deleteServer() called on InstanceListItemActions for server ' + this.server.id)
    }
  }
}
</script>
