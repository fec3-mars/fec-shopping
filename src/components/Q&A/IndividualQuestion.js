import React from 'react';
import IndividualAnswer from "./IndividualAnswer";

class IndividualQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: [],
      expanded: false,
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
    const answers = arr.map((answer, idx) => {
      return <IndividualAnswer answer={answer} key={idx} />
    });

    this.setState({
      answers: [...answers],
    });
  }

  componentDidMount() {
    const {answers} = this.props.question;
    this.formatAnswers(answers);
  }

  changeExpanded() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    const {
      asker_name,
      question_body,
      question_date,
      question_helpfulness,
      question_id,
      reported,
    } = this.props.question;

    if (this.state.answers.length === 0) {
      return(
        <div className="individual-question">
          <h3>Q: {question_body}</h3>
          <h3>No answers, yet</h3>
        </div>
      )
    }

    if (!this.state.expanded) {
      return(
        <div className="individual-question">
          <h3>Q: {question_body}</h3>
          <h3>A: </h3>
          {this.state.answers.slice(0, 2)}
          <button onClick={this.changeExpanded.bind(this)}>See more answers</button>
        </div>
      )
    }

    return (
      <div className="individual-question">
          <h3>Q: {question_body}</h3>
          <h3>A: </h3>
          {this.state.answers}
          <button onClick={this.changeExpanded.bind(this)}>Collapse answers</button>
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