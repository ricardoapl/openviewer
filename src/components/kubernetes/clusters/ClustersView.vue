<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center mt-4">
      <div class="container">
        <h1 class="display-4 mb-4">
          Clusters
        </h1>
        <p>
          In this page you can manage clusters through the API - <strong>FlasKinD</strong>.<br>
          Enter the <strong>Kubernetes</strong> & <strong>FlasKinD</strong> server address and click <strong>Get all clusters</strong> to start.<br>
        </p>
      </div>
      <b-row class="mt-4">
        <b-col />
        <b-col>
          <input
            id="address"
            v-model="$v.address.$model"
            type="text"
            name="address"
            class="text-center form-control"
            :class="validationStatus($v.address)"
            placeholder="Kubernetes / FlasKinD Address"
          >
          <div class="invalid-feedback">
            <span v-if="!$v.address.required"> Field Kubernetes / FlasKinD address is required </span>
          </div>
        </b-col>
        <b-col />
      </b-row>
      <button
        class="btn btn-outline-success mt-4 col-3 mr-2"
        @click="createCluster()"
      >
        Create new cluster
      </button>
      <button
        class="btn btn-outline-info mt-4 col-3 mr-2"
        @click="getAllClusters()"
      >
        Get all clusters
      </button>
      <button
        class="btn btn-outline-secondary mt-4 col-3 mr-2"
        @click="$router.push({ name: 'LoginKubernetes' })"
      >
        Back to login page
      </button>
    </div>
    <div class="container mt-5">
      <clusters-form
        v-show="showClustersForm"
        @hide="showClustersForm = !showClustersForm"
      />
    </div>
    <clusters-list />
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
import clustersList from './ClustersList.vue'
import clustersForm from './ClustersForm.vue'
export default {
  name: 'ClustersView',
  components: {
    'clusters-list': clustersList,
    'clusters-form': clustersForm
  },
  data () {
    return {
      showClustersForm: false,
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      variantAlert: 'danger',
      messageAlert: '',
      detailsAlert: '',
      address: '',
      clusters: {}
    }
  },
  validations: {
    address: {
      required
    }
  },
  mounted () {
    this.getClusters()
    this.address = this.$store.state.clusters.serverURL || 'http://127.0.0.1:5000'
  },
  methods: {
    ...mapActions({
      getClusters: 'clusters/getClusters'
    }),
    countDownChanged: function (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    validationStatus (validation) {
      return {
        'is-invalid': validation.$error || this.serverErrors,
        'is-valid': validation.$dirty
      }
    },
    checkAddress: function () {
      this.$v.$touch()
      return !this.$v.$invalid
    },
    createCluster: function () {
      if (this.checkAddress()) {
        this.showClustersForm = !this.showClustersForm
      } else {
        if (this.showClustersForm) {
          this.showClustersForm = false
        }
      }
    },
    getAllClusters: function () {
      if (this.checkAddress()) {
        this.$store.commit('clusters/setServerURL', this.address)
        this.getClusters()
      }
    }
  }
}
</script>
