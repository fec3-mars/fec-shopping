import React from 'react';
import IndividualQuestion from './IndividualQuestion';
import AddQuestion from './AddQuestion';
import AddAnswer from './AddAnswer';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  createAllQuestions() {
    allQuestions = this.state.questions.map((question) => {
      <IndividualQuestion question={question}/>
    });
  }

  populateQuestions() {
    if (this.state.questions) {
      return this.createAllQuestions();
    }
  }

  render() {
    return (
      <div className='questionList'>
        <h5>{'Questions & Answers'}</h5>
        <input type="text" placeholder="Have a question? Search for answers..."></input>
        <button type="button">Add a Question </button>
      </div>
    )
  }
}

export default QuestionList;