<template>
  <tr>
    <td>{{ floatingip.floating_ip_address }}</td>
    <td>{{ floatingip.description }}</td>
    <td>{{ floatingip.fixed_ip_address }}</td>
    <td>
      <!-- XXX This whole template "thingy" could be placed in a computed method -->
      <template v-for="pool in floatingPools">
        {{ pool.network_id == floatingip.floating_network_id ? pool.subnet_name : '' }}
      </template>
    </td>
    <td>{{ floatingip.status }}</td>
    <td>
      <div class="btn-group" role="group" aria-label="Actions">
        <btn
          class="mr-1"
          is="floating-ip-list-item-button-associate"
          v-bind:floatingip="floatingip">
        </btn>
        <btn
          is="floating-ip-list-item-button-delete"
          v-bind:floatingip="floatingip">
        </btn>
      </div>
    </td>
  </tr>
</template>

<script>
import FloatingIpListItemButtonAssociate from './FloatingIpListItemButtonAssociate'
import FloatingIpListItemButtonDelete from './FloatingIpListItemButtonDelete'
export default {
  name: 'FloatingIpListItem',
  components: {
    FloatingIpListItemButtonAssociate,
    FloatingIpListItemButtonDelete
  },
  props: {
    floatingip: Object
  },
  computed: {
    floatingPools () {
      return this.$store.state.networks.floatingPools
    }
  },
  mounted () {
    console.log('FloatingIpListItem created and mounted for floating IP with id ' + this.floatingip.id)
  }
}
</script>
