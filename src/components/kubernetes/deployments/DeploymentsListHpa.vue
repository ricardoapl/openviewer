<template>
<span>
  <div class="col-4 mt-3 ml-4">
    <label for="">Filter Deployments by Namespace:</label>
    <b-form-select
      size="sm"
      v-model="namespace"
      placeholder="Namespace"
      :options="namespacesNames"
    />
  </div>
  <span class="row mt-5 ml-3">
      <div v-for="deployment in filteredDeployments" :key="deployment.metadata.uid" >
          <div :class="{ opacity: selectedDeployment!=null && selectedDeployment!= deployment.metadata.name }" class="col mb-3 ml-3" style="width:300px">
          <div class="card text-center">
              <div class="card-body">
              <div class="mt-2">
                  <span class="badge badge-warning">Deployment</span>
                  <p class="mt-2 lead">
                  {{deployment.metadata.name}}
                  </p>
              </div>
              <p class="card-text">
                  On {{ deployment.metadata.namespace }}
              </p>
              <button
                  class="btn btn-info"
                  @click="selectDeployment(deployment)"
              >
                  Select
              </button>
              </div>
          </div>
          </div>
      </div>
  </span>
</span>
      
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DeploymentsListHpa',
  components: {
  },
  props: [
    'namespacesNames',
    'selectedDeployment'
  ],
  data () {
    return {
      namespace:'*'
    }
  },
  computed: {
    filteredDeployments () {
      if (this.namespace === '*'|| this.namespace == undefined) {
        return this.$store.state.deployments.deployments
      } else {
        return this.$store.state.deployments.deployments.filter((deployment) => {
          return deployment.metadata.namespace === this.namespace
        })
      }
    }
  },
  mounted () {
    this.getDeployments();
  },
  methods: {
    ...mapActions({
      getDeployments: 'deployments/getDeployments',
    }),
    selectDeployment(deployment){
      this.$emit('selectDeployment',deployment)
    }
  }
}
</script>

<style scoped>
.opacity {
  opacity: 0.5;
}
</style>
