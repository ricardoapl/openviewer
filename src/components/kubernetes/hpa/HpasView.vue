<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">
          Horizontal Pod Autoscaling
        </h1>
        <p>Manage Horizontal Pod Autoscalers for your Resource Controllers</p>
      </div>
      <div class="row">
        <span class="col"></span>
        <button
          class="btn btn-outline-info mt-4 col-3"
          @click="showHPAForm = !showHPAForm"
        >
          Create HPA
        </button>
        <span class="col"></span>
      </div>
    </div>
    <div class="container mt-5">
      <hpas-form
        v-show="showHPAForm"
        :namespaces-names="namespacesNames"
        @hide="showHPAForm = !showHPAForm"
      />
      <div class="my-5">
        Filter by Namespace
        <select
          v-model="selectedNamespace"
          class="custom-select"
        >
          <option value="*">
            All Namespaces
          </option>
          <option
            v-for="namespace in namespacesNames"
            :key="namespace"
            :value="namespace"
          >
            {{ namespace }} Namespace
          </option>
        </select>
      </div>
      <hpas-list
        :namespace="selectedNamespace"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import hpasList from './HpasList.vue'
import hpasForm from './HpasForm.vue'

export default {
  name: 'HpasView',
  components: {
    hpasForm,
    hpasList
  },
  data () {
    return {
      showHPAForm: false,
      selectedNamespace: '*'
    }
  },
  computed: {
    namespacesNames () {
      return this.$store.state.namespaces.namespaces.map(namespace => namespace.metadata.name)
    }
  },
  mounted () {
    this.getNamespaces()
    this.getHpas();
  },
  methods: {
    promUI(){
      window.open(this.$prometheus, "_blank");		
    },
    grafanaUI(){
      window.open(this.$grafana, "_blank");
    },
    ...mapActions({
      getNamespaces: 'namespaces/getNamespaces',
      getHpas: 'hpas/getHpas',
    })
  }
}
</script>
