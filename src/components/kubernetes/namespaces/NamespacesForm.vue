<template>
  <div class="container mb-4">
    <div class="card border-info">
      <div class="card-header bg-info text-light text-center">
        <p class="h5">
          <strong>Create new namespace</strong>
        </p>
      </div>
      <form
        action="/api/v1/namespaces/"
        method="POST"
        @submit.prevent="submitform()"
      >
        <div class="card-body">
          <b-form-group
            id="name-input-group"
            label="Name"
            label-for="name"
          >
            <b-form-input
              id="name"
              v-model="$v.name.$model"
              :class="validationStatus($v.name)"
              required
            />
            <div
              class="invalid-feedback"
            >
              Only alphanumeric and '-' characters are accepted! <br> e.g. 'my-name' or '123-abc'
            </div>
          </b-form-group>
        </div>
        <div class="card-footer text-center">
          <button
            type="submit"
            class="btn btn-success mr-2"
          >
            Save
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="$emit('hide')"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, helpers } from 'vuelidate/lib/validators'
const alphaNameSpaces = helpers.regex('alphanamespaces', /^[a-z0-9]([-a-z0-9]*[a-z0-9])?$/)
export default {
  name: 'NamespacesForm',
  data () {
    return {
      name: ''
    }
  },
  validations: {
    name: {
      required,
      alphaNameSpaces
    }
  },
  mounted () {
    console.log('NamespacesForm created and mounted')
  },
  methods: {
    createNamespace: function () {
      const body = {
        kind: 'Namespace',
        apiVersion: 'v1',
        metadata: {
          name: this.name
        }
      }
      const url = '/api/v1/namespaces/'
      const promise = this.$kubernetes.post(url, body)
        .then(response => {
          console.log(response)
          const delay = 2500
          const action = 'namespaces/getNamespaces'
          setTimeout(this.$store.dispatch, delay, action)
        })
        .catch(error => {
          console.log(error)
        })
      this.$emit('hide')
      return promise
    },
    submitform: function () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.createNamespace()
      }
    },
    validationStatus: function (validation) {
      return {
        'is-invalid': validation.$error || this.serverErrors,
        'is-valid': validation.$dirty
      }
    }
  }
}
</script>
