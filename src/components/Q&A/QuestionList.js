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
      filteredQuestions: [],
      allQuestions: [],
      addQuestion: false,
      searchTerm: "",
    };
  }

  createAllQuestions() {
    const {
      questions,
      filteredQuestions,
    } = this.state;

    const collection = filteredQuestions.length === 0 ? questions : filteredQuestions;

    const allQuestions = collection.map((question, idx) => {
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

  changeAddQuestion() {
    this.setState({
      addQuestion: !this.state.addQuestion,
    })
  }

  handleSearch(e) {
    const searchTerm = e.target.value;

    if (searchTerm.length >= 3) {
      this.setState({
        searchTerm: searchTerm,
      })
      return this.filterQuestions();
    }

    this.setState({
      searchTerm: '',
    })
    this.filterQuestions();
  }

  filterQuestions() {
    const {
      questions,
      searchTerm,
    } = this.state;

    const filtered = questions.filter((question) => {
      let regex = new RegExp(searchTerm, 'i');
      return question.question_body.search(regex) !== -1;
    })


    this.setState({
      filteredQuestions: [...filtered],
    }, function() {
      this.createAllQuestions();
    })
  }

  render() {
    const {
      curProduct,
      questions,
      allQuestions,
      addQuestion,
    } = this.state;


    const {
      name
    } = curProduct;

    if (!addQuestion) {
      return (
        <div className="questionList">
          <h2>{"Questions & Answers"}</h2>
          <input
            type="text"
            placeholder="Have a question? Search for answers..."
            onChange={this.handleSearch.bind(this)}
          ></input>
          {allQuestions}
          <button onClick={this.changeAddQuestion.bind(this)}type="button">Add a Question </button>
        </div>
      );
    }

    return (
      <div className="add-a-question">
          <h3>Ask your question</h3>
          <h3><i>About the {name}</i></h3>

          <h4>*Your Question</h4>
          <textarea name="textarea" style={{'width':'250px', 'height':'150px'}}></textarea>

          <h4>*What is your nickname?</h4>
          <input placeholder="Example jackson11!"></input>
          <p><i>for privacy reasons do not use your full name or address</i></p>

          <h4>*Your email</h4>
          <input placeholder="Why did you like the product or not?" style={{'width':'250px'}}></input>
          <p><i>for authentication reasons, you will not be emailed</i></p>
          <button onClick={this.changeAddQuestion.bind(this)}> Submit Answer </button>
        </div>
    )


  }
}

export default QuestionList;
