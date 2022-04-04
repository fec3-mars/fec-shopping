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


/**
 * getQuestionsAndAnswers takes a product id as an argument
 * and populates QuestionList with questions related to product id ||
 * there is no explicit return value
 * || 'this' within this function references the QuestionList component
 * @param {*} id getQuestionsAndAnswers -> takes product id -> sets QuestionList component state
 *
 */
export function getQuestionsAndAnswers(id) {
  axios.get(`/qa/questions/?product_id=${id}`)
      .then((response) => {
        const { results } = response.data;
        console.log('results', results)
        this.setState({
          questions: results
        }, () => {
          this.populateQuestions();
        });
      })
      .catch(err => {
        console.log('error in get for qa', err);
      });
}

export default axios;
