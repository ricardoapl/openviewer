<template>
  <!-- XXX Apply Bootstrap grid system -->
  <div>
    <button
      class="btn btn-info"
      v-on:click="showInstanceForm = !showInstanceForm"
      >Create instance
    </button>
    <instance-form v-if="showInstanceForm"></instance-form>
    <instance-list></instance-list>
  </div>
</template>

<script>
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
  }
}
</script>
