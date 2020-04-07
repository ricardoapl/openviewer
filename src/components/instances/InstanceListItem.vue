<template>
  <!-- XXX Update state reactively... -->
  <tr>
    <td>{{ server.name }}</td>
    <td>
      <!-- XXX This whole template "thingy" could be placed in a computed method -->
      <template v-for="image in images">
          {{ image.id == server.image.id ? image.name : '' }}
      </template>
    </td>
    <td>
      <!-- XXX This whole template "thingy" could be placed in a computed method -->
      <!-- XXX We may want to rename the following variables though -->
      <template v-for="network in server.addresses">
        <template v-for="address in network">
          {{ address.addr }}
        </template>
      </template>
    </td>
    <td>
      <!-- XXX This whole template "thingy" could be placed in a computed method -->
      <template v-for="flavor in flavors">
        {{ flavor.id == server.flavor.id ? flavor.name : '' }}
      </template>
    </td>
    <td>{{ server.key_name || '-' }}</td>
    <td>{{ server.status }}</td>
    <td>{{ server['OS-EXT-AZ:availability_zone'] }}</td>
    <!-- XXX Refactor complex expressions into computed properties or methods -->
    <td>{{ status[server['OS-EXT-STS:power_state']] }}</td>
    <td>
      <div class="btn-group" role="group" aria-label="Actions">
        <btn
          class="mr-1"
          is="instance-list-item-button-start"
          v-bind:server="server">
        </btn>
        <btn
          class="mr-1"
          is="instance-list-item-button-stop"
          v-bind:server="server">
        </btn>
        <btn
          class="mr-1"
          is="instance-list-item-button-update-metadata"
          v-bind:server="server">
        </btn>
        <btn
          is="instance-list-item-button-delete"
          v-bind:server="server">
        </btn>
      </div>
    </td>
  </tr>
</template>

<script>
import InstanceListItemButtonStart from './InstanceListItemButtonStart'
import InstanceListItemButtonStop from './InstanceListItemButtonStop'
import InstanceListItemButtonUpdateMetadata from './InstanceListItemButtonUpdateMetadata'
import InstanceListItemButtonDelete from './InstanceListItemButtonDelete'
export default {
  name: 'InstanceListItem',
  components: {
    InstanceListItemButtonStart,
    InstanceListItemButtonStop,
    InstanceListItemButtonUpdateMetadata,
    InstanceListItemButtonDelete
  },
  props: {
    server: Object
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
  computed: {
    flavors () {
      return this.$store.state.instances.flavors
    },
    images () {
      return this.$store.state.images.images
    }
  },
  mounted () {
    console.log('InstanceListItem created and mounted for server with id ' + this.server.id)
  }
}
</script>
