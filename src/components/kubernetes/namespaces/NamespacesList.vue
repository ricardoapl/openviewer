<template>
  <div class="container table-responsive">
    <b-table
      show-empty
      bordered
      :per-page="perPage"
      :current-page="currentPage"
      striped
      hover
      :items="namespaces"
      :fields="fields"
    >
      <template v-slot:cell(actions)="row">
        <b-button-group>
          <namespaces-list-action-delete :namespace="row.item" />
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
import moment from 'moment'
import namespacesListActionDelete from './NamespacesListActionDelete'
export default {
  name: 'NamespacesList',
  components: {
    namespacesListActionDelete
  },
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      fields: [
        { key: 'metadata.name', label: 'Name' },
        { key: 'metadata.creationTimestamp', label: 'Created', formatter: 'created' },
        { key: 'metadata.uid', label: 'UID' },
        { key: 'actions', label: 'Actions' }
      ]

    }
  },
  computed: {
    namespaces () {
      return this.$store.state.namespaces.namespaces
    },
    rows () {
      return this.namespaces.length
    }
  },
  mounted () {
    console.log('NamespacesList created and mounted')
  },
  methods: {
    created: function (timestamp) {
      return moment(timestamp).fromNow()
    }
  }
}
</script>

<style scoped>
.opacity {
  opacity: 0.8;
}
</style>
