<template>
  <!-- XXX (ricardoapl) Validate form with Vuelidate -->
  <div class="container mb-4">
    <div class="card border-info">
      <div class="card-header bg-info text-light text-center">
        <p class="h5"><strong>Create new deployment</strong></p>
      </div>
      <form
        v-on:submit.prevent="submitForm()"
        action="/apis/apps/v1/namespaces/{namespace}/deployments"
        method="POST"
      >
        <div class="card-body"></div>
        <div class="card-footer text-center">
          <button type="submit" class="btn btn-success mr-2">Save Deployment</button>
          <button type="button" class="btn btn-secondary" v-on:click="$emit('hide')">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeploymentsForm',
  mounted () {
    console.log('DeploymentsForm created and mounted')
  },
  methods: {
    submitForm: function () {
      // TODO (ricardoapl) US07.2
      return null
    }
  }
}
</script>
