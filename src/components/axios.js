/* eslint-disable */
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
      const avgRating =
        results.data.results.reduce(
          (acc, item) => (acc = acc + item.rating),
          0
        ) / results.data.count;
      this.setState({
        totalReviews: results.data.count,
        curProductReview: results,
        avgRating: avgRating,
      });
    })
    .catch((err) => {
      console.log("error in axios.js makeRequest", err);
    });
}
///////////////////////////////////////////////////////////////
//********Axios Requests for Product Overview Widget**********
///////////////////////////////////////////////////////////////

export function getProductStyles() {
  const product = arguments[0];
  axios
    .get(`/products/${product.id}/styles`)
    .then((results) => {
      this.setState({
        product: product,
        styles: results.data.results,
        selectedStyle: results.data.results[0],
        loaded: true,
      });
    })
    .catch((err) => {
      console.log("error in axios.js makeRequest", err);
      this.setState({ loaded: true });
    });
}

export function postToBag(data, selectedSize) {
  axios
    .post("/cart", data)
    .then((result) => {
      axios.get("/cart").then((res) => {
        console.log(res);
      });
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

///////////////////////////////////////////////////////////////
//********Axios Requests for Product Overview Widget**********
///////////////////////////////////////////////////////////////

export function getRelatedProducts() {
  const product = arguments[0];
  axios
    .get(`/products/${product}/related`)
    .then((results) => {
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
  // console.log('argument at getrelatedDetail', arguments);
  for (var i = 0; i < product.length; i++) {
    var allDetails = [];
    axios
      .get(`/products/${product[i]}`)
      .then((results) => {
        // console.log('results at getrelateddetail', results);
        allDetails.push(results);
        this.setState({
          relatedProductDetail: allDetails,
        });
      })
      .catch((err) => {
        console.log("error in axios.js getRelatedProducts req", err);
      });
  }
}

export function getRelatedImage() {
  const product = arguments[0];
  // console.log('product at getimage', arguments);
  for (var i = 0; i < product.length; i++) {
    var imageUrl = [];
    axios
      .get(`/products/${product[i]}/styles`)
      .then((results) => {
        // console.log('product at related image', results.data.product_id);
        // console.log('product at related image', results.data);
        var imageObj = [
          {
            product_id: "",
            imageUrl: "",
          },
        ];
        var key = product[i];
        var value = results.data.product_id;
        imageObj.product_id = results.data.product_id;
        imageObj.picUrl = results.data.results[0].photos[0].thumbnail_url;
        // console.log(imageObj);
        imageUrl.push(results.data.results[0].photos[0].thumbnail_url);
        this.setState({
          relatedProductImage: imageUrl,
          relatedImage: imageObj,
        });
      })
      .catch((err) => {
        console.log("error in axios.js getRelatedImage req", err);
      });
  }
}

//--------------------------------------Q&A------------------------------

/**
 * getQuestionsAndAnswers takes a product id as an argument
 * and populates QuestionList with questions related to product id ||
 * there is no explicit return value
 * || 'this' within this function references the QuestionList component
 * @param {*} id getQuestionsAndAnswers -> takes product id -> sets QuestionList component state
 *
 */
export function getQuestionsAndAnswers(id) {
  axios
    .get(`/qa/questions/?product_id=${id}&count=100`)
    .then((response) => {
      const { results } = response.data;

      this.setState(
        {
          questions: results,
        },
        () => {
          this.populateQuestions();
        }
      );
    })
    .catch((err) => {
      console.log("error in get questions");
    });
}

export function postAnswer(obj) {
  return axios.post(`/qa/questions/${obj.question_id}/answers`, obj);
}

export function postQuestion(obj) {
  return axios.post(`/qa/questions`, obj);
}

export function markQuestionHelpful(id) {
  return axios.put(`/qa/questions/${id}/helpful`);
}

export function reportQuestion(id) {
  return axios.put(`/qa/questions/${id}/report`);
}

export function markAnswerHelpful(id) {
  return axios.put(`/qa/answers/${id}/helpful`);
}

export function reportAnswer(id) {
  return axios.put(`/qa/answers/${id}/report`);
}

//--------------------------------------Q&A------------------------------

//--------------------------------------Reviews------------------------------
export function getMetaData() {
  return axios.get(`/reviews/meta/?product_id=66643`);
}

export function postReview(obj) {
  return axios.post(`/reviews`, obj);
}

export function getSortNewest(obj) {
  return axios.get(`/reviews?count=50&sort=newest&product_id=66643`, obj);
}
export function getSortHelpful(obj) {
  return axios.get(`/reviews?count=50&sort=helpful&product_id=66643`, obj);
}
export function getSortRelevant(obj) {
  return axios.get(`/reviews?count=50&sort=relevant&product_id=66643`, obj);
}
//--------------------------------------Reviews------------------------------

//--------------------------------------Interations------------------------------
export function postInteraction(e, widget) {
  const obj = {
    element: e.target.outerHTML,
    widget: widget,
    time: `${new Date()}`,
  };
  console.log(obj);
  axios
    .post(`/interactions`, obj)
    .then((res) => {
      console.log("posted interaction");
    })
    .catch((err) => {
      console.log("error posting interaction");
    });
}
//--------------------------------------Interations------------------------------

export default axios;
