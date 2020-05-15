<template>
  <div>
    <b-button
      class="mx-1"
      size="sm"
      variant="danger"
      data-placement="top"
      data-toggle="tooltip"
      title="Delete deployment"
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
        <p>Are you sure you want to delete deployment '{{ deployment.metadata.name }}'?</p>
      </b-container>
      <template v-slot:modal-footer>
        <b-container class="text-center">
          <b-button
            class="mx-1"
            variant="danger"
            @click="deleteDeployment()"
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
  name: 'DeploymentsListActionDelete',
  props: {
    deployment: {
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
    console.log('DeploymentsListActionDelete created and mounted for deployment with name ' + this.deployment.metadata.name)
    // XXX (ricardoapl) We may want to use v-b-tooltip instead of jQuery
    $(function () { $('[data-toggle="tooltip"]').tooltip() })
  },
  methods: {
    cancel: function () {
      this.showModal = false
    },
    deleteDeployment: function () {
      const namespace = this.deployment.metadata.namespace
      const deployment = this.deployment.metadata.name
      const url = `/apis/apps/v1/namespaces/${namespace}/deployments/${deployment}`
      axios.delete(url)
        .then(response => {
          console.log(response)
          const action = 'deployments/getDeployments'
          this.$store.dispatch(action)
          this.showModal = false
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
