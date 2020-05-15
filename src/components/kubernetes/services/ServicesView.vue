<template>
  <div class="container">

    <div>
        <h3 class=" mb-3 ml-3">Create Service </h3>
        Dummy Create
    </div>

    <div class="mt-5">
        <b-tabs content-class="mt-3" justified >
            <!-- <b-tab title="All Services">
                <h3 class=" mb-3 ml-3"> All Services List </h3>
                <services-list></services-list>
            </b-tab> -->
            <b-tab title="ClusterIP" active>
                <h3 class=" mb-3 ml-3"> ClusterIP Service List </h3>
                <services-list :typeService="'clusterips'"></services-list>
            </b-tab>
            <b-tab title="NodePort">
                <h3 class=" mb-3 ml-3"> NodePort Service List </h3>
                <services-list :typeService="'nodeports'"></services-list>
            </b-tab>
            <b-tab title="LoadBalancer">
                <h3 class=" mb-3 ml-3"> LoadBalancer Service List </h3>
                <services-list :typeService="'loadbalancers'"></services-list>
            </b-tab>
        </b-tabs>
    </div>
  </div>
</template>

<script>

import servicesList from './ServicesList.vue'

export default {
    name: 'ServicesView',
    components: {
        'services-list': servicesList,
    },
    data () {
        return {}
    },
    mounted () {
    },
    computed: {
        
    },
    methods: {
    },
    watch: {
    }
}
</script>
