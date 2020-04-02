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
          v-bind:volume="volume"
          >
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import VolumeListItem from './VolumeListItem'
export default {
  components: {
    VolumeListItem
  },
  data () {
    return {
      volumes: []
    }
  },
  mounted () {
    this.getVolumes()
  },
  methods: {
    getVolumes: function () {
      axios.get('/volume/v3/' + this.$store.state.authentication.idSelectedProject + '/volumes')
        .then(response => {
          if (response.data.volumes.length > 0) {
            $.each(response.data.volumes, (key, value) => {
              this.getVolumeData(value.id)
            })
          }
        })
        .catch(error => {
          console.log('[VolumeList]  => ' + error)
        })
    },
    getVolumeData: function (idVolume) {
      axios.get('/volume/v3/' + this.$store.state.authentication.idSelectedProject + '/volumes/' + idVolume)
        .then(response => {
          this.volumes.push(response.data.volume)
        })
        .catch(error => {
          console.log('[VolumeList]  => ' + error)
        })
    }
  }
}
</script>
