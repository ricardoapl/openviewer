<template>
  <div class="container table-responsive">
    <table class="table table-striped">
        <thead>
        <tr>
          <th>Stack Name</th>
          <th>Status</th>
          <th>Status Reason</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          is="orchestration-list-item"
          v-for="stack in stacks"
          v-bind:key="stack.id"
          v-bind:stack="stack">
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// XXX Consider importing { mapActions } on a larger scope
import { mapActions } from 'vuex'
import OrchestrationListItem from './OrchestrationListItem'
export default {
  name: 'OrchestrationList',
  components: {
    OrchestrationListItem
  },
  computed: {
    stacks () {
      return this.$store.state.orchestrations.stacks
    }
  },
  mounted () {
    console.log('[OrchestrationList] => OrchestrationList created and mounted')
    this.getStacks()
  },
  methods: {
    // XXX Consider removing action mapping in favor of this.$store...
    ...mapActions({
      getStacks: 'orchestrations/getStacks'
    })
  }
}
</script>
