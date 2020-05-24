<template>
  <div class="container mb-4">
    <div class="card border-info">
      <div class="card-header bg-info text-light text-center">
        <p class="h5">
          <strong>Create new cluster</strong>
        </p>
      </div>
      <b-form-checkbox
        v-model="jsonYMLCreate"
        class="ml-3 mt-3"
        switch
        size="lg"
      >
        Go Pro (YAML)
      </b-form-checkbox>
      <form
        action="/kube/cluster"
        method="POST"
        @submit.prevent="submitForm()"
      >
        <div class="card-body">
          <div class="row">
            <b-form-group
              id="name-input-group"
              class="col"
              label="Name"
              label-for="name"
            >
              <b-form-input
                id="name"
                v-model="$v.name.$model"
                :class="validationStatus($v.name)"
                placeholder="Cluster name"
              />
              <div class="invalid-feedback">
                <span v-if="!$v.name.required">Field name is required</span>
                <span v-if="!$v.name.alphaNameSpaces">Only alphanumeric low case and '-' characters are accepted</span>
              </div>
            </b-form-group>
          </div>
          <div
            v-if="!jsonYMLCreate"
            class="row"
          >
            <b-form-group
              id="i+-input-group"
              class="col"
              label="IP"
              label-for="ip"
            >
              <b-form-input
                id="ip"
                v-model="$v.ip.$model"
                :class="validationStatus($v.ip)"
                placeholder="Cluster IP"
              />
              <div class="invalid-feedback">
                <span v-if="!$v.ip.required"> Field IPv4 address is required </span>
                <span v-if="!$v.ip.ipAddress"> Only IPv4 valid addresses  </span>
              </div>
            </b-form-group>
            <b-form-group
              id="port-input-group"
              class="col"
              label="Port"
              label-for="port"
            >
              <b-form-input
                id="port"
                v-model="$v.port.$model"
                :class="validationStatus($v.port)"
                placeholder="Cluster Port"
              />
              <div class="invalid-feedback">
                <span v-if="!$v.port.required"> Field port number is required </span>
                <span v-if="!$v.port.numeric"> Only Numbers </span>
                <span v-if="!$v.port.minValue"> Minimum value: {{ $v.port.$params.minValue }} </span>
                <span v-if="!$v.port.maxValue"> Maximum value: {{ $v.port.$params.maxValue }} </span>
              </div>
            </b-form-group>
            <b-form-group
              id="token-input-group"
              class="col"
              label="Tokens Location"
              label-for="token"
            >
              <b-form-input
                id="token"
                v-model="$v.token.$model"
                :class="validationStatus($v.token)"
                placeholder="Token Location"
              />
              <div class="invalid-feedback">
                <span v-if="!$v.token.required">Field token location is required</span>
              </div>
            </b-form-group>
          </div>
          <div v-else>
            <b-form-textarea
              id="textarea"
              v-model="$v.yamlBody.$model"
              :class="validationStatus($v.yamlBody)"
              placeholder="Place your YAML code here..."
              rows="12"
            />
            <div class="invalid-feedback">
              <span v-if="!$v.yamlBody.required"> Field yaml body is required </span>
            </div>
          </div>
        </div>
        <div class="card-footer text-center">
          <button
            type="submit"
            class="btn btn-success mr-2"
          >
            Save
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="$emit('hide')"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, helpers, minValue, maxValue, numeric, ipAddress } from 'vuelidate/lib/validators'
const alphaNameSpaces = helpers.regex('alphanamespaces', /^[a-z0-9]([-a-z0-9]*[a-z0-9])?$/)
export default {
  data () {
    return {
      jsonYMLCreate: false,
      yamlBody: '',
      name: '',
      body: '',
      ip: '0.0.0.0',
      port: '',
      token: '/home/user/misc'

    }
  },
  validations () {
    if (this.jsonYMLCreate) {
      return {
        name: {
          required,
          alphaNameSpaces
        },
        yamlBody: {
          required
        }
      }
    } else {
      return {
        name: {
          required,
          alphaNameSpaces
        },
        ip: {
          required,
          ipAddress
        },
        port: {
          required,
          numeric,
          minValue: 1024,
          maxValue: 65535
        },
        token: {
          required
        }
      }
    }
  },
  methods: {
    getMainYAMLBody: function () {
      const preset = `kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
kubeadmConfigPatches:
  - |
    kind: ClusterConfiguration
    metadata:
      name: config
    apiServer:
      extraArgs:
        "cors-allowed-origins": "['http://*']"
        "token-auth-file": "/etc/kubernetes/kube-apiserver-tokens/tokens.csv"
      extraVolumes:
      -  name: kube-apiserver-tokens
         hostPath: "/etc/kubernetes/kube-apiserver-tokens/tokens.csv"
         mountPath: "/etc/kubernetes/kube-apiserver-tokens/tokens.csv"
         readOnly: true
networking:
  apiServerAddress: "${this.ip}"
  apiServerPort: ${this.port}
nodes:
- role: control-plane
  extraMounts:
  - containerPath: /etc/kubernetes/kube-apiserver-tokens
    hostPath: ${this.token}
    readOnly: true
- role: worker
- role: worker`
      return preset
    },
    submitForm: function () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.createCluster()
        this.$emit('hide')
      }
    },
    createCluster: function () {
      const body = {
        name: this.name,
        body: (this.jsonYMLCreate) ? this.yamlBody : this.getMainYAMLBody()
      }
      const url = '/kube/cluster'
      this.$flaskind.post(url, body)
        .then(response => {
          this.$store.dispatch('clusters/getClusters')
        })
        .catch(error => {
          console.log(error)
        })
    },
    validationStatus: function (validation) {
      return {
        'is-invalid': validation.$error || this.serverErrors,
        'is-valid': validation.$dirty
      }
    }
  }
}
</script>
