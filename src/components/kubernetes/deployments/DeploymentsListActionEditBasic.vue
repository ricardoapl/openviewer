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
          <b-form-group
            id="containers-input-group"
            label="Containers"
            label-for="containers"
          >
            <div
              v-for="(container, index) in containers"
              :key="container.name"
            >
              <span class="mx-auto row mb-2">
                <b-button
                  class="mx-1"
                  size="sm"
                  variant="danger"
                  @click="removeContainer(index)"
                >
                  <svg
                    class="bi bi-trash-fill"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </b-button>
                <b-col role="group">
                  <b-form-input
                    v-model="container.image"
                    placeholder="Enter image name"
                    type="text"
                    required
                  />
                </b-col>
                <b-col role="group">
                  <b-form-input
                    v-model="container.ports[0].containerPort"
                    placeholder="Enter container port"
                    type="number"
                    min="1"
                    max="65535"
                  />
                </b-col>
              </span>
            </div>
            <b-button
              class="mx-1"
              size="sm"
              variant="success"
              @click="addContainer()"
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
      containers: this.deployment.spec.template.spec.containers,
      replicas: this.deployment.spec.replicas
    }
  },
  mounted () {
    console.log('DeploymentsListActionEditBasic created and mounted for deployment with name ' + this.deployment.metadata.name)
    // XXX (ricardoapl) We may want to use v-b-tooltip instead of jQuery
    $(function () { $('[data-toggle="tooltip"]').tooltip() })
  },
  methods: {
    addContainer: function () {
      const container = {
        name: `image${this.containers.length}`,
        image: '',
        ports: [
          {
            containerPort: null
          }
        ]
      }
      this.containers.push(container)
    },
    removeContainer: function (index) {
      if (index > -1) {
        this.containers.splice(index, 1)
      }
    },
    saveDeployment: function () {
      const namespace = this.deployment.metadata.namespace
      const deployment = this.deployment.metadata.name
      const url = `/apis/apps/v1/namespaces/${namespace}/deployments/${deployment}`
      const body = this.getDeploymentBody()
      this.$kubernetes.put(url, body)
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
      body.spec.replicas = parseInt(this.replicas)
      this.containers.forEach(function (container) {
        // XXX (ricardoapl) HTML returns text, so we ought to do some parsing (somewhere)
        container.ports[0].containerPort = parseInt(container.ports[0].containerPort)
      })
      body.spec.template.spec.containers = this.containers
      return body
    }
  }
}
</script>
