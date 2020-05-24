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
      selectable
      @row-selected="onRowSelected"
      select-mode="single"
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
            <!-- XXX (zdzaz) Need to change the "See logs" Icon -->
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
    <div v-if="selectedHpa">
      Horizontal Pod Autoscaler <h4>{{selectedHpa.metadata.name}}</h4>
      <h5 class="text-primary mt-5">Defined Metrics</h5>
      <div class="container">
        <div class="row mt-3 ml-3">
        <div v-for="(metric,index) in selectedHpa.spec.metrics" :key="index">
          <div class="col-sm ">
            
            <div v-if="metric.resource" class="">

              <div :class="{ opacity: !selectedHpa.status.currentMetrics }" class="col mb-3 ml-3" style="width:460px">
                <div class="card text-center">
                    <div class="card-body">
                    <div class="mt-2">
                        <span class="badge badge-success">
                          {{metric.type}} metric
                        </span>
                        <p class="mt-2 lead">
                          {{metric.resource.target.type}} of {{metric.resource.name.toUpperCase()}}
                        </p>
                    </div>
                    <div v-if="selectedHpa.status.currentMetrics" style="font-size:20px" class="col-sm d-inline text-danger">
                      {{selectedHpa.status.currentMetrics[index].resource?selectedHpa.status.currentMetrics[index].resource.current[selectedHpa.spec.metrics[index].resource.target.type=='Utilization'?'averageUtilization':'averageValue']:'?'}}/{{selectedHpa.spec.metrics[index].resource.target.type=='Utilization'?selectedHpa.spec.metrics[index].resource.target.averageUtilization+'%':selectedHpa.spec.metrics[index].resource.target.averageValue}}
                    </div>
                    <div v-else class="row mt-3 ml-3">
                      No current metrics could be retrieved
                    </div>
                    </div>
                </div>
              </div>
            </div>
          
            <div v-if="metric.pods" class="">
              <div :class="{ opacity: !selectedHpa.status.currentMetrics }" class="col mb-3 ml-3" style="width:460px">
                <div class="card text-center">
                    <div class="card-body">
                    <div class="mt-2">
                        <span class="badge badge-warning">
                          {{metric.type}} custom metric
                        </span>
                        <p class="mt-2 lead">
                          {{metric.pods.target.type}} of {{metric.pods.metric.name}}
                        </p>
                    </div>
                    <div v-if="selectedHpa.status.currentMetrics" style="font-size:20px" class="col-sm d-inline text-danger">
                      {{selectedHpa.status.currentMetrics[index].pods?'averageValue':'?'}}/{{selectedHpa.spec.metrics[index].pods.target.averageValue}}
                    </div>
                    <div v-else class="row mt-3 ml-3">
                      No current metrics could be retrieved
                    </div>
                    </div>
                </div>
              </div>
            </div>

            <div v-if="metric.object" class="">
              <div :class="{ opacity: !selectedHpa.status.currentMetrics }" class="col mb-3 ml-3" style="width:460px">
                <div class="card text-center">
                    <div class="card-body">
                    <div class="mt-2">
                        <span class="badge badge-danger">
                          {{metric.type}} custom metric
                        </span>
                        <p class="mt-2 lead">

                          {{metric.object.target.type}} of {{metric.object.metric.name}}
                        </p>
                    </div>
                    <div v-if="selectedHpa.status.currentMetrics" style="font-size:20px" class="col-sm d-inline text-danger">
                      {{selectedHpa.status.currentMetrics[index].object?selectedHpa.status.currentMetrics[index].object.current[selectedHpa.spec.metrics[index].object.target.type=='Value'?'value':'averageValue']:'?'}}/{{selectedHpa.spec.metrics[index].object.target.type=='Value'?selectedHpa.spec.metrics[index].object.target.value:selectedHpa.spec.metrics[index].object.target.averageValue}}
                    </div>
                    <div v-else class="row mt-3 ml-3">
                      No current metrics could be retrieved
                    </div>
                    </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </div>
    

  </div>
</template>

<script>
import moment from 'moment'
import HpasListActionDelete from './HpasListActionDelete.vue'
import HpasListActionLog from './HpasListActionLog.vue'


export default {
  name: 'HpasList',
  components: {
    HpasListActionDelete,
    HpasListActionLog,
  },
  props: [
    'namespace',
  ],
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      selectedHpa:null,
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
      ],
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
    currentValue(currMetric,resourceType){
      if(!currMetric.resource){
        return;
      }
      console.log(resourceType)
      var value = currMetric.resource.current[resourceType.charAt(0).toLowerCase()+resourceType.slice(1)]
      console.log(value)
      return value;
    },
    created: function (timestamp) {
      return moment(timestamp).fromNow()
    },
    onRowSelected(items) {
      this.selectedHpa = items[0];
    },
  }
}
</script>

<style scoped>

.opacity{
  opacity: 0.5;
}

</style>
