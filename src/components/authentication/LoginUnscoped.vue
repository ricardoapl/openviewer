<template>
  <div class="container text-center mt-5">
    <p class="display-4">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="202px" height="122px" viewBox="-0.5 -0.5 202 122" content="&lt;mxfile host=&quot;Electron&quot; modified=&quot;2020-03-26T17:58:34.257Z&quot; agent=&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/12.6.5 Chrome/80.0.3987.86 Electron/8.0.0 Safari/537.36&quot; version=&quot;12.6.5&quot; etag=&quot;8CiPFhoDpVAnhbotMDba&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;9GIP2xLfhwZL2HaQfGx6&quot;&gt;7ZfBspowFIafhmWZQEBgWa23XbQznXHRdYQImRs4TIgV+/RNIFG44FVH76IzzcKRPyeQfOf3HHTwqmy/ClIXPyCj3PFR1jr4i+P7CQrVpxaOvRDguBdywbJe8s7Chv2hRkRG3bOMNqNACcAlq8diClVFUznSiBBwGIftgI+fWpOcToRNSvhU/cUyWfRq7Edn/RtleWGf7C2SfqYkNticpClIBoeBhNcOXgkA2X8r2xXlmp3l0q97uTB72piglbxlgd8v+E343pzN7Ese7WEF7KuM6njPwctDwSTd1CTVsweVXaUVsuRmmjR1D3zHWr1muWOcr4CD6G6GA28Zx1jpjRTwSu1MBRXVoqWB1IXZGRWSthdP552YKa9RKKkURxViFvhh4ibD0d/AuM4LTRIO5xx6NjHFMH9WJMY3+elJZ7Tqi6E7Txo/mbQASSSDSl1+StCU9K4bl0hP8vQM2jEa842mfOMZvPET6AbX6eYKb33xmKZUkK0NR/ebDbtJPCaQ+C4K0XlEU8NhFRJMoeDQTdBwLB6HFD7Zgnc57iaDBfOEb+ClcD0OaPGvAjJ+wzMF7SN5Rdd5DWjoozHVRL+TLeU/oWGmfG1BSih1UeIs10KqjksVmSXXkUuSvuYd9jfA7P0+m2US6hNb25Y9721byUhTdPlD/UytN1q2uX5RcRk0kctULWhceqRdlR2m+93uZnvYKLcq6y/d0MFQyYHur/A6fFajs79tW3gW4dQJCXL9meqbuMHjToj/O+G6E04Z/0gnqMYx6hv4jTESd6YJRfPWuL8xq8vzy2s3N/gHgNd/AQ==&lt;/diagram&gt;&lt;/mxfile&gt;"><defs/><g><rect x="40" y="0" width="120" height="120" rx="18" ry="18" fill="#41b883" stroke="none" pointer-events="all"/><rect x="60" y="20" width="80" height="80" rx="12" ry="12" fill="#ffffff" stroke="none" transform="rotate(-90,100,60)" pointer-events="all"/><rect x="33.98" y="42.05" width="132.04" height="5.9" rx="0.89" ry="0.89" fill="#ffffff" stroke="none" pointer-events="all"/><rect x="33.98" y="72.05" width="132.04" height="5.9" rx="0.89" ry="0.89" fill="#ffffff" stroke="none" pointer-events="all"/><path d="M 5 59.71 C 28.49 31.39 63.34 15.01 100.1 15.01 C 136.86 15.01 171.71 31.39 195.2 59.71 C 171.71 88.03 136.86 104.41 100.1 104.41 C 63.34 104.41 28.49 88.03 5 59.71 Z" fill="none" stroke="#ffffff" stroke-width="11" stroke-miterlimit="10" pointer-events="all"/><ellipse cx="100.1" cy="59.71" rx="34.236" ry="34.28936714255274" fill="none" stroke="#ffffff" stroke-width="11" pointer-events="all"/><ellipse cx="100.1" cy="59.71" rx="22.823999999999998" ry="22.85957809503516" fill="none" stroke="#ffffff" stroke-width="11" pointer-events="all"/><path d="M 15 59.71 C 36.02 34.37 67.21 19.71 100.1 19.71 C 132.99 19.71 164.18 34.37 185.2 59.71 C 164.18 85.05 132.99 99.71 100.1 99.71 C 67.21 99.71 36.02 85.05 15 59.71 Z" fill="none" stroke="#2c3e50" stroke-width="11" stroke-miterlimit="10" pointer-events="all"/><ellipse cx="100.1" cy="59.71" rx="30.636" ry="30.683997443000216" fill="none" stroke="#2c3e50" stroke-width="11" pointer-events="all"/><ellipse cx="100.1" cy="59.71" rx="20.424" ry="20.455998295333476" fill="none" stroke="#2c3e50" stroke-width="11" pointer-events="all"/></g></svg>
    </p>
    <p class="display-4 font-weight-bold">
      <strong style="color:#2c3e50;">OpenViewer</strong>
    </p>
    <p class="mt-5 mb-5">
      <span class="text-secondary">
        <strong>
          <em>- Do you want to control some stacks? -</em>
        </strong>
      </span>
      <br /> Login down bellow and let's get started
    </p>
    <form class="w-25 m-auto" v-on:submit.prevent="login">
      <div class="alert alert-danger" role="alert" v-if="hasErrors">
        <h4 class="alert-heading mb-">Ups!</h4>
        <hr/>
        <small>
          <ul class="text-left mb-0">
            <li v-if="serverErrors">{{ serverErrors }}</li>
              <li v-if="!$v.openstackAddress.required">Field openstack address is required</li>
              <li v-if="!$v.name.required">Field name is required</li>
              <li v-if="!$v.name.alphaSpaces">Field name only accept letters and spaces</li>
              <li v-if="!$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }} characters.</li>
              <li v-if="!$v.name.maxLength">Name only can have {{ $v.name.$params.maxLength.max }} characters.</li>
              <li v-if="!$v.password.required">Field password is required</li>
              <li v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</li>
          </ul>
        </small>
      </div>
      <div class="form-group mb-1">
        <input
          type="text"
          name="openstackAddress"
          id="openstackAddress"
          class="form-control"
          placeholder="OpenStack Address"
          v-model="$v.openstackAddress.$model"
          v-bind:class="validationStatus($v.openstackAddress)"
          v-bind:disabled="submitStatus"
          v-on:input="setServerState"
          required
        />
      </div>
      <div class="form-group mb-1">
        <input
          type="text"
          name="name"
          id="name"
          class="form-control"
          placeholder="Name"
          v-model="$v.name.$model"
          v-bind:class="validationStatus($v.name)"
          v-bind:disabled="submitStatus"
          v-on:input="setServerState"
          required
        />
      </div>
      <div class="form-group mt-1">
        <input
          type="password"
          name="password"
          id="password"
          class="form-control"
          placeholder="Password"
          v-model="$v.password.$model"
          v-bind:class="validationStatus($v.password)"
          v-bind:disabled="submitStatus"
          v-on:input="setServerState"
          required
        />
      </div>
      <button
        type="submit"
        class="btn btn-outline-secondary mt-4 mb-2"
        v-bind:disabled="submitStatus"
      >
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
          v-show="submitStatus"
        ></span>
        <strong>Login</strong>
      </button>
    </form>
  </div>
</template>

<script>
import { required, minLength, maxLength, helpers } from 'vuelidate/lib/validators'
const alphaSpaces = helpers.regex('alphaSpaces', /^[a-zA-ZÀ-ž\s]*$/)
export default {
  name: 'login',
  data () {
    return {
      openstackAddress: '127.0.0.1:8080',
      name: 'demo',
      password: 'devstack',
      serverErrors: '',
      submitStatus: false
    }
  },
  validations: {
    openstackAddress: {
      required
    },
    name: {
      required,
      alphaSpaces,
      minLength: minLength(3),
      maxLength: maxLength(255)
    },
    password: {
      required,
      minLength: minLength(3)
    }
  },
  computed: {
    hasErrors () {
      return (
        this.$v.openstackAddress.$error || this.$v.name.$error || this.$v.password.$error || this.serverErrors
      )
    }
  },
  methods: {
    login () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.submitStatus = true
        this.getUnscopedToken()
      }
    },
    validationStatus (validation) {
      return {
        'is-invalid': validation.$error || this.serverErrors,
        'is-valid': validation.$dirty
      }
    },
    setServerState () {
      this.serverErrors = false
    },
    getUnscopedToken () {
      axios.post('http://' + this.openstackAddress + '/identity/v3/auth/tokens', {
        auth: {
          identity: {
            methods: ['password'],
            password: {
              user: {
                name: this.name,
                domain: {
                  name: 'Default'
                },
                password: this.password
              }
            }
          }
        }
      })
        .then(response => {
          this.$store.commit('authentication/setToken', { type: 'unscoped', token: response.headers['x-subject-token'] })
          this.$store.commit('authentication/setOpenstackAddress', 'http://' + this.openstackAddress)
          this.$store.commit('authentication/setUser', response.data.token.user)
          this.getProjects()
        })
        .catch(error => {
          this.serverErrors = 'Project address or user credentials are not valid!'
          console.log(error.response)
          this.submitStatus = false
        })
    },
    getProjects () {
      axios.get('/identity/v3/auth/projects')
        .then(response => {
          if (response.data.projects.length) {
            this.$store.commit('authentication/setProjects', response.data.projects)
            this.$store.commit('authentication/setIdSelectedProject', response.data.projects[0].id)
            this.$router.push({ name: 'LoginScoped' })
          } else {
            this.serverErrors = 'No projects associated to this user!'
            this.submitStatus = false
          }
        })
        .catch(error => {
          this.serverErrors = 'There is some problems fetching user projects! Please try again.'
          console.log(error.response)
          this.submitStatus = false
        })
    }
  }
}
</script>
