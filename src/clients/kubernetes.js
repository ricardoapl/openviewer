import axios from 'axios'

const token = sessionStorage.getItem('tokenKubernetes')
const url = sessionStorage.getItem('kubernetesAddress')

const KubernetesClient = axios.create()
if (token) {
  KubernetesClient.defaults.baseURL = url
  KubernetesClient.defaults.headers.common.Authorization = `Bearer ${token}`
}

export default KubernetesClient
