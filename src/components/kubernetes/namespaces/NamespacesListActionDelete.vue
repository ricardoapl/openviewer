<template>
  <div>
    <b-button
      class="mx-1"
      size="sm"
      variant="danger"
      data-placement="top"
      data-toggle="tooltip"
      title="Delete namespace"
      @click="showModal = true"
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
    <b-modal
      v-model="showModal"
      centered
      hide-header
      hide-backdrop
    >
      <b-container class="text-center">
        <p>Are you sure you want to delete namespace '{{ namespace.metadata.name }}'?</p>
      </b-container>
      <template v-slot:modal-footer>
        <b-container class="text-center">
          <b-button
            class="mx-1"
            variant="danger"
            @click="deleteNamespace()"
          >
            Delete
          </b-button>
          <b-button
            class="mx-1"
            @click="cancel()"
          >
            Cancel
          </b-button>
        </b-container>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'NamespacesListActionDelete',
  props: {
    namespace: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showModal: false
    }
  },
  mounted () {
    console.log('NamespaceListActionDelete created and mounted for namespace with name ' + this.namespace.metadata.name)
    // XXX (ricardoapl) We may want to use v-b-tooltip instead of jQuery
    $(function () { $('[data-toggle="tooltip"]').tooltip() })
  },
  methods: {
    cancel: function () {
      this.showModal = false
    },
    deleteNamespace: function () {
      const namespace = this.namespace.metadata.name
      const url = `/api/v1/namespaces/${namespace}/`
      this.$kubernetes.delete(url)
        .then(response => {
          console.log(response)
          const delay = 5500
          const action = 'namespaces/getNamespaces'
          setTimeout(this.$store.dispatch, delay, action)
          this.showModal = false
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
