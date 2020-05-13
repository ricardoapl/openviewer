<template>
  <div class="container table-responsive">
    <b-table
      id="deployments-table"
      bordered
      striped
      hover
      v-bind:current-page="currentPage"
      v-bind:per-page="perPage"
      v-bind:fields="fields"
      v-bind:items="filteredDeployments"
    >
      <template v-slot:cell(labels)="row">
        <template v-for="(key, value) in row.item.metadata.labels">
          <span
            class="badge badge-info"
            v-bind:key="key"
          >
            {{ value + ': ' + key }}
          </span>
        </template>
      </template>
      <template v-slot:cell(pods)="row">
        {{ row.item.status.availableReplicas + ' / ' + row.item.status.replicas }}
      </template>
      <template v-slot:cell(images)="row">
        <template v-for="container in row.item.spec.template.spec.containers">
          <span
            class="badge badge-info"
            v-bind:key="container.image"
          >
            {{ container.image }}
          </span>
        </template>
      </template>
      <!-- TODO (ricardoapl) US07.3 and US07.4 -->
      <template v-slot:cell(actions)="row">
        <deployments-list-action-delete v-bind:deployment="row.item"></deployments-list-action-delete>
      </template>
    </b-table>
    <b-pagination
      aria-controls="deployments-table"
      align="right"
      v-model="currentPage"
      v-bind:per-page="perPage"
      v-bind:total-rows="rows"
    ></b-pagination>
  </div>
</template>

<script>
import DeploymentsListActionDelete from './DeploymentsListActionDelete'
export default {
  name: 'DeploymentsList',
  components: {
    DeploymentsListActionDelete
  },
  props: [
    'namespace'
  ],
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      fields: [
        // XXX (ricardoapl) Add health status icon
        { key: 'metadata.name', label: 'Name' },
        { key: 'metadata.namespace', label: 'Namespace' },
        { key: 'labels', label: 'Labels' },
        { key: 'pods', label: 'Pods' },
        // XXX (ricardoapl) Might want to format timestamp
        { key: 'metadata.creationTimestamp', label: 'Created' },
        { key: 'images', label: 'Images' },
        { key: 'actions', label: 'Actions' }
      ]
    }
  },
  mounted () {
    console.log('DeploymentsList created and mounted')
  },
  computed: {
    filteredDeployments () {
      if (this.namespace === '*') {
        return this.$store.state.deployments.deployments
      } else {
        return this.$store.state.deployments.deployments.filter((deployment) => {
          return deployment.metadata.namespace === this.namespace
        })
      }
    },
    rows () {
      return this.filteredDeployments.length
    }
  }
}
</script>

<style scoped>
.opacity {
  opacity: 0.8;
}
</style>
