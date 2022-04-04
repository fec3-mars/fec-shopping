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

export function makeReviewRequest() {
  const id = arguments[0];

  axios
    .get(`/reviews/?product_id=${id}`)
    .then((results) => {
      this.setState({
        curProductReview: results,
      });
    })
    .catch((err) => {
      console.log("error in axios.js makeRequest", err);
    });
}

export function getProductStyles() {
  const product = arguments[0];
  axios
    .get(`/products/${product.id}/styles`)
    .then((results) => {
      this.setState({
        product: product,
        styles: results.data.results,
        selectedStyle: results.data.results[0]
      });
    })
    .catch((err) => {
      console.log("error in axios.js makeRequest", err);
    });
}

export function getRelatedProducts() {
  const product = arguments[0];

  axios.get(`/products/${product}/related`)
    .then((results) => {
      // console.log(results.data);
      this.setState({
        curProduct: this.props.curProduct,
        relatedProducts: results.data,
      });
    })
    .catch((err) => {
      console.log("error in axios.js getRelatedProducts req", err);
    });
}

export function getRelatedDetail() {
  const product = arguments[0]; //array of product ids
  for (var i = 0; i < product.length; i++) {
    var allDetails=[];
    axios.get(`/products/${product[i]}`)
      .then((results) => {
        allDetails.push(results.data);
        this.setState({
          curProduct: this.props.curProduct,
          relatedProductDetail: allDetails,
        });
      })
      .catch((err) => {
        console.log("error in axios.js getRelatedProducts req", err);
      });
  }
};

export function getRelatedImage() {
  const product = arguments[0];

  for (var i = 0; i < product.length; i++) {
    var imageUrl=[];
    axios.get(`/products/${product[i]}/styles`)
      .then((results) => {
        // console.log('product at related image', results.data.results[0].photos[0].thumbnail_url);
        imageUrl.push(results.data.results[0].photos[0].thumbnail_url);
        this.setState({
          curProduct: this.props.curProduct,
          relatedProductImage: imageUrl,
        });
      })
      .catch((err) => {
        console.log("error in axios.js getRelatedProducts req", err);
      });
  }

};


export default axios;
