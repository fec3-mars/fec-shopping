import React from "react";
import IndividualQuestion from "./IndividualQuestion";
import AddQuestion from "./AddQuestion";
import AddAnswer from "./AddAnswer";
import axios from "../axios";

// '/qa/questions/?product_id=66642'
const dummyCurrProduct = {
  id: 66642,
  campus: "hr-rfc",
  category: "Jackets",
  created_at: "2022-03-31T21:13:15.875Z",
  default_price: "140.00",
  description:
    "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  name: "Camo Onesie",
  slogan: "Blend in to your crowd",
  updated_at: "2022-03-31T21:13:15.875Z",
};

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currProduct: {},
      questions: [],
    };
  }

  createAllQuestions() {
    const allQuestions = this.state.questions.map((question) => {
      <IndividualQuestion question={question} />;
    });
  }

  populateState() {
    this.setState(
      {
        currProduct: dummyCurrProduct,
      },
      () => {
        this.retrieveData();
      }
    );
  }

  populateQuestions() {
    if (this.state.questions) {
      return this.createAllQuestions();
    }
  }

  retrieveData() {
    const { id } = this.state.currProduct;

    axios
      .get(`/qa/questions/?product_id=${id}`)
      .then((response) => {
        const { results } = response.data;
        // console.log('results', results);

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
        console.log("error in get for qa", err);
      });
  }

  componentDidMount() {
    const currProduct = this.props.currProduct;

    if (!currProduct || Object.keys(currProduct).length === 0) {
      this.populateState();
    }
  }

  render() {
    return (
      <div className="questionList">
        <h5>{"Questions & Answers"}</h5>
        <input
          type="text"
          placeholder="Have a question? Search for answers..."
        ></input>
        <button type="button">Add a Question </button>
      </div>
    );
  }
}

export default QuestionList;
