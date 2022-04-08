import React from "react";
import IndividualQuestion from "../IndividualQuestion/IndividualQuestion";
import AddQuestion from "../AddQuestion/AddQuestion";
import AddAnswer from "../AddAnswer/AddAnswer";
import Modal from '../Modal/Modal.js';
import { getQuestionsAndAnswers, postQuestion } from "../../axios";

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curProduct: {},
      questions: [],
      filteredQuestions: [],
      allQuestions: [],
      addQuestion: false,
      searchTerm: '',
      show: false,
      showAllQ: false,
    };
    // this.showModal = this.showModal.bind(this);
    // this.hideModal = this.hideModal.bind(this);
  }


  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  retrieveData() {
    const { id } = this.state.curProduct;
    getQuestionsAndAnswers.call(this, id);
  }

  highlighter(text) {
    const {searchTerm} = this.state;

    const regex = new RegExp(searchTerm, 'i');

    let regIdx = text.search(regex);

    let beginningOfStr = text.slice(0, regIdx);
    let highlight = text.slice(regIdx, regIdx + searchTerm.length);
    let endOfStr = text.slice(regIdx + searchTerm.length, text.length)
    let arr = [beginningOfStr, React.createElement('span', {className: 'highlight'}, highlight), endOfStr]

    return <div>{arr}</div>;
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
    if (this.state.addQuestion) {
      this.handleSubmit();
    }

    this.setState({
      addQuestion: !this.state.addQuestion,
    })
  }

  handleSubmit() {
    const {
      curProduct,
    } = this.state;

    const {id} = curProduct;
    console.log('id', id);
    const postRequest = {
      body: this.bodyNode.value,
      name: this.nameNode.value,
      email: this.emailNode.value,
      product_id: id,
    }
    postQuestion(postRequest)
      .then((result) => {
        console.log('post question result', result);
      })
      .then(() => {
        this.retrieveData();
      })
      .catch((err) => {
        console.log('error in post question', err);
      })

  }

  handleSearch(e) {
    const searchTerm = e.target.value;

    if (searchTerm.length >= 3) {
      this.setState({
        searchTerm: searchTerm,
      }, function() {
        return this.filterQuestions();
      })
      return;
    }

    this.setState({
      searchTerm: '',
    }, function() {
      this.filterQuestions();
    });
  }

  populateQuestions() {
    if (this.state.questions) {
      return this.createAllQuestions();
    }
  }

  createAllQuestions() {
    const {
      questions,
      filteredQuestions,
      searchTerm,
    } = this.state;

    const collection = filteredQuestions.length === 0 && searchTerm.length === 0? questions : filteredQuestions;

    collection.sort((a, b) => {
      if (a.question_helpfulness > b.question_helpfulness) {
        return -1;
      }

      if (a.question_helpfulness < b.question_helpfulness) {
        return 1;
      }

      return 0;
    });

    const allQuestions = collection.map((question, idx) => {
      return <IndividualQuestion question={question} key={idx} highlight={this.highlighter.bind(this)} searchTerm={this.state.searchTerm} reloadPage={this.retrieveData.bind(this)}/>;
    });

    this.setState({
      allQuestions: [...allQuestions],
    });
  }

  filterQuestions() {
    const {
      questions,
      searchTerm,
    } = this.state;

    const filtered = questions.filter((question) => {
      const {
        question_body,
      } = question;

      let regex = new RegExp(searchTerm, 'i');
      return question_body.search(regex) !== -1;
    });


    this.setState({
      filteredQuestions: [...filtered],
    }, function() {
      this.createAllQuestions();
    });
  }

  revealAllQuestions() {
    this.setState({
      showAllQ: !this.state.showAllQ,
    });
  }

  render() {
    const {
      curProduct,
      questions,
      allQuestions,
      addQuestion,
      showAllQ,
    } = this.state;

    const {
      name,
    } = curProduct;

    let displayQuestions = allQuestions.slice(0, 4);
    let answerButtonText = 'More Answered Questions';
    if (showAllQ) {
      displayQuestions = allQuestions;
      answerButtonText = 'Less Answered Questions';
    }

//---------------------------------------------------------------------------------------------------------------------------------------------------

    //default display
    if (!addQuestion) {
      return (
        <div className="questionList">
          <h2>{"Questions & Answers"}</h2>
          <input
            type="text"
            placeholder="Have a question? Search for answers..."
            onChange={this.handleSearch.bind(this)}
          ></input>
          {displayQuestions}

          {/* <Modal show={this.state.show} handleClose={this.hideModal}>
            <p>worked</p>

          </Modal> */}
          <button onClick={this.revealAllQuestions.bind(this)} type="button">{answerButtonText} </button>
          <button onClick={this.changeAddQuestion.bind(this)} type="button">Add a Question </button>
        </div>
      );
    }

    //add question display
    return (
      <div className="add-a-question">
          <h3>Ask your question</h3>
          <h3><i>About the {name}</i></h3>

          <h4>*Your Question</h4>
          <textarea ref={node => (this.bodyNode = node)} name="textarea" style={{'width':'250px', 'height':'150px'}}></textarea>

          <h4>*What is your nickname?</h4>
          <input ref={node => (this.nameNode = node)} placeholder="Example jackson11!"></input>
          <p><i>for privacy reasons do not use your full name or address</i></p>

          <h4>*Your email</h4>
          <input ref={node => (this.emailNode = node)} placeholder="Why did you like the product or not?" style={{'width':'250px'}}></input>
          <p><i>for authentication reasons, you will not be emailed</i></p>
          <button onClick={this.changeAddQuestion.bind(this)}> Submit Question </button>
        </div>
    )
  }
}

export default QuestionList;
