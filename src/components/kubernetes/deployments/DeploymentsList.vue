<template>
  <div class="container table-responsive">
    <b-table
      id="deployments-table"
      bordered
      show-empty
      striped
      hover
      :current-page="currentPage"
      :per-page="perPage"
      :fields="fields"
      :items="filteredDeployments"
    >
      <template v-slot:cell(labels)="row">
        <template v-for="(key, value) in row.item.metadata.labels">
          <span
            :key="key"
            class="badge badge-info"
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
            :key="container.image"
            class="badge badge-info"
          >
            {{ container.image }}
          </span>
        </template>
      </template>
      <template v-slot:cell(actions)="row">
        <!-- XXX (ricardoapl) How do we know these are buttons? -->
        <!-- TODO (ricardoapl) Only render at DeploymentsView -->
        <b-button-group>
          <deployments-list-action-delete :deployment="row.item" />
          <deployments-list-action-edit :deployment="row.item" />
        </b-button-group>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      aria-controls="deployments-table"
      align="right"
      :per-page="perPage"
      :total-rows="rows"
    />
  </div>
</template>

<script>
import DeploymentsListActionDelete from './DeploymentsListActionDelete'
import DeploymentsListActionEdit from './DeploymentsListActionEdit'
export default {
  name: 'DeploymentsList',
  components: {
    DeploymentsListActionDelete,
    DeploymentsListActionEdit
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
  },
  mounted () {
    console.log('DeploymentsList created and mounted')
  }
}
</script>

<style scoped>
.opacity {
  opacity: 0.8;
}
</style>
