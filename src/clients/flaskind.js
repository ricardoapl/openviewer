import axios from 'axios'

const FlaskindClient = axios.create()
FlaskindClient.defaults.baseURL = 'http://127.0.0.1:5000'

export default FlaskindClient
