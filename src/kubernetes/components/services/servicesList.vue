<template>
  <span>
    <div class="container table-responsive">
      <b-table bordered :per-page="perPage" :current-page="currentPage" striped hover :items="filteredImages" :fields="fields"></b-table>
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
  name: 'RolesList',
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
          label:'Name'
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
    console.log("roles list")
  },
  computed: {
    filteredImages () {
      if(this.namespace=='*'){
        return this.$store.state.images.images;
      } else{
        return this.$store.state.images.images.filter((obj)=>{
          console.log(obj.metadata.namespace +'--->'+this.namespace)
          return obj.metadata.namespace == this.namespace;
        })
      }
    },
    rows() {
      return this.filteredImages.length;
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