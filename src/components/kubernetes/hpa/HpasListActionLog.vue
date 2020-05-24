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
          <h5> <span class="text-primary">Logs for</span> HPA {{ hpa.metadata.name }} </h5>
        </div>
      </div>
      <b-container
        v-if="hpa && hpa.status && hpa.status.conditions"
        style="margin-top:20px"
      >
        <div
          v-for="(condition,index) in hpa.status.conditions"
          :key="index"
          class="terminal"
        >
          <span class="text-warning">{{condition.lastTransitionTime}}</span>: {{condition.message}} <span class="text-warning">Type: </span> {{condition.type}}
        </div>
      </b-container>
      <b-container
        v-else
        style="margin-top:20px"
      >
        <div>
            No logs to show
        </div>
      </b-container>

      <template v-slot:modal-footer>
        <b-container class="text-center">
          <b-button
            class="mx-1"
            variant="primary"
            @click="cancel()"
          >
            Ok
          </b-button>
        </b-container>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'HpaListActionLog',
  props: [
    'hpa'
  ],
  data () {
    return {
      showModal: false,
    }
  },
  mounted () {
  },
  methods: {
    cancel: function () {
      this.showModal = false
    },
  }
}
</script>

<style  scoped>
.opacity {
  opacity: 0.5;
}
.terminal {
    background-color: #000;
    border: 1px solid #000;
    color: #00ff00;
    padding: 8px;
    font-family: courier new;
}
</style>
