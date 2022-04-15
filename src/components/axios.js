/* eslint-disable */
export const axios = require("axios");

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
        ) / results.data.results.length;
      this.setState({
        totalReviews: results.data.count,
        curProductReview: results,
        avgRating: Math.round(avgRating * 100) / 100 || 0
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
  for (var i = 0; i < product.length; i++) {
    var imageUrl = [];
    var relatedPic = [];
    axios
      .get(`/products/${product[i]}/styles`)
      .then((results) => {
        var imageObj = {};
        var key = product[i];
        var value = results.data.product_id;
        imageObj.id = parseInt(results.data.product_id);
        imageObj.picUrl = results.data.results[0].photos[0].thumbnail_url;
        imageUrl.push(results.data.results[0].photos[0].thumbnail_url);
        relatedPic.push(imageObj);
        this.setState({
          relatedProductImage: imageUrl,
          relatedImage: relatedPic,
          allInfo: { ...this.props.curProduct.data, ...{ imageUrl: imageUrl } }
        });
      })
      .catch((err) => {
        console.log("error in axios.js getRelatedImage req", err);
      });
  }
}

export function getRatings(id) {
  return axios.get(`/reviews/?product_id=${id}`);
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
  return axios.get(`/reviews/meta/?product_id=66642`);
}

export function postReview(obj) {
  return axios.post(`/reviews`, obj);
}

export function getSortNewest(obj) {
  return axios.get(`/reviews?count=50&sort=newest&product_id=66642`, obj);
}
export function getSortHelpful(obj) {
  return axios.get(`/reviews?count=50&sort=helpful&product_id=66642`, obj);
}
export function getSortRelevant(obj) {
  return axios.get(`/reviews?count=50&sort=relevant&product_id=66642`, obj);
}
export function markReviewHelpful(reviewId) {
  return axios.put(`reviews/1176029/helpful`);
}
export function reportReview(id) {
  return axios.put(`/reviews/${id}/report`);
}
//--------------------------------------Reviews------------------------------

//--------------------------------------Interations------------------------------
export function postInteraction(e, widget) {
  const obj = {
    element: e.target.outerHTML,
    widget: widget,
    time: `${new Date()}`,
  };

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
