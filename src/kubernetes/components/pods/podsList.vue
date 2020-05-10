<template>
  <span>
    <div class="container table-responsive">
      <b-table bordered :per-page="perPage" :current-page="currentPage" striped hover :items="filteredPods" :fields="fields"></b-table>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
       align="right"
    ></b-pagination>
  </span>
</template>

<script>


export default {
  name: 'PodsList',
  props:[
    'namespace'
  ],
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      fields:[
        {
          key:'metadata.name',
          label:'name'
        },
        {
          key:'metadata.namespace',
          label:'Namespace'
        },
        {
          key:'metadata.creationTimestamp',
          label:'Created at'
        },
        {
          key:'metadata.uid',
          label:'UID'
        },
      ],
      
    }
  },
  mounted () {
    console.log("pods lists")
  },
  computed: {
    filteredPods () {
      if(this.namespace=='*'){
        return this.$store.state.pods.pods;
      } else{
        return this.$store.state.pods.pods.filter((obj)=>{
          console.log(obj.metadata.namespace +'--->'+this.namespace)
          return obj.metadata.namespace == this.namespace;
        })
      }
    },
    rows() {
      return this.filteredPods.length;
    }
  },
  methods: {
  },
  watch: {
  }
}
</script>

<style scoped>

.opacity{
  opacity: 0.8;
}

</style>