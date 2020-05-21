<template>
  <div class="container mb-4">
    <div class="card border-info">
      <div class="card-header bg-info text-light text-center">
        <p class="h5">
          <strong>Create new deployment</strong>
        </p>
      </div>
      <div class="container my-2" /> <!-- XXX (ricardoapl) Blank space above tabs -->
      <b-container>
        <b-tabs
          content-class="mt-3"
          justified
        >
          <b-tab
            title="Basic Settings"
            active
          >
            <!-- XXX (ricardoapl) Might want to remove 'hide' event chain -->
            <deployments-form-basic
              :namespace="namespace"
              @hide="$emit('hide')"
            />
          </b-tab>
          <b-tab title="Advanced Settings">
            <!-- XXX (ricardoapl) Might want to remove 'hide' event chain -->
            <deployments-form-advanced
              :namespace="namespace"
              @hide="$emit('hide')"
            />
          </b-tab>
        </b-tabs>
      </b-container>
    </div>
  </div>
</template>

<script>
import DeploymentsFormBasic from './DeploymentsFormBasic'
import DeploymentsFormAdvanced from './DeploymentsFormAdvanced'
export default {
  name: 'DeploymentsForm',
  components: {
    DeploymentsFormBasic,
    DeploymentsFormAdvanced
  },
  props: {
    namespace: {
      type: String,
      default: 'default'
    }
  },
  mounted () {
    console.log('DeploymentsForm created and mounted')
  }
}
</script>
