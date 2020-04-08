<template>
  <button
    type="button"
    data-toggle="tooltip"
    data-placement="top"
    title="Associate Floating IP"
    class="btn btn-info btn-sm"
    v-on:click="associate()"
    >
    <svg class="bi bi-plus-square-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm6.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z" clip-rule="evenodd"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'FloatingIpListItemButtonAssociate',
  props: {
    floatingip: Object
  },
  mounted () {
    console.log('FloatingIpListItemButtonAssociate created and mounted for floating IP with id ' + this.floatingip.id)
    // XXX We may want to get rid of this jQuery voodoo in the future...
    $(function () { $('[data-toggle="tooltip"]').tooltip() })
  },
  methods: {
    associate: function () {
      console.log('associate() called on FloatingIpListItemButtonAssociate for floating IP with id ' + this.floatingip.id)
      // XXX To be implemented...
    }
  }
}
</script>
