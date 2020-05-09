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
        <b-button
          v-on:click="actions(row.item)"
        >
          <svg class="bi bi-three-dots-vertical" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clip-rule="evenodd"/>
          </svg>
        </b-button>
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
export default {
  name: 'DeploymentsList',
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
  },
  methods: {
    actions: function (deployment) {
      // TODO (ricardoapl) US07.3 and US07.4
      console.log('Call to actions() with deployment with uid ' + deployment.metadata.uid)
    }
  }
}
</script>

<style scoped>
.opacity {
  opacity: 0.8;
}
</style>
