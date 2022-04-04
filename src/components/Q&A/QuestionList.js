import React from "react";
import IndividualQuestion from "./IndividualQuestion";
import AddQuestion from "./AddQuestion";
import AddAnswer from "./AddAnswer";

import { getQuestionsAndAnswers } from "../axios";


class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curProduct: {},
      questions: [],
      allQuestions: [],
    };
  }

  createAllQuestions() {
    const allQuestions = this.state.questions.map((question, idx) => {

      return <IndividualQuestion question={question} key={idx} />;
    });

    this.setState({
      allQuestions: [...allQuestions],
    });
  }

  populateQuestions() {
    if (this.state.questions) {
      return this.createAllQuestions();
    }
  }

  retrieveData() {
    const { id } = this.state.curProduct;
    getQuestionsAndAnswers.call(this, id);
  }


  componentDidUpdate(prevProps) {

    const curProduct = { ...this.props.curProduct };

    if (curProduct.data?.id !== prevProps.curProduct.data?.id) {
      this.setState({
        curProduct: { ...curProduct.data },
      }, function () {

        this.retrieveData();
      });
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
        {this.state.allQuestions}
        <button type="button">Add a Question </button>
      </div>
    );
  }
}

export default QuestionList;
