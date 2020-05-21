<template>
  <div id="app" />
</template>

<script>
export default {
  name: 'Logout',
  created () {
    this.$store.commit('k8sauthentication/clearState')
    this.$router.go({ name: 'KHome' })
  }
}
</script>
