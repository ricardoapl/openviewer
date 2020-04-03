<template>
  <div class="container table-responsive">
    <table class="table table-striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Visibility</th>
          <th>Protected</th>
          <th>Disk Format</th>
          <th>Size</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          is="image-list-item"
          v-for="image in images"
          v-bind:key="image.id"
          v-bind:image="image"
          >
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// XXX Consider using { mapState } instead
import { mapActions } from 'vuex'
import ImageListItem from './ImageListItem'
export default {
  components: {
    ImageListItem
  },
  computed: {
    images () {
      // XXX This name...
      return this.$store.state.images.images
    }
  },
  mounted () {
    console.log('ImageList created and mounted')
    this.getImages()
  },
  methods: {
    // XXX Consider using { mapState } instead
    ...mapActions({
      getImages: 'images/getImages'
    })
  }
}
</script>
