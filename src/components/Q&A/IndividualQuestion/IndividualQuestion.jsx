import React from 'react';
import IndividualAnswer from '../IndividualAnswer/IndividualAnswer';
import './IndividualQuestion.scss';
import Modal from '../Modal/Modal.jsx';
import AddPhoto from '../AddPhoto/AddPhoto.jsx';
import { postAnswer, markQuestionHelpful, reportQuestion } from '../../axios';

class IndividualQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: [],
      photos: [],
      questionBody: '',
      expanded: false,
      helpful: false,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    const { answers, question_body, question_id } = this.props.question;

    this.formatAnswers(answers);

    this.setState({
      question_body,
    }, () => this.props.reloadPage());
  }

  componentDidUpdate(prevProps, prevState) {
    const { answers, question_body } = this.props.question;
    const { searchTerm } = this.props;
    const { photos } = this.state;

    if (answers !== prevProps.question.answers) {
      this.formatAnswers(answers);
    }

    if (searchTerm.length >= 3 && searchTerm !== prevProps.searchTerm) {
      const body = this.props.highlight(question_body);

      this.setState({
        questionBody: body,
      });
    }

    if (photos.length !== prevState.photos.length && photos.length === 5) {
      alert('Photos added successfully');
    }
  }

  handleSubmit() {
    const {
      question_id,
    } = this.props.question;

    const { photos } = this.state;

    const postRequest = {
      question_id,
      body: this.bodyNode.value,
      name: this.nameNode.value,
      email: this.emailNode.value,
      photos,
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
      });
  }

  hideModal = () => {
    this.setState({
      show: false,
      photos: [],
    });
  };

  showModal = () => {
    this.setState({ show: true });
  };

  questionReport() {
    const {question_id} = this.props.question;

    reportQuestion(question_id)
      .then(() => {
        console.log('success reporting question');
      })
      .then(() => {
        this.props.reloadPage();
      })
      .catch((err) => {
        console.log('err in reporting a question', err);
      });
  }

  questionHelpful() {
    const { question_id } = this.props.question;

    this.setState({
      helpful: true,
    });

    markQuestionHelpful(question_id)
      .then(() => {
        console.log('success marking question helpful');
      })
      .then(() => {
        this.props.reloadPage();
      })
      .catch((err) => {
        console.log('err in mark question helpful', err);
      });
  }

  changeAddAnswer() {
    this.handleSubmit();
    this.hideModal();
  }

  changeExpanded() {
    this.setState({
      expanded: !this.state.expanded,
    }, () => this.props.reloadPage);
  }

  buildAnswers(arr) {
    const answers = arr.map((answer, idx) =>
      <IndividualAnswer answer={answer} idx={idx} key={idx} reloadPage={ this.props.reloadPage }/>
    );

    this.setState({
      answers: [...answers],
    });
  }

  formatAnswers(answers) {
    const answerArr = [];

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
      }
      if (a.helpfulness < b.helpfulness) {
        return 1;
      }
      return 0;
    });

    this.buildAnswers(answerArr);
  }

  addPhotos(newPhotos) {
    this.setState({
      photos: [...newPhotos],
    });
  }

  render() {
    const {
      question_helpfulness,
      question_body,
    } = this.props.question;

    const {
      searchTerm,
    } = this.props;

    const {
      answers,
      expanded,
      questionBody,
      photos,
      helpful,
    } = this.state;


    //---------------------------------------------------------------------------------------------
    let answersText = answers;
    let expandButton = <button type="button" className="load-questions-button" onClick={this.changeExpanded.bind(this)}> Collapse answers </button>;
    let answerStyle = {};

    answerStyle = {
      overflowY: 'scroll',
      height: '315px',
    };

    if (!expanded) {
      answersText = answers.length === 2 ? answers : answers.slice(0, 2);
      expandButton = answers.length === 2 ? '' : <button className="load-questions-button" type="button" onClick={this.changeExpanded.bind(this)}> Load more answers </button>;
      answerStyle = {};
    }

    if (answers.length === 0) {
      answersText = <h3 className="no-answer-body"> No answers, yet </h3>;
      expandButton = null;
      answerStyle = {};
    }

    if (answers.length === 1) {
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

    let addPhotoButton = <AddPhoto addPhotos={this.addPhotos.bind(this) }/>;
    if (photos.length === 5) {
      addPhotoButton = null;
    }

    let helpfulButton = (
      <button type="button" className="question-helpful-button" onClick={this.questionHelpful.bind(this)}>
        Helpful?
        Yes (
        { question_helpfulness }
        )
      </button>
    );

    if (helpful) {
      helpfulButton = (
        <button type="button" className="question-helpful-button-clicked">
          <b>
            Helpful?
            Yes (
            { question_helpfulness }
            )
          </b>
        </button>
      );
    }

    //------------------------------------------------------------------------------------------
    return (
      <div className="individual-question">
        <h3 className="question-header">
          { 'Q: ' }
          {body}
        </h3>
        <div className="question-helpful">
          {helpfulButton}
        </div>
        <button className="question-add-answer-button" type="button" onClick={this.showModal}>
          Add an answer
        </button>
        <button type="button" className="question-report-button" onClick={this.questionReport.bind(this)}>Report this Question</button>
        <div className="answer" style={answerStyle}>
          {answersText}
        </div>
        {expandButton}

        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="add-an-answer">
            <h3>Submit your answer</h3>

            <h4>*Your answer</h4>
            <textarea ref={node => (this.bodyNode = node)} name="textarea" style={{ width: '250px', height: '150px' }} />

            <h4>*What is your nickname?</h4>
            <input ref={node => (this.nameNode = node)} placeholder="Example: jack545!" />
            <p><i>for privacy reasons do not use your full name or address</i></p>

            <h4>*Your email</h4>
            <input ref={node => (this.emailNode = node)} placeholder="Example: jack@email.com" style={{ width: '250px' }} />
            <p><i>for authentication reasons, you will not be emailed</i></p>
            {addPhotoButton}
            <button type="button" onClick={this.changeAddAnswer.bind(this)}> Submit Answer </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default IndividualQuestion;
