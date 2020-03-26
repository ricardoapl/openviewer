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
// TODO Remove axios require after defining 'global' axios require
import axios from 'axios'
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
      const url = 'http://127.0.0.1:8080/compute/v2.1/flavors'
      // TODO Remove the following header setup after login is implemented and make use of axios.defaults.headers.common instead
      const config = {
        headers: {
          'X-Auth-Token': 'gAAAAABefiiCqXZLTLtbFWM9JAGA0uVuwZStyL9tzMXDJK4KqUThHi40HDazVj1mJFIAmHIkW2PEThxUR6AU9X5sb7IUsueTk0QHxSaNxqZ-5JEcKIB6_DENsiGd8yLgMYCSnShfqkGrzc3dOXHWA2D6L1h-5U1bv4sFFsovWmRAi4uNPz3hpP4'
        }
      }
      axios.get(url, config)
        .then(response => {
          this.flavors = response.data.flavors
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getServers: function () {
      const url = 'http://127.0.0.1:8080/compute/v2.1/servers/detail'
      // TODO Remove the following header setup after login is implemented and make use of axios.defaults.headers.common instead
      const config = {
        headers: {
          'X-Auth-Token': 'gAAAAABefiiCqXZLTLtbFWM9JAGA0uVuwZStyL9tzMXDJK4KqUThHi40HDazVj1mJFIAmHIkW2PEThxUR6AU9X5sb7IUsueTk0QHxSaNxqZ-5JEcKIB6_DENsiGd8yLgMYCSnShfqkGrzc3dOXHWA2D6L1h-5U1bv4sFFsovWmRAi4uNPz3hpP4'
        }
      }
      axios.get(url, config)
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
