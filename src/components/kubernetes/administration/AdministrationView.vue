<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">
          Administration
        </h1>
        <p>In this page you can manage Namespaces & Roles.<br>If you want to create a new namespace or role click on the buttons down bellow.</p>
      </div>
      <div class="row">
        <div class="col" />
        <button
          class="btn btn-outline-info mt-4 col-3 mr-2"
          @click="showNamespacesForm = !showNamespacesForm"
        >
          Create namespace
        </button>
        <button
          class="btn btn-outline-info mt-4 col-3 ml-2"
          @click="showRolesForm = !showRolesForm"
        >
          Create role
        </button>
        <div class="col" />
      </div>
    </div>
    <div class="container mt-5">
      <namespaces-form
        v-if="showNamespacesForm"
        @hide="showNamespacesForm = false"
      />
      <b-tabs
        content-class="mt-3"
        justified
      >
        <b-tab
          title="Namespaces"
          active
        >
          <h3 class=" mb-3 ml-3">
            Namespaces List
          </h3>
          <namespaces-list />
        </b-tab>
        <b-tab title="Roles">
          <h3 class=" mb-3 ml-3">
            Roles List
          </h3>
          <roles-list />
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import namespacesList from '../namespaces/NamespacesList.vue'
import namespacesForm from '../namespaces/NamespacesForm.vue'
import rolesList from '../roles/RolesList.vue'
export default {
  name: 'AdministrationView',
  components: {
    namespacesForm,
    'namespaces-list': namespacesList,
    'roles-list': rolesList
  },
  data () {
    return {
      showNamespacesForm: false,
      showRolesForm: false
    }
  },
  mounted () {
    console.log('AdministrationView created and mounted')
    this.getNamespaces()
    this.getRoles()
  },
  methods: {
    ...mapActions({
      getNamespaces: 'namespaces/getNamespaces',
      getRoles: 'roles/getRoles'
    })
  }
}
</script>

<style scoped>
.opacity{
  opacity: 0.8;
}
</style>
