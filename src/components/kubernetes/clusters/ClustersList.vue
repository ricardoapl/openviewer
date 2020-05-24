<template>
  <div class="container table-responsive">
    <b-table
      show-empty
      bordered
      :per-page="perPage"
      :current-page="currentPage"
      striped
      hover
      :items="clusters"
      :fields="fields"
    >
      <template v-slot:cell(address)="row">
        <span class="badge badge-dark">
          {{ row.item.ip + ': ' + row.item.port }}
        </span>
      </template>
      <template v-slot:cell(masters)="row">
        <template v-for="master in row.item.nodes.master">
          <span
            :key="master.name"
            class="badge badge-success"
          >
            {{ master.name }}
          </span>
        </template>
      </template>
      <template v-slot:cell(workers)="row">
        <template v-for="worker in row.item.nodes.worker">
          <span
            :key="worker.name"
            class="badge badge-info d-block mb-1"
          >
            {{ worker.name }}
          </span>
        </template>
      </template>
      <template v-slot:cell(actions)="row">
        <b-button-group>
          <cluster-list-action-delete
            :cluster="row.item"
          />
          <cluster-list-action-select
            :cluster="row.item"
          />
        </b-button-group>
      </template>
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="right"
    />
  </div>
</template>
<script>
import ClusterListActionDelete from './ClustersListActionDelete.vue'
import ClusterListActionSelect from './ClustersListActionSelect.vue'
export default {
  name: 'ClusterList',
  components: {
    ClusterListActionDelete,
    ClusterListActionSelect
  },
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'address',
          label: 'IP:Port'
        },
        {
          key: 'masters',
          label: 'Masters'
        },
        {
          key: 'workers',
          label: 'Workers'
        },
        {
          key: 'actions',
          label: 'Actions'
        }
      ]

    }
  },
  computed: {
    rows () {
      return this.clusters.length
    },
    clusters () {
      return this.$store.state.clusters.clusters
    }
  }
}
</script>
