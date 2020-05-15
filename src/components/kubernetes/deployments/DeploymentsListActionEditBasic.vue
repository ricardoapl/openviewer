<template>
  <div class="container">
    <div>
      <form
        action="/apis/apps/v1/namespaces/{namespace}/deployments/{deployment}"
        method="PUT"
        @submit.prevent="saveDeployment()"
      >
        <div>
          <b-form-group
            id="name-input-group"
            label="Name"
            label-for="name"
          >
            <b-form-input
              id="name"
              v-model="name"
            />
          </b-form-group>
          <!-- XXX (ricardoapl) What about deployments with multiple containers (and images)? -->
          <b-form-group
            id="image-input-group"
            label="Image"
            label-for="image"
          >
            <b-form-input
              id="image"
              v-model="image"
              required
            />
          </b-form-group>
          <b-form-group
            id="replicas-input-group"
            label="Number of pods (replicas)"
            label-for="replicas"
          >
            <b-form-input
              id="replicas"
              v-model="replicas"
              required
              type="number"
              min="1"
              max="10"
            />
          </b-form-group>
          <!-- XXX (ricardoapl) What about deployments with multiple ports? -->
          <b-form-group id="service-input-group">
            <b-form-row>
              <b-col role="group">
                <label for="service-port">Service Port</label>
                <b-form-input
                  id="service-port"
                  v-model="servicePort"
                  disabled
                  type="number"
                  min="1024"
                  max="65535"
                />
              </b-col>
              <b-col role="group">
                <label for="container-port">Container Port</label>
                <b-form-input
                  id="container-port"
                  v-model="containerPort"
                  type="number"
                  min="1"
                  max="65535"
                />
              </b-col>
            </b-form-row>
          </b-form-group>
          <!-- XXX (ricardoapl) What about labels? -->
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
            @click="$emit('hide')"
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
  name: 'DeploymentsListActionEditBasic',
  props: {
    deployment: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      name: this.deployment.metadata.name,
      image: this.deployment.spec.template.spec.containers[0].image,
      replicas: this.deployment.spec.replicas,
      // XXX (ricardoapl) Not used at the moment...
      servicePort: null,
      containerPort: this.deployment.spec.template.spec.containers[0].ports[0].containerPort
    }
  },
  mounted () {
    console.log('DeploymentsListActionEditBasic created and mounted for deployment with name ' + this.deployment.metadata.name)
    // XXX (ricardoapl) We may want to use v-b-tooltip instead of jQuery
    $(function () { $('[data-toggle="tooltip"]').tooltip() })
  },
  methods: {
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
      Object.assign(body, this.deployment)
      // XXX (ricardoapl) Ewwwww! Code smell!
      body.metadata.name = this.name
      body.spec.template.spec.containers[0].image = this.image
      body.spec.replicas = parseInt(this.replicas)
      body.spec.template.spec.containers[0].ports[0].containerPort = parseInt(this.containerPort)
      return body
    }
  }
}
</script>
