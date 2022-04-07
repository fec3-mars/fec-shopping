import React from 'react';
import IndividualAnswer from "../IndividualAnswer/IndividualAnswer";
import "./IndividualQuestion.css";
import { postAnswer, markQuestionHelpful, reportQuestion } from "../../axios";

class IndividualQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: [],
      questionBody: '',
      expanded: false,
      addAnswer: false,
      qReported: false,
    };
  }

  formatAnswers(answers) {
    //default only two answers show
    //answers ordered by Seller FIRST ALWAYS
    //then subsquently sorted by 'helpfulness'
    let answerArr = [];

    for (let prop in answers) {
      let currentAnswer = answers[prop];

      if (currentAnswer.answerer_name === 'Seller') {
        answerArr.unshift(currentAnswer);
        continue;
      }
      answerArr.push(currentAnswer);
    };

    answerArr.sort((a, b) => {
      if (a.answerer_name === 'Seller' || b.answerer_name === 'Seller') {
        return 0;
      }
      if (a.helpfulness > b.helpfulness) {
        return -1;
      } else if (a.helpfulness < b.helpfulness) {
        return 1;
      }
      return 0;
    })

    this.buildAnswers(answerArr);
  }

  buildAnswers(arr) {
    const {
      question_id,
    } = this.props.question;


    const answers = arr.map((answer, idx) => {
      return <IndividualAnswer answer={answer} key={idx} reloadPage={ this.props.reloadPage}/>
    });

    this.setState({
      answers: [...answers],
    });
  }

  componentDidMount() {
    const {answers, question_body} = this.props.question;
    this.formatAnswers(answers);

    this.setState({
      question_body: question_body,
    })
  }

  componentDidUpdate(prevProps) {
    const {answers, question_body} = this.props.question;
    const {searchTerm} = this.props;

    if (answers !== prevProps.question.answers) {
      this.formatAnswers(answers);
    }

    if (searchTerm.length >= 3 && searchTerm !== prevProps.searchTerm) {
      const body = this.props.highlight(question_body);

      this.setState({
        questionBody: body,
      })
    }
  }

  changeExpanded() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  changeAddAnswer() {
    //TODO
    //does not actually submit answer yet
    if (this.state.addAnswer) {
      this.handleSubmit();
    }


    this.setState({
      addAnswer: !this.state.addAnswer,
    });
  }

  handleSubmit() {
    const {
      question_id,
    } = this.props.question;

    const postRequest = {
      question_id,
      body: this.bodyNode.value,
      name: this.nameNode.value,
      email: this.emailNode.value,
      photos: [],
    };
    postAnswer(postRequest)
      .then((response) => {
        console.log('in post answer', response);
      })
      .then(() => {
        this.props.reloadPage();
      })
      .catch((err) => {
        console.log('error in post answer', err);
      })
  }

  questionHelpful() {
    const {question_id} = this.props.question;

    markQuestionHelpful(question_id)
      .then((result) => {
        console.log('success marking question helpful');
      })
      .then(() => {
        this.props.reloadPage();
      })
      .catch((err) => {
        console.log('err in mark question helpful', err);
      })
  }

  questionReport() {
    const {question_id} = this.props.question;

    reportQuestion(question_id)
      .then((result) => {
        console.log('success reporting question');
      })
      .then(() => {
        this.props.reloadPage();
      })
      .catch((err) => {
        console.log('err in reporting a question', err);
      })
  }

  render() {
    const {
      asker_name,
      question_date,
      question_helpfulness,
      question_id,
      reported,
      question_body,
    } = this.props.question;

    const {
      searchTerm,
    } = this.props;

    const {
      answers,
      expanded,
      addAnswer,
      questionBody,
      qReported,
    } = this.state;
    //---------------------------------------------------------------------------------------------
    let answersText = answers; //default is all answer html elements
    let expandButton = <button onClick={this.changeExpanded.bind(this)}> Collapse answers </button>;
    let answerStyle = {};

    answerStyle = {
      overflowY: 'scroll',
      height: '315px',
    }

    if (!expanded) { //default, state starts as false
      answersText = answers.slice(0, 2) //if 'Expanded' answers not hit, show only two
      expandButton = <button onClick={this.changeExpanded.bind(this)}> See more answers </button>
      answerStyle = {
        height: '315px',
      };
    }

    if (answers.length === 0 || answers.length === 1) {
      answersText = <h3> No answers, yet </h3>; //if no answers present yet, show 'No answers, yet
      expandButton = null;
      answerStyle = {};
    }

    let body = question_body;
    if (questionBody !== '') {
      body = questionBody;
    }

    if (searchTerm.length < 3) {
      body = question_body;
    }


    //------------------------------------------------------------------------------------------
      //default display
      if (!addAnswer) {
        return (<div className='individual-question'>

          <h3>Q: {body}</h3>
          <div className="answer" style={answerStyle}>
            <h3>A: </h3>

            {answersText}
          </div>
          <button className='helpful' onClick={this.questionHelpful.bind(this)}>Mark Question Helpful </button>
          <p>Yes({question_helpfulness})</p>
          <button className='helpful' onClick={this.questionReport.bind(this)}>Report this Question</button>
          {expandButton}

          <button onClick={this.changeAddAnswer.bind(this)}> Add an Answer </button>
        </div>)
      }

      //add answer form
      return (
        <div className="add-an-answer">
          <h3>Submit your answer</h3>

          <h4>*Your answer</h4>
          <textarea  ref={node => (this.bodyNode = node)} name="textarea" style={{'width':'250px', 'height':'150px'}} ></textarea>

          <h4>*What is your nickname?</h4>
          <input  ref={node => (this.nameNode = node)} placeholder="Example: jack545!"></input>
          <p><i>for privacy reasons do not use your full name or address</i></p>

          <h4>*Your email</h4>
          <input  ref={node => (this.emailNode = node)} placeholder="Example: jack@email.com" style={{'width':'250px'}}></input>
          <p><i>for authentication reasons, you will not be emailed</i></p>
          <button> Add Photos </button>
          <button onClick={this.changeAddAnswer.bind(this)}> Submit Answer </button>
        </div>
    )
  }
};

export default IndividualQuestion;
/*
<div>
  <h3>A:</h3>
  <p> </p>
</div>

*/

/*
answerer_name: "dschulman"
body: "It runs small"
date: "2019-11-17T00:00:00.000Z"
helpfulness: 1
id: 5448523
photos: (2) ['https://images.unsplash.com/photo-14701168
*/