<template>
    <div id="app"></div>
</template>

<script>
export default {
  created () {
    axios
      .delete('/identity/v3/auth/tokens', { headers: { 'X-Subject-Token': this.$store.state.authentication.tokenScoped } })
      .then(response => {
        this.$store.commit('authentication/clearAll')
        this.$router.go({ name: 'Home' })
      })
      .catch(error => {
        console.log('[Logout] => ' + error)
        this.$store.commit('authentication/clearAll')
        this.$router.go({ name: 'Home' })
      })
  }
}
</script>
