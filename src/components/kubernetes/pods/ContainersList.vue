<template>
  <span>
    <div class="container table-responsive">
      <b-table show-empty bordered :per-page="perPage" :current-page="currentPage" striped hover :items="filteredPods" :fields="fields" selectable single @row-selected="onRowSelected"></b-table>
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
      selectedPod:{},
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
  },
  computed: {
    filteredPods () {
      if(this.namespace=='*'){
        return this.$store.state.pods.pods;
      } else{
        return this.$store.state.pods.pods.filter((obj)=>{
          return obj.metadata.namespace == this.namespace;
        })
      }
    },
    rows() {
      return this.filteredPods.length;
    },
  },
  methods: {
    onRowSelected(items) {
        this.selectedPod = items[0];
        this.$emit('newSelectedPod',this.selectedPod);
    },
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