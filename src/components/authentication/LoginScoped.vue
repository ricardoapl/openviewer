<template>
    <div>
        <div class="container text-center mt-5" v-if=loading>
            <p class="display-4 mb-4">- Loading -</p>
            <div class="spinner-grow text-success mt-4"  style="width: 8rem; height: 8rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <p class="mt-5 mb-5">
                <span class="text-secondary">
                    <strong>
                        <em>- We are making progress! -</em>
                    </strong>
                </span>
                <br />
                Wait a second until we made this things up to you!
            </p>
        </div>
        <div class="container text-center mt-5" v-if=error>
            <p class="display-4 mb-4"> Ups... </p>
            <svg class="bi bi-exclamation-circle text-warning mt-4" width="10em" height="10em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/>
                <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z"/>
            </svg>
            <p class="mt-5 mb-5">
                <span class="text-secondary">
                    <strong>
                        <em>- I think there's a problem! -</em>
                    </strong>
                </span>
                <br />
                It seems an error occurred while login or switching a project!
            </p>
            <button class="btn btn-warning" type="button" @click="goNextLocation"> Go back... </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoginScoped',
  data () {
    return {
      loading: true,
      error: false
    }
  },
  methods: {
    getScopedToken: function () {
      axios.post('/identity/v3/auth/tokens', {
        auth: {
          identity: {
            methods: [
              'token'
            ],
            token: {
              id: this.$store.state.tokenUnscoped
            }
          },
          scope: {
            project: {
              id: this.$store.state.idSelectedProject
            }
          }
        }
      })
        .then(response => {
          this.$store.commit('setToken', { type: 'scoped', token: response.headers['x-subject-token'] })
          this.goNextLocation()
        })
        .catch(error => {
          console.log(error.response)
          this.loading = false
          this.error = true
        })
    },
    goNextLocation () {
      if (this.$store.state.tokenScoped == null || this.$store.state.tokenScoped === '') {
        this.$router.push({ name: 'LoginUnscoped' })
      } else {
        this.$router.push({ name: 'Home' })
      }
    }
  },
  mounted () {
    this.getScopedToken()
  }
}
</script>
