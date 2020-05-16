<template>
  <div class="container table-responsive">
    <b-table
      show-empty
      bordered
      :per-page="perPage"
      :current-page="currentPage"
      striped
      hover
      :items="nodes"
      :fields="fields"
    />

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
export default {
  name: 'NodesList',
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      fields: [
        {
          key: 'metadata.name',
          label: 'Name'
        },
        {
          key: 'metadata.creationTimestamp',
          label: 'Created',
          formatter: 'created'
        },
        {
          key: 'metadata.uid',
          label: 'UID'
        }
      ]

    }
  },
  computed: {
    nodes () {
      return this.$store.state.nodes.nodes
    },
    rows () {
      return this.nodes.length
    }
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
