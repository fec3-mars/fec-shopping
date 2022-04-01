export const axios = require("axios");
axios.defaults.headers.common["Authorization"] = process.env.TOKEN;
axios.defaults.baseURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/";

export function makeRequest() {
  const id = arguments[0];

  axios
    .get(`/products/${id}`)
    .then((results) => {
      this.setState({
        curProduct: results,
      });
    })
    .catch((err) => {
      console.log("error in axios.js makeRequest", err);
    });
}

export default axios;
