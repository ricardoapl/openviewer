<template>
  <!-- XXX Validate form with Vuelidate -->
  <div class="container mb-4">
    <div class="card border-info">
      <div class="card-header bg-info text-light text-center">
        <p class="h5"><strong>Create new floating ip</strong></p>
      </div>
      <form
        v-on:submit.prevent="submitForm()"
        action="/image/v2/images"
        method="POST"
      >
        <div class="card-body">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="name">Image Name</label>
              <input type="text" class="form-control" id="name" v-model="name"/>
            </div>
            <div class="form-group col-md-4">
              <label for="format">Format</label>
              <select class="custom-select" id="format" v-model="formatRef">
                <option
                  v-for="format in formats"
                  v-bind:key="format.id"
                  v-bind:value="format.id"
                  >{{ format.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="card-footer text-center">
          <button type="submit" class="btn btn-success mr-2">Save Image</button>
          <button type="button" class="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatingIpForm',
  data () {
    return {
      name: '',
      containerFormat: 'bare',
      file: null,
      formatRef: '',
      // XXX The following array should be obtained from OpenStack, i.e., not hardcoded
      formats: [
        { id: 'ami', name: 'AMI - Amazon Machine Image' },
        { id: 'ari', name: 'ARI - Amazon Ramdisk Image' },
        { id: 'aki', name: 'AKI - Amazon Kernel Image' },
        { id: 'vhd', name: 'Virtual Hard Disk' },
        { id: 'vmdk', name: 'Virtual Machine Disk' },
        { id: 'raw', name: 'Raw' },
        { id: 'qcow2', name: 'QCOW2 - QEMU Emulator' },
        { id: 'vdi', name: 'Virtual Disk Image' },
        { id: 'iso', name: 'Optical Disk Image' }
      ]
    }
  },
  mounted () {
    console.log('FloatingIpForm created and mounted')
  },
  methods: {
    createImage: function () {
      const body = {
        container_format: this.containerFormat,
        disk_format: this.formatRef,
        name: this.name
      }
      const url = '/image/v2/images'
      const promise = axios.post(url, body)
        .then(response => {
          console.log(response)
          return response.data.id
        })
        .catch(error => {
          console.log(error)
        })
      return promise
    },
    submitForm: function () {
      this.createImage()
        .then(imageId => {
          this.uploadImage(imageId)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
