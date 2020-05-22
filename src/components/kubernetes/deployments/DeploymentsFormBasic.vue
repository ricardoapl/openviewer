<template>
  <div class="container">
    <div>
      <form
        action="/apis/apps/v1/namespaces/{namespace}/deployments"
        method="POST"
        @submit.prevent="submitForm()"
      >
        <div class="card-body">
          <b-form-group
            id="name-input-group"
            label="Name"
            label-for="name"
          >
            <b-form-input
              id="name"
              v-model="name"
              required
            />
          </b-form-group>
          <!-- XXX (ricardoapl) To what does label-for point to? Nothing... -->
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
          <b-form-group
            id="service-input-group"
            label="Service (Ports)"
            label-for="service-ports"
          >
            <div
              v-for="(port, index) in servicePorts"
              :key="port.name"
            >
              <span class="mx-auto row mb-2">
                <b-button
                  class="mx-1"
                  size="sm"
                  variant="danger"
                  @click="removeServicePort(index)"
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
                    v-model="port.port"
                    placeholder="Enter service port"
                    type="number"
                    min="1024"
                    max="65535"
                    required
                  />
                </b-col>
                <b-col role="group">
                  <b-form-input
                    v-model="port.targetPort"
                    placeholder="Enter target port"
                    type="number"
                    min="1"
                    max="65535"
                    required
                  />
                </b-col>
                <b-col role="group">
                  <b-form-input
                    v-model="port.protocol"
                    placeholder="Enter protocol"
                    type="text"
                    required
                  />
                </b-col>
              </span>
            </div>
            <b-button
              class="mx-1"
              size="sm"
              variant="success"
              @click="addServicePort()"
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
          <!-- XXX (ricardoapl) What about labels? -->
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
  name: 'DeploymentsFormBasic',
  props: {
    namespace: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      name: 'nginx',
      containers: [{
        name: 'image0',
        image: 'nginx:1.14.2',
        ports: [
          {
            containerPort: 80
          }
        ]
      }],
      replicas: 1,
      servicePorts: [{
        name: 'port0',
        port: 5555,
        targetPort: 80,
        protocol: 'TCP'
      }]
    }
  },
  mounted () {
    console.log('DeploymentsFormBasic created and mounted')
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
    addServicePort: function () {
      const servicePort = {
        name: `port${this.servicePorts.length}`,
        port: null,
        targetPort: null,
        protocol: ''
      }
      this.servicePorts.push(servicePort)
    },
    removeServicePort: function (index) {
      if (index > -1) {
        this.servicePorts.splice(index, 1)
      }
    },
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
        apiVersion: 'apps/v1',
        metadata: {
          name: this.name
        },
        spec: {
          replicas: parseInt(this.replicas),
          selector: {
            matchLabels: {
              app: this.name
            }
          },
          template: {
            metadata: {
              labels: {
                app: this.name
              }
            },
            spec: {
              containers: []
            }
          }
        }
      }
      this.containers.forEach(function (container) {
        // XXX (ricardoapl) HTML always returns text... We should parse somewhere else
        container.ports[0].containerPort = parseInt(container.ports[0].containerPort)
        body.spec.template.spec.containers.push(container)
      })
      return body
    },
    createService: function () {
      const namespace = this.namespace
      const url = `/api/v1/namespaces/${namespace}/services`
      const body = this.getServiceBody()
      const promise = this.$kubernetes.post(url, body)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      return promise
    },
    getServiceBody: function () {
      const body = {
        kind: 'Service',
        apiVersion: 'v1',
        metadata: {
          name: this.name
        },
        spec: {
          selector: {
            app: this.name
          },
          ports: []
        }
      }
      // XXX (ricardoapl) Ewwwww! Code smell!
      this.servicePorts.forEach(function (servicePort) {
        // XXX (ricardoapl) HTML returns text, so we ought to do some parsing (somewhere)
        servicePort.port = parseInt(servicePort.port)
        servicePort.targetPort = parseInt(servicePort.targetPort)
        body.spec.ports.push(servicePort)
      })
      return body
    },
    submitForm: function () {
      // XXX (ricardoapl) Might want to remove 'hide' event chain
      // XXX (ricardoapl) Delete existing services with same name?
      // XXX (ricardoapl) What happens if we don't fill service form?
      this.createDeployment()
        .then(() => {
          this.createService()
        })
        .then(() => {
          this.$emit('hide')
        })
    }
  }
}
</script>
