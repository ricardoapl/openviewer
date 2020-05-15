<template>
  <div class="container">

    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">
          Services
        </h1>
        <p>In this page you can manage Services.<br>If you want to create a new service click on the button down bellow.</p>
      </div>
        <button
            class="btn btn-outline-info mt-4 col-3 ml-2"
            @click="showServicesForm = !showServicesForm"
        >
            Create service
        </button>
    </div>

    <services-form @hide="showServicesForm = !showServicesForm" v-show="showServicesForm"></services-form>

    <div class="mt-5">
        <b-tabs content-class="mt-3" justified >
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
import servicesForm from './ServicesForm.vue'

export default {
    name: 'ServicesView',
    components: {
        'services-list': servicesList,
        'services-form': servicesForm,
    },
    data () {
        return {
            showServicesForm:false
        }
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
