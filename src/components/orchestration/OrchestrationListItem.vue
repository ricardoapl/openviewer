<template>
  <tr>
    <td>{{ stack.stack_name || stack.id }} </td>
    <td>
      <span class="badge badge-pill" v-bind:class="actionStyleClass">{{ actionState || '-' }}</span>
      <span class="badge badge-pill stateBadge" v-bind:class="statusStyleClass">{{ statusState || '-' }}</span>
    </td>
    <td>{{ stack.stack_status_reason || '-' }}</td>
    <td>
      <orchestration-list-item-actions v-bind:stack="stack"></orchestration-list-item-actions>
    </td>
  </tr>
</template>

<script>
import OrchestrationListItemActions from './OrchestrationListItemActions'
export default {
  name: 'OrchestrationListItem',
  components: {
    OrchestrationListItemActions
  },
  props: {
    stack: Object
  },
  computed: {
    actionState () {
      return this.stack.stack_status.split('_')[0]
    },
    statusState () {
      return this.stack.stack_status.split('_')[1]
    },
    statusStyleClass: function () {
      switch (this.statusState) {
        case 'COMPLETE':
          return 'badge-success'
        case 'FAILED':
          return 'badge-warning'
        case 'IN_PROGRESS':
          return 'badge-info'
        default:
          return 'badge-secondary'
      }
    },
    actionStyleClass: function () {
      switch (this.actionState) {
        case 'CREATED':
          return 'badge-success'
        case 'DELETE':
          return 'badge-danger'
        case 'SUSPEND':
          return 'badge-warning'
        case 'RESUME':
          return 'badge-info'
        default:
          return 'badge-dark'
      }
    }
  }
}
</script>
<style>
.stateBadge {
  margin-left: -12px;
    z-index: -1;
    position: relative;
    padding-left: 16px;
}
</style>
