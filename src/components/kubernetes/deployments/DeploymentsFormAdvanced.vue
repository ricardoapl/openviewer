<template>
  <div class="container">
    <div>
      <form
        action="/apis/apps/v1/namespaces/{namespace}/deployments"
        method="POST"
        @submit.prevent="submitForm()"
      >
        <div class="card-body">
          <b-form-group id="textarea-input-group">
            <b-form-textarea
              id="textarea"
              v-model="deploymentString"
              rows="20"
              no-resize
            />
          </b-form-group>
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
              @click="$emit('hide')"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeploymentsFormAdvanced',
  props: {
    namespace: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      deploymentString:
        // XXX (ricardoapl) Weird indentation so it shows up pretty in the browser...
        `{
  "metadata": {
    "name": "nginx"
    "namespace": "${this.namespace}",
  },
  "spec": {
    "replicas": 3,
    "selector": {
      "matchLabels": {
        "app": "nginx"
      }
    },
    "template": {
      "metadata": {
        "labels": {
          "app": "nginx"
        }
      },
      "spec": {
        "containers": [
          {
            "name": "nginx",
            "image": "nginx:1.14.2",
            "ports": [
              {
                "containerPort": 80
              }
            ]
          }
        ]
      }
    }
  }
}`
    }
  },
  mounted () {
    console.log('DeploymentsFormAdvanced created and mounted')
  },
  methods: {
    createDeployment: function () {
      const namespace = this.namespace
      const url = `/apis/apps/v1/namespaces/${namespace}/deployments`
      const body = this.getDeploymentBody()
      const promise = this.$kubernetes.post(url, body)
        .then(response => {
          console.log(response)
          const delay = 2500
          const action = 'deployments/getDeployments'
          setTimeout(this.$store.dispatch, delay, action)
        })
        .catch(error => {
          console.log(error)
        })
      return promise
    },
    getDeploymentBody: function () {
      const body = {
        kind: 'Deployment',
        apiVersion: 'apps/v1'
      }
      const deploymentObject = JSON.parse(this.deploymentString)
      Object.assign(body, deploymentObject)
      return body
    },
    submitForm: function () {
      // XXX (ricardoapl) Might want to remove 'hide' event chain
      this.createDeployment().then(() => { this.$emit('hide') })
    }
  }
}
</script>
