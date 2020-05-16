<template>
  <div class="container">
    <div>
      <form
        action="/apis/apps/v1/namespaces/{namespace}/deployments/{deployment}"
        method="PUT"
        @submit.prevent="saveDeployment()"
      >
        <div>
          <b-form-group id="textarea-input-group">
            <b-form-textarea
              id="textarea"
              v-model="deploymentString"
              rows="20"
              no-resize
            />
          </b-form-group>
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="btn btn-success mr-2"
          >
            Save
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="cancel()"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeploymentsListActionEditAdvanced',
  props: {
    deployment: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
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
    console.log('DeploymentsListActionEditAdvanced created and mounted for deployment with name ' + this.deployment.metadata.name)
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
      this.$emit('hide')
    },
    saveDeployment: function () {
      const namespace = this.deployment.metadata.namespace
      const deployment = this.deployment.metadata.name
      const url = `/apis/apps/v1/namespaces/${namespace}/deployments/${deployment}`
      const body = this.getDeploymentBody()
      axios.put(url, body)
        .then(response => {
          console.log(response)
          const delay = 2500
          const action = 'deployments/getDeployments'
          setTimeout(this.$store.dispatch, delay, action)
          this.$emit('hide')
        })
        .catch(error => {
          console.log(error)
        })
    },
    getDeploymentBody: function () {
      const body = {
        kind: 'Deployment',
        apiVersion: 'apps/v1'
      }
      const deploymentObject = JSON.parse(this.deploymentString)
      Object.assign(body, deploymentObject)
      return body
    }
  }
}
</script>
