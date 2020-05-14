<template>
  <div>
    <b-button
      class="mx-1"
      size="sm"
      variant="primary"
      data-placement="top"
      data-toggle="tooltip"
      title="Edit deployment"
      @click="showModal = true"
    >
      <svg
        class="bi bi-plus-square-fill"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm6.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z"
          clip-rule="evenodd"
        />
      </svg>
    </b-button>
    <b-modal
      v-model="showModal"
      size="xl"
      centered
      hide-header
      hide-backdrop
    >
      <b-container>
        <!-- XXX (ricardoapl) Add remaining form -->
        <b-form-textarea
          id="textarea"
          v-model="deploymentString"
          rows="20"
          no-resize
        />
      </b-container>
      <template v-slot:modal-footer>
        <b-container class="text-center">
          <b-button
            class="mx-1"
            variant="success"
            @click="saveDeployment()"
          >
            Save
          </b-button>
          <b-button
            class="mx-1"
            @click="cancel()"
          >
            Cancel
          </b-button>
        </b-container>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'DeploymentsListActionEdit',
  props: [
    'deployment'
  ],
  data () {
    return {
      showModal: false,
      deploymentString: this.objectToString(this.deployment)
    }
  },
  watch: {
    deployment: function (newDeployment, oldDeployment) {
      // This is required because:
      // - prop change doesn't trigger data section update by itself
      // - v-model doesn't work with computed section (e.g. deploymentString)
      this.deploymentString = this.objectToString(newDeployment)
    }
  },
  mounted () {
    console.log('DeploymentsListActionEdit created and mounted for deployment with name ' + this.deployment.metadata.name)
    // XXX (ricardoapl) We may want to use v-b-tooltip instead of jQuery
    $(function () { $('[data-toggle="tooltip"]').tooltip() })
  },
  methods: {
    objectToString: function (object) {
      const indentation = 2
      const replacer = null
      const string = JSON.stringify(object, replacer, indentation)
      return string
    },
    cancel: function () {
      this.deploymentString = this.objectToString(this.deployment)
      this.showModal = false
    },
    saveDeployment: function () {
      const namespace = this.deployment.metadata.namespace
      const deployment = this.deployment.metadata.name
      const url = `/apis/apps/v1/namespaces/${namespace}/deployments/${deployment}`
      const body = this.buildBody(this.deploymentString)
      axios.put(url, body)
        .then(response => {
          console.log(response)
          const action = 'deployments/getDeployments'
          this.$store.dispatch(action)
          this.showModal = false
        })
        .catch(error => {
          console.log(error)
        })
    },
    buildBody: function (deploymentString) {
      const body = {
        kind: 'Deployment',
        apiVersion: 'apps/v1'
      }
      const deploymentObject = JSON.parse(deploymentString)
      Object.assign(body, deploymentObject)
      return body
    }
  }
}
</script>
