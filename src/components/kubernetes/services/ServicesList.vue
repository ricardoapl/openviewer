<template>
  <div class="container table-responsive">
    <b-table
      show-empty
      bordered
      :per-page="perPage"
      :current-page="currentPage"
      striped
      hover
      :items="filteredServices"
      :fields="fields"
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
      <template v-slot:cell(ports)="row">
        <template v-for="port in row.item.spec.ports">
          <span
            :key="port.name"
            class="badge badge-primary"
          >
            <span v-if="port.port">{{ 'Port: ' + port.port }}</span>
            <span v-if="port.targetPort">{{ ' Target Port: ' + port.targetPort }}</span>
            <span v-if="port.protocol">{{ ' Protocol: ' + port.protocol }}</span>
          </span>
        </template>
      </template>
      <template v-slot:cell(selector)="row">
        <span v-if="row.item.spec.selector">
          <template v-for="(key, value) in row.item.spec.selector">
            <span
              :key="key"
              class="badge badge-secondary"
            >
              {{ value + ': ' + key }}
            </span>
          </template>
        </span>
        <template v-else>
          No Selector
        </template>
      </template>
      <template v-slot:cell(actions)="row">
        <b-button-group>
          <services-list-action-delete :service="row.item" />
          <services-list-action-edit :service="row.item" />
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
import ServicesListActionDelete from './ServicesListActionDelete.vue'
import ServicesListActionEdit from './ServicesListActionEdit.vue'
export default {
  name: 'ServicesList',
  components: {
    ServicesListActionDelete,
    ServicesListActionEdit
  },
  props: [
    'namespace',
    'typeService'
  ],
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
          key: 'metadata.namespace',
          label: 'Namespace'
        },
        {
          key: 'labels',
          label: 'Labels'
        },
        {
          key: 'spec.clusterIP',
          label: 'clusterIP'
        },
        {
          key: 'ports',
          label: 'Ports'
        },
        {
          key: 'selector',
          label: 'Selector'
        },
        {
          key: 'actions',
          label: 'Actions'
        }
      ]

    }
  },
  computed: {
    filteredServices () {
      if (this.namespace == '*' || this.namespace == undefined) {
        return this.$store.state[this.typeService][this.typeService]
      } else {
        return this.$store.state[this.typeService][this.typeService].filter((obj) => {
          return obj.metadata.namespace == this.namespace
        })
      }
    },
    rows () {
      return this.filteredServices.length
    }
  },
  watch: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>

.opacity{
  opacity: 0.8;
}

</style>
