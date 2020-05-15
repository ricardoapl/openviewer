<template>
  <div>
    <b-button
      class="mx-1"
      size="sm"
      variant="primary"
      data-placement="top"
      data-toggle="tooltip"
      title="Edit Service"
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
      <div class="">
          <div class="container">
            <h5 > <span class="text-warning">Update</span> ports for Service {{service.metadata.name}} </h5>
          </div>
        </div>
      <b-container v-if="newService && newService.spec" style="margin-top:20px">
        <div v-for="(port,index) in newService.spec.ports" :key="port.name">
          <span class="mx-auto row mb-2" :class="{'opacity': oldPortsToRemove.findIndex((i) => i == index)!=-1}">
            <b-button
              v-show="oldPortsToRemove.findIndex((i) => i == index)==-1"
              class="mx-1"
              size="sm"
              variant="danger"
              @click="removeOldPort(index)"
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
            <b-button
              v-show="oldPortsToRemove.findIndex((i) => i == index)!=-1"
              class="mx-1"
              size="sm"
              variant="success"
              @click="reAddOldPort(index)"
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
            <div class="mr-1 col-2">              
              <b-form-input class="form-control-sm" v-model="port.name" placeholder="Enter port name"></b-form-input>
            </div>
            <div class="mr-1 col-2">
              <b-form-input class="form-control-sm"  v-model="port.protocol" placeholder="Enter port protocol"></b-form-input>
            </div>
            <div class="mr-1 col-2">
              <b-form-input class="form-control-sm" v-model="port.port" placeholder="Enter port number"></b-form-input>
            </div>
            <div class="mr-1 col-2">
              <b-form-input class="form-control-sm" v-model="port.targetPort" placeholder="Enter targetPort number"></b-form-input>
            </div>
          </span>
        </div>
        </b-container>
        <hr>
        <div class="">
          <div class="container">
            <h5 > <span class="text-success">Add</span> new ports for Service {{service.metadata.name}} </h5>
          </div>
        </div>
        <b-container style="margin-top:20px">
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
                <b-form-input class="form-control-sm" v-model="newPort.port" placeholder="Enter port number"></b-form-input>
              </div>
              <div class="mr-1 col-2">
                <b-form-input class="form-control-sm" v-model="newPort.targetPort" placeholder="Enter targetPort number"></b-form-input>
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
       </b-container>
      
      <template v-slot:modal-footer>
        <b-container class="text-center">
          <b-button
            class="mr-1"
            @click="cancel()"
          >
            Cancel
          </b-button>
          <b-button
            class="ml-1"
            variant="success"
            @click="saveService()"
          >
            Save
          </b-button>
        </b-container>
      </template>
    </b-modal>

  </div>
</template>

<script>

export default {
  name: 'ServiceListActionEdit',
  props: [
    'service'
  ],
  data () {
    return {
      showModal: false,
      newPorts:[],
      oldPortsToRemove:[],
      newService:{}
    }
  },
  mounted () {
    Object.assign(this.newService, this.service)
    // XXX (ricardoapl) We may want to use v-b-tooltip instead of jQuery
    $(function () { $('[data-toggle="tooltip"]').tooltip() })
  },
  methods: {
    cancel: function () {
      this.showModal = false
    },
    removeOldPort(index){
      this.oldPortsToRemove.push(index);
    },
    reAddOldPort(index){
      this.oldPortsToRemove.splice(this.oldPortsToRemove.findIndex((i) => i == index));
    },
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
    saveService: function () {

      this.oldPortsToRemove.forEach(index => {
        this.newService.spec.ports.splice(index);
      });
      this.newPorts.forEach(port=>{
        this.newService.spec.ports.push(port);
      });

      const namespace = this.service.metadata.namespace
      const service = this.service.metadata.name
      const url = `/api/v1/namespaces/${namespace}/service/${service}`
      
      const body = {
        "spec": {
          "ports":this.newService.spec.ports
        }
      };
      console.log(body);
      axios.patch(url, body)
        .then(response => {
          console.log(response)
          this.$store.dispatch(type+'/get'+type.charAt(0).toUpperCase() + type.slice(1))
          this.showModal = false
        })
        .catch(error => {
          console.log(error)
        })
    },
  }
}
</script>

<style  scoped>

.opacity{
  opacity:0.5
}

</style>