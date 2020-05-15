<template>
  <span>
    <div class="container table-responsive">
      <b-table show-empty bordered :per-page="perPage" :current-page="currentPage" striped hover :items="filteredPods" :fields="fields" selectable :select-mode="'single'" @row-selected="onRowSelected">
        <template v-slot:cell(nodeInfo)="row">
        <span
          class="badge badge-info"
        >
          {{ row.item.spec.nodeName }}
        </span>
        <p><span class="badge badge-secondary" v-for="(value,key) in row.item.spec.nodeSelector " :key="key">{{key}} : "{{value}}"</span></p>
      </template>
      <template v-slot:cell(podIPs)="row">
        <p><span  v-for="(value) in row.item.status.podIPs " :key="value.ip">{{value.ip}}</span></p>
      </template>
      </b-table>
      
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
          key:'podIPs',
          label:'Pod IPs'
        },
        {
          key:'status.hostIP',
          label:'Host IP'
        },
        {
          key:'nodeInfo',
          label:'Node Info'
        },
        {
          key:'spec.containers.length',
          label:'Number of Containers'
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
      console.log(items)
      this.selectedPod = items[0]
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