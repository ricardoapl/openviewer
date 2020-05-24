<template>
  <div class="container table-responsive">
    <b-table
      show-empty
      bordered
      :per-page="perPage"
      :current-page="currentPage"
      striped
      hover
      :items="filteredHpas"
      :fields="fields"
    >
      <!-- <template v-slot:cell(labels)="row">
        <template v-for="(key, value) in row.item.metadata.labels">
          <span
            :key="key"
            class="badge badge-info"
          >
            {{ value + ': ' + key }}
          </span>
        </template>
      </template> -->
      <!-- <template v-slot:cell(ports)="row">
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
      </template> -->
      <!-- <template v-slot:cell(selector)="row">
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
      </template> -->
      <template v-slot:cell(actions)="row">
        <b-button-group>
          <hpas-list-action-delete :hpa="row.item" />
          <!-- <services-list-action-edit :hpa="row.item" /> -->
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
import HpasListActionDelete from './HpasListActionDelete.vue'
// import ServicesListActionEdit from './ServicesListActionEdit.vue'

export default {
  name: 'HpasList',
  components: {
    HpasListActionDelete,
    // ServicesListActionEdit
  },
  props: [
    'namespace',
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
          key: 'spec.minReplicas',
          label: 'MIN Replicas'
        },
        {
          key: 'spec.maxReplicas',
          label: 'MAX Replicas'
        },
        {
          key: 'spec.targetCPUUtilizationPercentage',
          label: 'TargetCPU'
        },
        {
          key: 'spec.scaleTargetRef.kind',
          label: 'Target Kind'
        },
        {
          key: 'spec.scaleTargetRef.name',
          label: 'Target Name'
        },
        {
          key: 'actions',
          label: 'Actions'
        }
      ]

    }
  },
  computed: {
    filteredHpas () {
      if (this.namespace == '*' || this.namespace == undefined){
        return this.$store.state.hpas.hpas;
      } else {
        return this.$store.state.hpas.hpas.filter((obj) => {
          return obj.metadata.namespace == this.namespace
        })
      }
    },
    rows () {
      return this.filteredHpas.length
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
