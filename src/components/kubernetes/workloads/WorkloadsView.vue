<template>
  <div class="container">

    <div>
        <h3 class=" mb-3 ml-3">Create Deployment</h3>
        Dummy Create
    </div>

    <div class="mt-5">
        <b-tabs content-class="mt-3" justified >
            <b-tab title="Deployments" active>
            </b-tab>
            <b-tab title="Pods & Containers">
                <h3 class=" mb-3 ml-3"> Pods List </h3>
                <pods-list @newSelectedPod="newSelectedPod" :namespace="namespace"></pods-list>
                <div class="mt-3" v-if="pod">
                  <b-modal style="min-width:70%" hide-backdrop :key="pod.metadata.uid" content-class="shadow" v-model="modalShow" id="modal-1" :title="'Containers of Pod '+pod.metadata.name">
                      <containers-list  :key="pod.metadata.uid" :pod="pod"></containers-list>
                  </b-modal>
                  <!-- <h3 class=" mb-5 ml-3">Pod <span class="text-info">  {{pod.metadata.name}} </span>'s Containers </h3> -->
                  <!-- <containers-list  :key="pod.metadata.uid" :pod="pod"></containers-list> -->
                </div>
            </b-tab>
        </b-tabs>
    </div>
  </div>
</template>

<script>

import podsList from '../pods/PodsList'
import containersList from '../pods/ContainersList'

export default {
    name: 'ServicesView',
    components: {
        'pods-list': podsList,
        'containers-list': containersList,
    },
    data () {
        return {
          namespace: '*',
          pod:null,
          modalShow:false
        }
    },
    mounted () {
    },
    computed: {
        
    },
    methods: {
      newSelectedPod(incomingPod){
        if(incomingPod){
          this.pod = incomingPod;
          this.modalShow = true
        }
      }
    },
    watch: {
    }
}
</script>
