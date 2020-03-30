<template>
  <!-- XXX Apply Bootstrap grid system -->
  <tr>
    <td>{{ server.name }}</td>
    <!-- TODO Fix instance image name -->
    <td>{{ server.image || '-' }} </td>
    <td>
      <template v-for="network in server.addresses">
        <template v-for="address in network">
          {{ address.addr }}
        </template>
      </template>
    </td>
    <td>
      <template v-for="flavor in flavors">
        {{ flavor.id == server.flavor.id ? flavor.name : '' }}
      </template>
    </td>
    <td>{{ server.key_name || '-' }}</td>
    <td>{{ server.status }}</td>
    <!-- XXX There must be an easier way to retrieve the properties below... -->
    <td>{{ server['OS-EXT-AZ:availability_zone'] }}</td>
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
  props: {
    status: Array,
    flavors: Array,
    server: Object
  },
  mounted () {
    console.log('InstanceListItem created and mounted for server with id ' + this.server.id)
  }
}
</script>
