<template>
  <div class="container mb-4">
    <div class="card border-info">
      <div class="card-header bg-info text-light text-center">
        <p class="h5">
          <strong>Create new deployment</strong>
        </p>
      </div>
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
        <div class="card-footer text-center">
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
  name: 'DeploymentsForm',
  props: {
    namespace: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      name: 'nginx',
      image: 'nginx:1.14.2',
      replicas: 3,
      servicePort: 5555,
      containerPort: 80
    }
  },
  mounted () {
    console.log('DeploymentsForm created and mounted')
  },
  methods: {
    createDeployment: function () {
      const namespace = this.namespace
      const url = `/apis/apps/v1/namespaces/${namespace}/deployments`
      const body = this.getDeploymentBody()
      const promise = kaxios.post(url, body)
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
              containers: [
                {
                  name: this.name,
                  image: this.image,
                  ports: [
                    {
                      containerPort: parseInt(this.containerPort)
                    }
                  ]
                }
              ]
            }
          }
        }
      }
      return body
    },
    createService: function () {
      const namespace = this.namespace
      const url = `/api/v1/namespaces/${namespace}/services`
      const body = this.getServiceBody()
      const promise = kaxios.post(url, body)
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
          ports: [
            {
              port: parseInt(this.servicePort),
              targetPort: parseInt(this.containerPort)
            }
          ]
        }
      }
      return body
    },
    submitForm: function () {
      // XXX (ricardoapl) Delete existing services with same name
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
