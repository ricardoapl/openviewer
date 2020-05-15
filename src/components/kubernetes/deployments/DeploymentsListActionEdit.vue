<template>
  <div>
    <b-button
      class="mx-1"
      size="sm"
      variant="primary"
      data-placement="top"
      data-toggle="tooltip"
      title="Edit deployment"
      @click="showModal = true"
    >
      <svg
        class="bi bi-pencil-square"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z" />
        <path
          fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z"
          clip-rule="evenodd"
        />
      </svg>
    </b-button>
    <b-modal
      v-model="showModal"
      size="xl"
      centered
      hide-header
      hide-footer
      hide-backdrop
    >
      <b-container>
        <b-tabs
          content-class="mt-3"
          justified
        >
          <b-tab
            title="Basic Settings"
            active
          >
            <deployments-list-action-edit-basic
              :deployment="deployment"
              @hide="showModal = false"
            />
          </b-tab>
          <b-tab title="Advanced Settings">
            <deployments-list-action-edit-advanced
              :deployment="deployment"
              @hide="showModal = false"
            />
          </b-tab>
        </b-tabs>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import DeploymentsListActionEditBasic from './DeploymentsListActionEditBasic'
import DeploymentsListActionEditAdvanced from './DeploymentsListActionEditAdvanced'
export default {
  name: 'DeploymentsListActionEdit',
  components: {
    DeploymentsListActionEditBasic,
    DeploymentsListActionEditAdvanced
  },
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
    console.log('DeploymentsListActionEdit created and mounted for deployment with name ' + this.deployment.metadata.name)
    // XXX (ricardoapl) We may want to use v-b-tooltip instead of jQuery
    $(function () { $('[data-toggle="tooltip"]').tooltip() })
  }
}
</script>
