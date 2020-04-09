<template>
    <div class="container mb-4">
        <div class="card" :class="styleBorderClass">
            <div class="card-header text-light text-center" :class="styleHeaderClass">
                <p class="h5">
                    <strong>{{volume.id == null ? 'Create new Volume' : 'Edit Volume'}}</strong>
                </p>
            </div>
            <form v-on:submit.prevent="submitForm()">
                <div class="card-body">
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" v-model="volume.name">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="volumeOrigin">Volume Origin</label>
                            <select class="custom-select" id="volumeOrigin" v-model="volumeOrigin" :disabled="disableEdit">
                                <option value="empty">No Origin / Volume Empty</option>
                                <option value="image">Image</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="size">Size: <strong>{{volume.size}}</strong> <small class="text-secondary">GiB</small> </label>
                            <div class="w-100" style="height: 20px;">
                                <div class="w-50 d-inline-block text-left">
                                    <small class="text-secondary">{{volume.size}} GiB</small>
                                </div>
                                <div class="w-50 d-inline-block text-right">
                                    <small class="text-secondary">100 GiB</small>
                                </div>
                            </div>
                            <input type="range" ref="size" class="custom-range" id="size" min="1" max="100" v-model="volume.size">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                           <label for="type">Type</label>
                            <select class="custom-select" id="type" v-model="volume.volume_type" :disabled="disableEdit">
                                <option
                                    v-for="type in types"
                                    v-bind:key="type.id"
                                    v-bind:value="type.name"
                                    >{{ type.name }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group col-md-8">
                            <label for="description">Description</label>
                            <textarea class="form-control" id="description" rows="3" v-model="volume.description"></textarea>
                        </div>
                    </div>
                     <div class="form-row" v-if="volumeOrigin == 'image'">
                        <div class="form-group col-md-12">
                            <label for="image">Images</label>
                            <select class="custom-select" id="image" v-model="volume.volume_image_metadata.image_id" :disabled="disableEdit">
                              <option
                                    v-for="image in images"
                                    v-bind:key="image.id"
                                    v-bind:value="image.id"
                                    >{{ image.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-center">
                    <button type="submit" class="btn mr-2" :class="styleButtonClass">Save Volume</button>
                    <button type="button" class="btn btn-outline-secondary" v-on:click="$emit('hide')">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'VolumeForm',
  props: {
    volumeToEdit: Object
  },
  data () {
    return {
      volumeOrigin: 'Empty',
      volume: {}
    }
  },
  beforeMount () {
    this.volume = this.volumeToEdit
    this.volumeOrigin = (this.volume.volume_image_metadata && this.volume.volume_image_metadata.image_id) ? 'image' : 'empty'
  },
  computed: {
    images () { return this.$store.state.images.images },
    types () { return this.$store.state.volumes.types },
    title () { return this.volume.id ? 'Edit Volume' : 'Create new Volume' },
    styleHeaderClass () { return this.volume.id ? 'bg-primary' : 'bg-info' },
    styleBorderClass () { return this.volume.id ? 'border-primary' : 'border-info' },
    styleButtonClass () { return this.volume.id ? 'btn-primary' : 'btn-info' },
    disableEdit () { return this.volume.id }
  },
  mounted () {
    console.log('[VolumeForms] => Created and mounted')
    this.$refs.size.setAttribute('min', this.volume.size)
  },
  methods: {
    submitForm: function () {
      if (this.volume.id) {
        this.editVolume()
        this.extendVolume()
      } else {
        this.createVolume()
      }
      this.$emit('hide')
    },
    createVolume: function () {
      // eslint-disable-next-line no-undef
      axios.post('/volume/v3/' + this.$store.state.authentication.idSelectedProject + '/volumes', {
        volume: {
          size: this.volume.size,
          description: this.volume.description,
          name: this.volume.name,
          imageRef: this.volumeOrigin === 'image' ? this.volume.volume_image_metadata.image_id : null,
          volume_type: this.volume.volume_type,
          consistencygroup_id: null
        }
      })
        .then(response => {
          console.log('[NEW VOLUME] =>', response)
          this.$store.dispatch('volumes/getVolumes')
        })
        .catch(error => {
          console.log('[NEW VOLUME] =>', error.response)
        })
    },
    editVolume: function () {
      // eslint-disable-next-line no-undef
      axios.put('/volume/v3/' + this.$store.state.authentication.idSelectedProject + '/volumes/' + this.volume.id, {
        volume: {
          name: this.volume.name,
          description: this.volume.description
        }
      })
        .then(response => {
          console.log('[UPDATE VOLUME] =>', response)
          this.$store.dispatch('volumes/getVolumes')
        })
        .catch(error => {
          console.log('[UPDATE VOLUME] =>', error.response)
        })
    },
    extendVolume: function () {
      // eslint-disable-next-line no-undef
      axios.post('/volume/v3/' + this.$store.state.authentication.idSelectedProject + '/volumes/' + this.volume.id + '/action', {
        'os-extend': {
          new_size: this.volume.size
        }
      })
        .then(response => {
          console.log('[EXTEND VOLUME SIZE] =>', response)
          this.$store.dispatch('volumes/getVolumes')
        })
        .catch(error => {
          console.log('[EXTEND VOLUME SIZE] =>', error.response)
        })
    }
  }
}
</script>
