<template>
  <div>
    <button
      type="button"
      data-toggle="tooltip"
      data-placement="top"
      title="Resume Stack"
      class="btn btn-success btn-sm mr-1"
      v-on:click="resumeStack()"
      >
        <svg class="bi bi-play-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"/>
        </svg>
    </button>
    <button
      type="button"
      data-toggle="tooltip"
      data-placement="top"
      title="Suspend Stack"
      class="btn btn-warning btn-sm mr-1"
      v-on:click="suspendStack()"
      >
        <svg class="bi bi-pause-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 3.5A1.5 1.5 0 017 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5zm5 0A1.5 1.5 0 0112 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5z"/>
        </svg>
    </button>
    <button
      type="button"
      data-toggle="tooltip"
      data-placement="top"
      title="Delete Stack"
      class="btn btn-danger btn-sm"
      v-on:click="deleteStack()"
      >
      <svg class="bi bi-trash-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clip-rule="evenodd"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'OrchestrationListItemActions',
  props: {
    stack: Object
  },
  mounted () {
    // XXX We may want to get rid of this jQuery voodoo in the future...
    // eslint-disable-next-line no-undef
    $(function () { $('[data-toggle="tooltip"]').tooltip() })
  },
  methods: {
    resumeStack: function () {
      console.log('[RESUME-STACK] => ' + this.stack.stack_name)
    },
    suspendStack: function () {
      console.log('[SUSPEND-STACK] => ' + this.stack.stack_name)
    },
    deleteStack: function () {
      console.log('[DELETE-STACK] => ' + this.stack.stack_name)
    }
  }
}
</script>
