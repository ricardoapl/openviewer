<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">Images</h1>
        <p>In this page you can control all of your images.<br>If your want to create a new image click on the button down bellow.</p>
      </div>
      <button
        class="btn btn-outline-info mt-4"
        v-on:click="showImageForm = !showImageForm"
        >Create Image
      </button>
    </div>
    <image-form
      v-if="showImageForm"
      v-on:hide="showImageForm = false">
    </image-form>
    <image-list></image-list>
  </div>
</template>

<script>
import ImageForm from './ImageForm'
import ImageList from './ImageList'
export default {
  components: {
    ImageForm,
    ImageList
  },
  data () {
    return {
      showImageForm: false
    }
  },
  mounted () {
    console.log('ImageView created and mounted')
  }
}
</script>
