<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">Volumes</h1>
        <p>In this page your can control all of your volumes. <br>If your want to create a new volume click on the button down bellow.</p>
      </div>
      <button
        class="btn btn-outline-info mt-4"
        v-on:click="newVolume"
      >Create Volume
    </button>
    </div>
    <volume-form
      v-if="showVolumeForm"
      v-on:hide="hideForm"
      v-bind:volumeToEdit="volumeToEdit"
    >
    </volume-form>
    <volume-list></volume-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import VolumeForm from './VolumeForm'
import VolumeList from './VolumeList'
export default {
  name: 'VolumeView',
  components: {
    VolumeForm,
    VolumeList
  },
  data () {
    return {
      showVolumeForm: false
    }
  },
  computed: {
    volumeToEdit () {
      return this.$store.state.volumes.volumeToEdit
    }
  },
  mounted () {
    console.log('[VolumeView] => Created and mounted')
    this.getTypes()
    this.getImages()
  },
  methods: {
    // XXX Consider removing action mapping in favor of this.$store...
    ...mapActions({
      getImages: 'images/getImages',
      getTypes: 'volumes/getTypes'
    }),
    newVolume: function () {
      this.showVolumeForm = false
      const EmptyVolume = {
        name: '',
        volumeOrigin: 'empty',
        size: 1,
        volume_type: 'lvmdriver-1',
        description: '',
        volume_image_metadata: {
          image_id: ''
        }
      }
      this.$store.commit('volumes/setvolumeToEdit', EmptyVolume)
    },
    hideForm: function () {
      this.$store.commit('volumes/setvolumeToEdit', null)
      this.showVolumeForm = false
    }
  },
  watch: {
    volumeToEdit (val) {
      if (val != null) {
        this.showVolumeForm = true
      }
    }
  }
}
</script>
