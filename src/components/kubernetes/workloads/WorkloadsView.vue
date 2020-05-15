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
            <b-tab title="Pods">
                <h3 class=" mb-3 ml-3"> Pods List </h3>
                <pods-list @newSelectedPod="newSelectedPod" :namespace="namespace"></pods-list>
                <!-- <containers-list v-if="pod" :pod="pod"></containers-list> -->
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
    },
    data () {
        return {
          namespace: '*',
          pod:null
        }
    },
    mounted () {
    },
    computed: {
        
    },
    methods: {
      newSelectedPod(incomingPod){
        this.pod = incomingPod;
      }
    },
    watch: {
    }
}
</script>

<style scoped>

.opacity{
  opacity: 0.8;
}

</style>