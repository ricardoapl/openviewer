<template>
    <div id="app"></div>
</template>

<script>
export default {
  created () {
    axios
      .delete('/identity/v3/auth/tokens', { headers: { 'X-Subject-Token': this.$store.state.tokenScoped } })
      .then(response => {
        this.$store.commit('clearAll')
        this.$router.go({ name: 'Home' })
      })
      .catch(error => {
        console.log('[Logout] => ' + error)
        this.$store.commit('clearAll')
        this.$router.go({ name: 'Home' })
      })
  }
}
</script>
