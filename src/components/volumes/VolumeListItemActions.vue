<template>
  <div>
    <button
      type="button"
      data-toggle="tooltip"
      data-placement="top"
      title="Edit Volume"
      class="btn btn-primary btn-sm mr-1"
      v-on:click="editVolume()"
      >
      <svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clip-rule="evenodd"/>
      </svg>
    </button>
    <button
      type="button"
      data-toggle="tooltip"
      data-placement="top"
      title="Delete Volume"
      class="btn btn-danger btn-sm"
      v-on:click="deleteVolume()"
      >
      <svg class="bi bi-trash-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clip-rule="evenodd"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'VolumeListItemActions',
  props: {
    volume: Object
  },
  mounted () {
    // XXX We may want to get rid of this jQuery voodoo in the future...
    // eslint-disable-next-line no-undef
    $(function () { $('[data-toggle="tooltip"]').tooltip() })
  },
  methods: {
    editVolume: function () {
      console.log('[EDIT-VOLUME] => ' + this.volume.id)
      this.$store.commit('volumes/setvolumeToEdit', this.volume)
    },
    deleteVolume: function () {
      console.log('[DELETE-VOLUME] => ' + this.volume.id)
      // eslint-disable-next-line no-undef
      axios.delete('/volume/v3/' + this.$store.state.authentication.idSelectedProject + '/volumes/' + this.volume.id)
        .then(response => {
          console.log(response)
          // XXX Actions are async, and as such the VolumeList will update before the volume is removed
          this.$store.dispatch('volumes/getVolumes')
        })
        .catch(error => {
          console.log('[DELETE-VOLUME] =>' + error.response.data.badRequest.message)
        })
    }
  }
}
</script>
