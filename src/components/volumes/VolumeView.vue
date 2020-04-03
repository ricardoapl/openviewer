<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">Volumes</h1>
        <p>In this page your can control all of your volumes. <br>If your want to create a new volume click on the button down bellow.</p>
      </div>
      <button
        class="btn btn-outline-info mt-4"
        v-on:click="showVolumeForm = !showVolumeForm"
      >Create Volume
    </button>
    </div>

    <volume-form v-if="showVolumeForm"></volume-form>
    <volume-list></volume-list>
  </div>
</template>

<script>
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
  }
}
</script>
