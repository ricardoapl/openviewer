<template>
  <div class="container text-center mt-5">
    <div
      style="cursor:pointer"
      @click="$router.push({ name: 'LandingPage'})"
    >
      <svg
        style="width:200px; height:200px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        width="200"
        height="200"
      >
        <defs>
          <image
            id="img1"
            width="380"
            height="380"
            href="data:image/png;base64,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"
          />
          <image
            id="img2"
            width="275"
            height="180"
            href="data:image/png;base64,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"
          />
        </defs>
        <use
          id="Background"
          href="#img1"
          x="10"
          y="10"
        />
        <use
          id="Final Shark"
          href="#img2"
          x="63"
          y="110"
        />
      </svg>
    </div>
    <p class="display-4 font-weight-bold">
      <strong style="color:#2c3e50;">NotSoKinD!</strong>
    </p>
    <p class="mt-5 mb-5">
      <span class="text-secondary">
        <strong>
          <em>Do you want to control some clusters?</em>
        </strong>
      </span>
      <br>Login down bellow and let's get containerize!
    </p>
    <form
      class="w-25 m-auto"
      @submit.prevent="submit"
    >
      <div
        v-if="hasErrors"
        class="alert alert-danger"
        role="alert"
      >
        <h4 class="alert-heading mb-">
          Ups!
        </h4>
        <hr>
        <small>
          <ul class="text-left mb-0">
            <li v-if="serverErrors">{{ serverErrors }}</li>
            <li v-if="!$v.address.required">Field 'Kubernetes Address' is required</li>
            <li v-if="!$v.token.required">Field 'Bearer Token' is required</li>
          </ul>
        </small>
      </div>
      <div class="form-group mb-1">
        <input
          id="address"
          v-model="$v.address.$model"
          type="text"
          name="address"
          class="form-control"
          placeholder="Kubernetes Address"
          :class="validationStatus($v.address)"
          :disabled="submitStatus"
          required
          @input="setServerState"
        >
      </div>
      <div class="form-group mt-1">
        <input
          id="token"
          v-model="$v.token.$model"
          type="text"
          name="token"
          class="form-control"
          placeholder="Bearer Token"
          :class="validationStatus($v.token)"
          :disabled="submitStatus"
          required
          @input="setServerState"
        >
      </div>
      <button
        type="submit"
        class="btn btn-outline-secondary mt-4 mb-2"
        :disabled="submitStatus"
      >
        <span
          v-show="submitStatus"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
        <strong>Login</strong>
      </button>
      <button
        type="button"
        class="btn text-light mt-4 mb-2 ml-4"
        style="background-color:#326de6"
        @click="$router.push({ name: 'LandingPage'})"
      >
        Cancel
      </button>
      <br>
      <button
        type="button"
        class="btn text-light mt-4 mb-2"
        style="background-color:#326de6"
        @click="$router.push({ name: 'Clusters'})"
      >
        Cluster management
      </button>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      address: 'https://127.0.0.1:6443',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMTcxNDk5QG15LmlwbGVpcmlhLnB0In0.EX4hn3uozlJVQ7w1HCmOu5nV8Ep4eyz4IvFKyAfnLbY',
      serverErrors: '',
      submitStatus: false
    }
  },
  validations: {
    address: { required },
    token: { required }
  },
  computed: {
    hasErrors () {
      return (
        this.$v.address.$error || this.$v.token.$error || this.serverErrors
      )
    }
  },
  created () {
    this.address = this.$store.state.clusters.clusterServer || 'https://127.0.0.1:6443'
  },
  methods: {
    probeApi: function () {
      const url = this.address
      const config = {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
      }
      const promise = this.$kubernetes.get(url, config)
        .then(response => {
          console.log(response)
          return response.status
        })
        .catch(error => {
          console.log(error)
          return error.response.status
        })
      return promise
    },
    submit: function () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        // XXX (ricardoapl) Form is invalid, tell user
      } else {
        this.probeApi()
          .then(status => {
            if (status === 200) {
              this.submitStatus = true
              this.setToken()
            } else {
              // XXX (ricardoapl) Choose a user-friendly message...
              this.serverErrors = `Server replied with HTTP ${status}.`
            }
          })
      }
    },
    validationStatus: function (validation) {
      return {
        'is-invalid': validation.$error || this.serverErrors,
        'is-valid': validation.$dirty
      }
    },
    setServerState: function () {
      this.serverErrors = false
    },
    setToken: function () {
      this.$store.commit('k8sauthentication/setToken', this.token)
      this.$store.commit('k8sauthentication/setKubernetesAddress', this.address)
      this.$router.push({ name: 'KHome' })
    }
  }
}

</script>
