<template>
  <tr>
    <td>{{ server.name }}</td>
    <td>
      <!-- XXX There must be an easier way to retrieve the image name -->
      <template v-for="image in images">
          {{ image.id == server.image.id ? image.name : '' }}
      </template>
    </td>
    <td>
      <!-- XXX There must be an easier way to retrieve the network address -->
      <template v-for="network in server.addresses">
        <template v-for="address in network">
          {{ address.addr }}
        </template>
      </template>
    </td>
    <td>
      <!-- XXX There must be an easier way to retrieve the flavor name -->
      <template v-for="flavor in flavors">
        {{ flavor.id == server.flavor.id ? flavor.name : '' }}
      </template>
    </td>
    <td>{{ server.key_name || '-' }}</td>
    <!-- XXX Update state reactively -->
    <td>{{ server.status }}</td>
    <td>{{ server['OS-EXT-AZ:availability_zone'] }}</td>
    <!-- XXX Update state reactively -->
    <td>{{ status[server['OS-EXT-STS:power_state']] }}</td>
    <td>
      <instance-list-item-actions
        v-bind:status="status[server['OS-EXT-STS:power_state']]"
        v-bind:server="server">
      </instance-list-item-actions>
    </td>
  </tr>
</template>

<script>
import InstanceListItemActions from './InstanceListItemActions'
export default {
  components: {
    InstanceListItemActions
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
      ]
    }
  },
  props: {
    server: Object
  },
  computed: {
    flavors () {
      return this.$store.state.instances.flavors
    },
    images () {
      return this.$store.state.instances.images
    }
  },
  mounted () {
    console.log('InstanceListItem created and mounted for server with id ' + this.server.id)
  }
}
</script>
