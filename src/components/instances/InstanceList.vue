<template>
  <div class="container">
    <table class="table table-striped">
        <thead>
        <tr>
          <th>Instance Name</th>
          <th>Image Name</th>
          <th>IP Address</th>
          <th>Flavor</th>
          <th>Key Pair</th>
          <th>Status</th>
          <th>Availability Zone</th>
          <th>Power State</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          is="instance-list-item"
          v-for="server in servers"
          v-bind:key="server.id"
          v-bind:status="status"
          v-bind:flavors="flavors"
          v-bind:server="server">
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import InstanceListItem from './InstanceListItem'
export default {
  components: {
    InstanceListItem
  },
  data () {
    return {
      status: [
        'NOSTATE',
        'RUNNING',
        '',
        'PAUSED',
        'SHUTDOWN',
        'CRASHED',
        'SUSPENDED'
      ],
      flavors: {},
      servers: {}
    }
  },
  methods: {
    getFlavors: function () {
      axios.get('/compute/v2.1/flavors')
        .then(response => {
          this.flavors = response.data.flavors
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getServers: function () {
      axios.get('/compute/v2.1/servers/detail')
        .then(response => {
          this.servers = response.data.servers
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getFlavors()
    this.getServers()
  }
}
</script>
