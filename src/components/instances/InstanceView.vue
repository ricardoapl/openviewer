<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">Instances</h1>
        <p>In this page you can control all of your instances.<br>If you want to create a new instance click on the button down bellow.</p>
      </div>
      <button
        class="btn btn-outline-info mt-4"
        v-on:click="showInstanceForm = !showInstanceForm"
        >Create instance
      </button>
    </div>
    <instance-form
      v-if="showInstanceForm"
      v-on:hide="showInstanceForm = false">
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
  name: 'InstanceView',
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
      getNetworks: 'networks/getNetworks',
      getImages: 'images/getImages'
    })
  }
}
</script>
