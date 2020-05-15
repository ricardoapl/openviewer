<template>
  <div class="container">
    <div>
        <b-tabs content-class="mt-3" justified >
            <b-tab title="Namespaces" active>
                <h3 class=" mb-3 ml-3 mt-5"> Create Namespace </h3>
                <form>
                   Create Form
                </form>
                <hr>
                <h3 class=" mb-3 ml-3"> Namespaces List </h3>
                <namespaces-list></namespaces-list>
            </b-tab>
            <b-tab title="Roles">
                <h3 class=" mb-3 ml-3 mt-5"> Create Role </h3>
                <form>
                   Create Form
                </form>
                <hr>
                <h3 class=" mb-3 ml-3"> Roles List </h3>
                <roles-list></roles-list>
            </b-tab>
        </b-tabs>
    </div>
  </div>
</template>

<script>

import namespacesList from '../namespaces/NamespacesList.vue'
import rolesList from '../roles/RolesList.vue'

export default {
    name: 'AdministrationView',
    components: {
        'namespaces-list': namespacesList,
        'roles-list': rolesList,
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

<style scoped>

.opacity{
  opacity: 0.8;
}

</style>