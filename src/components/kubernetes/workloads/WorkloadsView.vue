<template>
  <div class="container">
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">
          Workloads
        </h1>
        <p>In this page you can manage all of your Workloads.<br>If you want to create a new deployment click on the button down bellow.</p>
      </div>
      <button
        class="btn btn-outline-info mt-4"
        @click="showDeploymentsForm = !showDeploymentsForm"
      >
        Create deployment
      </button>
    </div>
    <div class="mt-5">
      <deployments-form
        v-if="showDeploymentsForm"
        :namespace="selectedNamespace"
        @hide="showDeploymentsForm = false"
      />
      <div class="my-5">
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
      <b-tabs
        content-class="mt-3"
        justified
      >
        <b-tab
          title="Deployments"
          active
        >
          <h3 class=" mb-3 ml-3">
            Deployments List
          </h3>
          <deployments-list :namespace="selectedNamespace" />
        </b-tab>
        <b-tab title="Pods & Containers">
          <h3 class=" mb-3 ml-3"> Pods List </h3>
          <pods-list @newSelectedPod="newSelectedPod" :namespace="selectedNamespace"></pods-list>
          <div class="mt-3" v-if="pod">
            <b-modal style="min-width:70%" hide-backdrop :key="pod.metadata.uid" content-class="shadow" v-model="modalShow" id="modal-1" :title="'Containers of Pod '+pod.metadata.name">
                <containers-list  :key="pod.metadata.uid" :pod="pod"></containers-list>
            </b-modal>
            <!-- <h3 class=" mb-5 ml-3">Pod <span class="text-info">  {{pod.metadata.name}} </span>'s Containers </h3> -->
            <!-- <containers-list  :key="pod.metadata.uid" :pod="pod"></containers-list> -->
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DeploymentsList from '../deployments/DeploymentsList'
import DeploymentsForm from '../deployments/DeploymentsForm'
import podsList from '../pods/PodsList'
import containersList from '../pods/ContainersList'
export default {
  name: 'WorkloadsView',
  components: {
    DeploymentsList,
    DeploymentsForm,
    'pods-list': podsList,
    'containers-list': containersList,
  },
  data () {
    return {
      showDeploymentsForm: false,
      selectedNamespace: '*',
      pod: null,
      modalShow:false
    }
  },
  computed: {
    namespacesNames () {
      return this.$store.state.namespaces.namespaces.map(namespace => namespace.metadata.name)
    }
  },
  watch: {
  },
  mounted () {
    console.log('WorkloadsView created and mounted')
    this.getDeployments()
    this.getNamespaces()
  },
  methods: {
    ...mapActions({
      getDeployments: 'deployments/getDeployments',
      getNamespaces: 'namespaces/getNamespaces'
    }),
    newSelectedPod(incomingPod){
      if(incomingPod){
        this.pod = incomingPod;
        this.modalShow = true
      }
    }
  }
}
</script>
