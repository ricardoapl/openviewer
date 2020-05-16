<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">
          Dashboard
        </h1>
        <p>Summary of all services running on your <u><strong><em>{{ currentProject }}</em></strong></u> project</p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="card text-center">
            <div class="card-body">
              <div class="mt-2">
                <svg
                  class="bi bi-exclude text-primary"
                  width="3.5em"
                  height="3.5em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 0A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12H4v2.5A1.5 1.5 0 005.5 16h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 4H12V1.5A1.5 1.5 0 0010.5 0h-9zM12 4H5.5A1.5 1.5 0 004 5.5V12h6.5a1.5 1.5 0 001.5-1.5V4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="mt-2 lead">
                  Instances
                </p>
              </div>
              <p class="display-1 d-inline">
                {{ animateInstance }}
              </p>
              <p class="card-text ">
                The number of instances running on this project.
              </p>
              <button
                class="btn btn-primary"
                @click="$router.push('Instances')"
              >
                See Instances
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card text-center">
            <div class="card-body">
              <div class="mt-2">
                <svg
                  class="bi bi-puzzle-fill text-success"
                  width="3.5em"
                  height="3.5em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.112 3.645A1.5 1.5 0 014.605 2H7a.5.5 0 01.5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 00-.115.118.113.113 0 00-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 00.27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 00.271-.194.213.213 0 00.036-.054l.003-.01v-.008a.112.112 0 00-.012-.025.459.459 0 00-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 019 2h2.395a1.5 1.5 0 011.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0111.395 14H9a.5.5 0 01-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 00.115-.118.113.113 0 00.012-.025L9.5 11.5v-.003l-.003-.01a.214.214 0 00-.036-.053.859.859 0 00-.27-.194C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 00-.271.194.214.214 0 00-.036.054l-.003.01v.002l.001.006a.113.113 0 00.012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 01-.5.5H4.605a1.5 1.5 0 01-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="mt-2 lead">
                  Images
                </p>
              </div>
              <p class="display-1 d-inline">
                {{ animateImages }}
              </p>
              <p class="card-text ">
                The number of images uploaded on this project.
              </p>
              <button
                class="btn btn-success"
                @click="$router.push('Images')"
              >
                See Images
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card text-center">
            <div class="card-body">
              <div class="mt-2">
                <svg
                  class="bi bi-bucket-fille text-warning"
                  width="3.5em"
                  height="3.5em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.5A4.5 4.5 0 003.5 6h-1a5.5 5.5 0 1111 0h-1A4.5 4.5 0 008 1.5z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1.61 5.687A.5.5 0 012 5.5h12a.5.5 0 01.488.608l-1.826 8.217a1.5 1.5 0 01-1.464 1.175H4.802a1.5 1.5 0 01-1.464-1.175L1.512 6.108a.5.5 0 01.098-.42z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="mt-2 lead">
                  Volumes
                </p>
              </div>
              <div>
                <span class="display-1">{{ animateVolumes }}</span>
              </div>
              <p class="card-text ">
                The number of volumes created on this project.
              </p>
              <button
                class="btn btn-warning text-light"
                @click="$router.push('Volumes')"
              >
                See Volumes
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="col-sm">
            <div class="card text-center">
              <div class="card-body">
                <div class="mt-2">
                  <svg
                    class="bi bi-pie-chart-fill text-danger"
                    width="3.5em"
                    height="3.5em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0013.277-5.5zM2 13.292A8 8 0 017.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 008.5.015z" />
                  </svg>
                  <p class="mt-2 lead">
                    Volumes Size
                  </p>
                </div>
                <p class="display-1 d-inline">
                  {{ animateVolumeSize }}
                </p>
                <span class="text-muted d-inline"> GB</span>
                <p class="card-text ">
                  The total volumes size used in this project.
                </p>
                <button
                  class="btn btn-danger"
                  @click="$router.push('Volumes')"
                >
                  See Volumes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-sm">
          <div class="card text-center">
            <div class="card-body">
              <div class="mt-2">
                <svg
                  class="bi bi-bullseye text-info"
                  width="3.5em"
                  height="3.5em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 13A5 5 0 108 3a5 5 0 000 10zm0 1A6 6 0 108 2a6 6 0 000 12z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 11a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8z"
                    clip-rule="evenodd"
                  />
                  <path d="M9.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
                <p class="mt-2 lead">
                  vCPUs
                </p>
              </div>
              <p class="display-1 d-inline">
                {{ animateVcpu }}
              </p>
              <p class="card-text ">
                The total vCPUs used in this project.
              </p>
              <button
                class="btn btn-info"
                @click="$router.push('Instances')"
              >
                See Instances
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card text-center">
            <div class="card-body">
              <div class="mt-2">
                <svg
                  class="bi bi-geo"
                  width="3.5em"
                  height="3.5em"
                  viewBox="0 0 16 16"
                  fill="#20c997"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 4a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M7.5 4h1v9a.5.5 0 01-1 0V4z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.489 12.095a.5.5 0 01-.383.594c-.565.123-1.003.292-1.286.472-.302.192-.32.321-.32.339 0 .013.005.085.146.21.14.124.372.26.701.382.655.246 1.593.408 2.653.408s1.998-.162 2.653-.408c.329-.123.56-.258.701-.382.14-.125.146-.197.146-.21 0-.018-.018-.147-.32-.339-.283-.18-.721-.35-1.286-.472a.5.5 0 11.212-.977c.63.137 1.193.34 1.61.606.4.253.784.645.784 1.182 0 .402-.219.724-.483.958-.264.235-.618.423-1.013.57-.793.298-1.855.472-3.004.472s-2.21-.174-3.004-.471c-.395-.148-.749-.336-1.013-.571-.264-.234-.483-.556-.483-.958 0-.537.384-.929.783-1.182.418-.266.98-.47 1.611-.606a.5.5 0 01.595.383z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="mt-2 lead">
                  Floating IPs
                </p>
              </div>
              <p class="display-1 d-inline">
                {{ animateFloatingIp }}
              </p>
              <p class="card-text ">
                The total floating IPs used in this project.
              </p>
              <button
                class="btn text-light"
                style="background-color:#20c997"
                @click="$router.push('FloatingIPs')"
              >
                See Floating IPs
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card text-center">
            <div class="card-body">
              <div class="mt-2">
                <svg
                  class="bi bi-grid-3x3-gap-fill"
                  width="3.5em"
                  height="3.5em"
                  viewBox="0 0 16 16"
                  fill="#fd7e14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V2zM1 7a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V7zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V7zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V7zM1 12a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1v-2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z" />
                </svg>
                <p class="mt-2 lead">
                  RAM
                </p>
              </div>
              <p class="display-1 d-inline">
                {{ animateRam }}
              </p>
              <span class="text-muted d-inline"> MB</span>
              <p class="card-text ">
                The total RAM size used in this project.
              </p>
              <button
                class="btn text-light"
                style="background-color:#fd7e14"
                @click="$router.push('Instances')"
              >
                See Instances
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card text-center">
            <div class="card-body">
              <div class="mt-2">
                <svg
                  class="bi bi-layers-fill"
                  width="3.5em"
                  height="3.5em"
                  viewBox="0 0 16 16"
                  fill="#e83e8c"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.765 1.559a.5.5 0 01.47 0l7.5 4a.5.5 0 010 .882l-7.5 4a.5.5 0 01-.47 0l-7.5-4a.5.5 0 010-.882l7.5-4z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M2.125 8.567l-1.86.992a.5.5 0 000 .882l7.5 4a.5.5 0 00.47 0l7.5-4a.5.5 0 000-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 01-1.41 0l.418-.785-.419.785-5.169-2.756z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="mt-2 lead">
                  Stacks
                </p>
              </div>
              <p class="display-1 d-inline">
                {{ animateStacks }}
              </p>
              <p class="card-text ">
                The total stacks created in this project.
              </p>
              <button
                class="btn text-light"
                style="background-color:#e83e8c"
                @click="$router.push('Orchestrations')"
              >
                See Stacks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import { mapActions } from 'vuex'
export default {
  name: 'HomeView',
  data () {
    return {
      instances: 0,
      tweenedInstances: 0,
      tweenedImages: 0,
      volumes: 0,
      tweenedVolumes: 0,
      volumesSize: 0,
      tweenedVolumesSize: 0,
      vcpus: 0,
      tweenedVcpus: 0,
      ram: 0,
      tweenedRam: 0,
      tweenedFloatingIps: 0,
      tweenedstacks: 0
    }
  },
  computed: {
    images: function () { return this.$store.state.images.totalImages },
    stacks: function () { return this.$store.state.orchestrations.totalStacks },
    floatingIps: function () { return this.$store.state.networks.totalFloatingIps },
    animateInstance: function () { return this.tweenedInstances.toFixed(0) },
    animateImages: function () { return this.tweenedImages.toFixed(0) },
    animateVolumes: function () { return this.tweenedVolumes.toFixed(0) },
    animateVolumeSize: function () { return this.tweenedVolumesSize.toFixed(0) },
    animateVcpu: function () { return this.tweenedVcpus.toFixed(0) },
    animateRam: function () { return this.tweenedRam.toFixed(0) },
    animateFloatingIp: function () { return this.tweenedFloatingIps.toFixed(0) },
    animateStacks: function () { return this.tweenedstacks.toFixed(0) },
    // XXX This computed cunction is duplicated in App.vue. Consider put only one function globally in vuex getters...
    currentProject: function () {
      return this.$store.state.authentication.projects != null
        ? this.$store.state.authentication.projects.find(o => o.id === this.$store.state.authentication.idSelectedProject).name
        : ''
    }
  },
  mounted () {
    this.getImages()
    this.getStacks()
    this.getVolumeLimits()
    this.getComputeLimits()
    this.getFloatingIps()
  },
  methods: {
    // XXX Consider removing action mapping in favor of this.$store...
    ...mapActions({
      getImages: 'images/getImages',
      getStacks: 'orchestrations/getStacks',
      getFloatingIps: 'networks/getFloatingIps'
    }),
    getVolumeLimits: function () {
      axios.get('/volume/v3/' + this.$store.state.authentication.idSelectedProject + '/limits')
        .then(response => {
          console.log('[VOLUME LIMITS] =>', response)
          this.volumes = response.data.limits.absolute.totalVolumesUsed
          this.volumesSize = response.data.limits.absolute.totalGigabytesUsed
          this.snapshots = response.data.limits.absolute.totalSnapshotsUsed
        })
        .catch(error => {
          console.log('[VOLUME LIMITS] =>', error)
        })
    },
    getComputeLimits: function () {
      axios.get('/compute/v2.1/limits')
        .then(response => {
          console.log('[COMPUTE LIMITS] =>', response)
          this.instances = response.data.limits.absolute.totalInstancesUsed
          this.vcpus = response.data.limits.absolute.totalCoresUsed
          this.ram = response.data.limits.absolute.totalRAMUsed
        })
        .catch(error => {
          console.log('[COMPUTE LIMITS] =>', error)
        })
    }
  },
  watch: {
    instances: function (newValue) { gsap.to(this.$data, { duration: 2, tweenedInstances: newValue }) },
    images: function (newValue, oldValue) { gsap.to(this.$data, { duration: 2, tweenedImages: newValue }) },
    volumes: function (newValue) { gsap.to(this.$data, { duration: 2, tweenedVolumes: newValue }) },
    volumesSize: function (newValue) { gsap.to(this.$data, { duration: 2, tweenedVolumesSize: newValue }) },
    vcpus: function (newValue) { gsap.to(this.$data, { duration: 2, tweenedVcpus: newValue }) },
    ram: function (newValue) { gsap.to(this.$data, { duration: 2, tweenedRam: newValue }) },
    floatingIps: function (newValue) { gsap.to(this.$data, { duration: 2, tweenedFloatingIps: newValue }) },
    stacks: function (newValue) { gsap.to(this.$data, { duration: 2, tweenedstacks: newValue }) }
  }
}
</script>
