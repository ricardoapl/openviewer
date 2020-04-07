<template>
  <div class="container table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>IP Address</th>
          <th>Description</th>
          <th>Mapped Fixed IP Address</th>
          <th>Pool</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          is="floating-ip-list-item"
          v-for="floatingip in floatingips"
          v-bind:key="floatingip.id"
          v-bind:floatingip="floatingip">
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FloatingIpListItem from './FloatingIpListItem'
export default {
  name: 'FloatingIpList',
  components: {
    FloatingIpListItem
  },
  computed: {
    floatingips () {
      return this.$store.state.networks.floatingIps
    }
  },
  mounted () {
    console.log('FloatingIpList created and mounted')
    this.getFloatingIps()
  },
  methods: {
    ...mapActions({
      getFloatingIps: 'networks/getFloatingIps'
    })
  }
}
</script>
