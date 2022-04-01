export const axios = require('axios');
axios.defaults.headers.common['Authorization'] = process.env.TOKEN;
axios.defaults.baseURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/"

export default axios;