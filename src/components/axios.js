export const axios = require("axios");
axios.defaults.headers.common["Authorization"] = process.env.TOKEN;
axios.defaults.baseURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/";

export function makeRequest() {
  axios
    .get("/products/66643")
    .then((results) => {
      console.log("Results in axios.js are:", results.data);
      this.setState({
        curProduct: results.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export default axios;
// export default getProductData;
