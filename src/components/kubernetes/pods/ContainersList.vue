<template>
  <span>
    <span v-if="pod && pod.spec.containers.length>0">
      <div class="container table-responsive">
        <b-table
          show-empty
          bordered
          :per-page="perPage"
          :current-page="currentPage"
          striped
          hover
          :items="pod.spec.containers"
          :fields="fields"
        >
          <template v-slot:cell(memory)="row">
            <span v-if="row.item.resources.limits">{{ row.item.resources.limits.memory|| 'None' }}</span>
            <span v-else>None</span>
          </template>
          <template v-slot:cell(cpu)="row">
            <span v-if="row.item.resources.limits">{{ row.item.resources.limits.cpu || 'None' }}</span>
            <span v-else>None</span>
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
    </span>
    <span v-else>
      <div class="container table-responsive">
        <b-table
          show-empty
          bordered
          :per-page="perPage"
          :current-page="currentPage"
          striped
          hover
          :items="[]"
          :fields="fields"
        />
      </div>
    </span>
  </span>
</template>

<script>

export default {
  name: 'ContainersList',
  props: [
    'pod'
  ],
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      selectedPod: {},
      fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'image',
          label: 'Image'
        },
        {
          key: 'memory',
          label: 'Memory Limit'
        },
        {
          key: 'cpu',
          label: 'CPU Limit'
        }
      ]

    }
  },
  computed: {
    filteredPods () {
      if (this.namespace == '*') {
        return this.$store.state.pods.pods
      } else {
        return this.$store.state.pods.pods.filter((obj) => {
          return obj.metadata.namespace == this.namespace
        })
      }
    },
    rows () {
      return this.filteredPods.length
    }
  },
  watch: {
  },
  mounted () {
    console.log(this.pod.spec)
  },
  methods: {
    onRowSelected (items) {
      this.selectedPod = items[0]
      this.$emit('newSelectedPod', this.selectedPod)
    }
  }
}
</script>

<style scoped>

.opacity{
  opacity: 0.8;
}

</style>
