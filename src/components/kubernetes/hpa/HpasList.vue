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
      <template v-slot:cell(scaleTargetRef)="row">
        <div class="text-center">
          <span class="badge badge-warning">
          {{ row.item.spec.scaleTargetRef.kind }}
          </span>
          <p>{{ row.item.spec.scaleTargetRef.name }}</p>
        </div>
      </template> 
      <template v-slot:cell(currentReplicas)="row">
        <span v-if="row.item.status.currentReplicas!=row.item.status.desiredReplicas" class="badge badge-danger">
          attention
        </span>
        {{row.item.status.currentReplicas}}/{{row.item.status.desiredReplicas}}
      </template>
      <template v-slot:cell(actions)="row">
        <div class="text-center">
          <b-button-group>
            <hpas-list-action-delete :hpa="row.item" />
            <!-- <services-list-action-edit :hpa="row.item" /> -->
            <hpas-list-action-log :hpa="row.item" />
          </b-button-group>
        </div>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="right"
    />

    <hr>
    


  </div>
</template>

<script>
import moment from 'moment'
import HpasListActionDelete from './HpasListActionDelete.vue'
// import ServicesListActionEdit from './ServicesListActionEdit.vue'
import HpasListActionLog from './HpasListActionLog.vue'

export default {
  name: 'HpasList',
  components: {
    HpasListActionDelete,
    // ServicesListActionEdit,
    HpasListActionLog
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
        { key: 'metadata.creationTimestamp', label: 'Created', formatter: 'created' },
        {
          key: 'spec.minReplicas',
          label: 'Min Replicas'
        },
        {
          key: 'currentReplicas',
          label: 'Current Replicas'
        },
        {
          key: 'spec.maxReplicas',
          label: 'Max Replicas'
        },
        {
          key: 'scaleTargetRef',
          label: 'Target Info'
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
    created: function (timestamp) {
      return moment(timestamp).fromNow()
    }
  }
}
</script>

<style scoped>

.opacity{
  opacity: 0.8;
}

</style>
