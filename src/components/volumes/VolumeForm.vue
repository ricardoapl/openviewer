<template>
    <div class="container mb-4">
        <div class="card border-info">
            <div class="card-header bg-info text-light text-center">
                <p class="h5">
                    <strong>Create new volume</strong>
                </p>
            </div>
            <form v-on:submit.prevent="submitForm()">
                <div class="card-body">
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" v-model="name">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="volumeOrigin">Volume Origin</label>
                            <select class="custom-select" id="volumeOrigin" v-model="volumeOrigin">
                                <option value="empty">No Origin / Volume Empty</option>
                                <option value="image">Image</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="size">Size: <strong>{{size}}</strong> <small class="text-secondary">GiB</small> </label>
                            <div class="w-100" style="height: 20px;">
                                <div class="w-50 d-inline-block text-left">
                                    <small class="text-secondary">0 GiB</small>
                                </div>
                                <div class="w-50 d-inline-block text-right">
                                    <small class="text-secondary">100 GiB</small>
                                </div>
                            </div>
                            <input type="range" class="custom-range" id="size" min="0" max="100" value="20" v-model="size">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                           <label for="type">Type</label>
                            <select class="custom-select" id="type" v-model="type">
                                <option
                                    v-for="type in types"
                                    v-bind:key="type.id"
                                    v-bind:value="type.id"
                                    >{{ type.name }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group col-md-8">
                            <label for="description">Description</label>
                            <textarea class="form-control" id="description" rows="3" v-model="description"></textarea>
                        </div>
                    </div>
                     <div class="form-row" v-if="volumeOrigin == 'image'">
                        <div class="form-group col-md-12">
                            <label for="image">Images</label>
                            <select class="custom-select" id="image" v-model="image">
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
                    <button type="submit" class="btn btn-success mr-2">Save Volume</button>
                    <button class="btn btn-secondary">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'InstanceForm',
  data () {
    return {
      name: '',
      volumeOrigin: 'empty',
      size: 1,
      type: 'efefbe15-f0ce-4a0e-9890-c8dc33e822ef',
      description: '',
      image: ''
    }
  },
  computed: {
    images () {
      return this.$store.state.instances.images
    },
    types () {
      return this.$store.state.volumes.types
    }
  },
  mounted () {
    console.log('[VolumeForms] = > Created and mounted')
  },
  methods: {
    submitForm: function () {
      // eslint-disable-next-line no-undef
      axios.post('/volume/v3/' + this.$store.state.authentication.idSelectedProject + '/volumes', {
        volume: {
          size: this.size,
          description: this.description,
          name: this.name,
          imageRef: this.volumeOrigin === 'image' ? this.image : null,
          volume_type: this.type,
          consistencygroup_id: null
        }
      })
        .then(response => {
          console.log('[VolumeForm] =>')
          console.log(response)
          this.$store.dispatch('volumes/getVolumes')
          this.$emit('hide')
        })
        .catch(error => {
          console.log('[VolumeForm] =>')
          console.log(error.response)
        })
    }
  }
}
</script>
