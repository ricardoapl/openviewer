<template>
  <div class="container table-responsive">
    <table class="table table-striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Size</th>
          <th>Status</th>
          <th>Attached?</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          is="volume-list-item"
          v-for="volume in volumes"
          v-bind:key="volume.id"
          v-bind:volume="volume">
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// XXX Consider importing { mapActions } on a larger scope
import { mapActions } from 'vuex'
import VolumeListItem from './VolumeListItem'
export default {
  name: 'VolumeList',
  components: {
    VolumeListItem
  },
  computed: {
    volumes () {
      return this.$store.state.volumes.volumes
    }
  },
  mounted () {
    console.log('[VolumeList] => InstanceList created and mounted')
    this.getVolumes()
  },
  methods: {
    // XXX Consider removing action mapping in favor of this.$store...
    ...mapActions({
      getVolumes: 'volumes/getVolumes'
    })
  }
}
</script>
