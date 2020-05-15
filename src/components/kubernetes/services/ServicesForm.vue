<template>
  <!-- XXX (ricardoapl) Add form feedback (i.e. validation) -->
  <div class="container mb-4">
    <div class="card border-info">
      <div class="card-header bg-info text-light text-center">
        <p class="h5">
          <strong>Create new service</strong>
        </p>
      </div>
      <b-form-checkbox class="ml-3 mt-3" v-model="jsonYMLCreate" switch size="lg">Use JSON / YML</b-form-checkbox>
      <form
        v-if="!jsonYMLCreate"
        action="/api/v1/namespaces/{namespace}/service"
        method="POST"
        @submit.prevent="submitForm()"
      >
        <div class="card-body">
          <div class="row">
            <b-form-group
              class="col"
              id="name-input-group"
              label="Name"
              label-for="name"
            >
              <b-form-input
                id="name"
                v-model="newService.name"
                placeholder="Service name"
                required
              />
            </b-form-group>
            <b-form-group
              class="col"
              id="type-input-group"
              label="Type"
              label-for="type"
            >
              <b-form-select required placeholder="Service type" v-model="newService.type" :options="serviceTypes"></b-form-select>
            </b-form-group>
            <b-form-group
              class="col"
              id="selector-input-group"
              label="Selector"
              label-for="selector"
            >
            <span class="row">
               <b-form-input
                id="selector1"
                placeholder="app"
                v-model="newService.selector1"
                class="col-3 mr-2 ml-3"
              />
              :
              <b-form-input
                id="selector2"
                placeholder="nginx"
                v-model="newService.selector2"
                class="col-3 ml-2"
              />
            </span>
            </b-form-group>
          </div>

          <!-- PORTS -->
          <b-form-group
            id="name-input-group"
            label="Ports"
            label-for="name"
          >
            <div  v-for="(newPort,index) in newPorts" :key="newPort.name">
              <span class=" mx-auto row mb-2">
                <b-button
                  class="mx-1"
                  size="sm"
                  variant="danger"
                  @click="removePort(index)"
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
                <div class="mr-1 col-2">              
                  <b-form-input class="form-control-sm" v-model="newPort.name" placeholder="Enter port name"></b-form-input>
                </div>
                <div class="mr-1 col-2">
                  <b-form-input class="form-control-sm"  v-model="newPort.protocol" placeholder="Enter port protocol"></b-form-input>
                </div>
                <div class="mr-1 col-2">
                  <b-form-input type="number" class="form-control-sm" v-model="newPort.port" placeholder="Enter port number"></b-form-input>
                </div>
                <div class="mr-1 col-2">
                  <b-form-input type="number" class="form-control-sm" v-model="newPort.targetPort" placeholder="Enter targetPort number"></b-form-input>
                </div>
                <div v-if="newService.type == 'NodePort'" class="mr-1 col-3">
                  <b-form-input type="number" min="30000" max="32767" class="form-control-sm " v-model="newPort.nodePor" placeholder="NodePort (leave for random)"></b-form-input>
                </div>
              </span>
            </div>
          <b-button
            class="mx-1"
            size="sm"
            variant="success"
            @click="addPort()"
            
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
      <div v-else>
        <b-form-textarea
          id="textarea"
          placeholder=
"kind: Service
apiVersion: v1
metadata:
  name: service-example
spec:
  ports:
    - name: http
      port: 80
      targetPort: 80
  selector:
      app: nginx
  type: LoadBalancer"
          rows="12"
          v-model="jsonYMLServiceBody"
        ></b-form-textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesForm',
  props: {
    namespace: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      jsonYMLCreate:false,
      newService:{},
      jsonYMLServiceBody:"",
      newPorts:[{
        name:'newport0',
        protocol:'http',
        port:'80',
        targetPort:'80',
      }],
      serviceTypes:['ClusterIP','NodePort','LoadBalancer']
    }
  },
  mounted () {
    console.log('DeploymentsForm created and mounted')
  },
  methods: {
    addPort: function(){
      var portObject = {};
      portObject.name = "newport"+this.newPorts.length;
      this.newPorts.push(portObject);
    },
    removePort(index){
      if (index > -1) {
        this.newPorts.splice(index, 1);
      }
    },
    createServiceJsonYML: function (body) {
      const url = `/api/v1/namespaces/${namespace}/services`
      axios.post(url, body)
        .then(response => {
          console.log(response)
          this.$store.dispatch('clusterips/getClusterips')
          this.$store.dispatch('nodeports/getNodeports')
          this.$store.dispatch('loadbalancers/getLoadbalancers')
        })
        .catch(error => {
          console.log(error)
        })
      this.$emit('hide');
    },
    createService: function () {
      const namespace = this.namespace
      const url = `/api/v1/namespaces/${namespace}/services`
      const body = this.getServiceBody()
      const promise = axios.post(url, body)
        .then(response => {
          console.log(response)
          this.$store.dispatch(this.newService.type+'/get'+this.newService.type.charAt(0).toUpperCase() + this.newService.type.slice(1))
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
          name: this.newService.name
        },
        spec: {
          type: this.newService.type,
          selector: {},
          ports: []
        }
      }
      body.spec.selector[this.newService.selector1] = this.newService.selector2;
      body.spec.ports = this.newPorts;
      return body;
    },
    submitForm: function () {
      if(this.jsonYMLCreate){
        this.createServiceJsonYML(this.jsonYMLServiceBody);
      }
      this.createService()
        .then(() => {
          this.$emit('hide')
        })
    }
  }
}
</script>
