<template>
  <!-- XXX Apply Bootstrap grid system -->
  <div>
    <button
      class="btn btn-info"
      v-on:click="showInstanceForm = !showInstanceForm"
      >Create instance
    </button>
    <instance-form
      v-if="showInstanceForm"
      v-on:hide-form="showInstanceForm = false">
    </instance-form>
    <instance-list></instance-list>
  </div>
</template>

<script>
// XXX Consider importing { mapActions } on a larger scope
import { mapActions } from 'vuex'
import InstanceForm from './InstanceForm'
import InstanceList from './InstanceList'
export default {
  components: {
    InstanceForm,
    InstanceList
  },
  data () {
    return {
      showInstanceForm: false
    }
  },
  mounted () {
    console.log('InstanceView created and mounted')
    this.getFlavors()
    this.getNetworks()
    this.getImages()
  },
  methods: {
    // XXX Consider removing action mapping in favor of this.$store...
    ...mapActions({
      getFlavors: 'instances/getFlavors',
      getNetworks: 'instances/getNetworks',
      getImages: 'instances/getImages'
    })
  }
}
</script>
