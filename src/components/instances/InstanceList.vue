<template>
  <div class="container table-responsive">
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
          v-bind:server="server">
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import InstanceListItem from './InstanceListItem'
export default {
  name: 'InstanceList',
  components: {
    InstanceListItem
  },
  computed: {
    servers () {
      return this.$store.state.instances.servers
    }
  },
  mounted () {
    console.log('InstanceList created and mounted')
    this.getServers()
  },
  methods: {
    // XXX Consider removing action mapping in favor of this.$store...
    ...mapActions({
      getServers: 'instances/getServers'
    })
  }
}
</script>
