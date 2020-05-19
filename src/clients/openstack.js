import axios from 'axios'

const token = sessionStorage.getItem('tokenScoped')
const url = sessionStorage.getItem('openstackAddress')

const OpenStackClient = axios.create()
if (token) {
  OpenStackClient.defaults.baseURL = url
  OpenStackClient.defaults.headers.common.Authorization = `Bearer ${token}`
}

export default OpenStackClient
