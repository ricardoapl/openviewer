<template>
  <tr>
    <td>{{ image.name }}</td>
    <!-- TODO Fix image type -->
    <td>Image</td>
    <td>{{ image.status }}</td>
    <td>{{ image.visibility }}</td>
    <td>{{ image.protected ? 'Yes' : 'No' }}</td>
    <td>{{ image.disk_format }}</td>
    <td>{{ (image.size / this.mebibyte).toFixed(2) }} MiB</td>
    <td>
      <image-list-item-actions
        v-bind:image="image">
      </image-list-item-actions>
    </td>
  </tr>
</template>

<script>
import ImageListItemActions from './ImageListItemActions'
export default {
  components: {
    ImageListItemActions
  },
  data () {
    return {
      mebibyte: 1048576
    }
  },
  props: {
    image: Object
  },
  mounted () {
    console.log('ImageListItem created and mounted for image with id ' + this.image.id)
  }
}
</script>
