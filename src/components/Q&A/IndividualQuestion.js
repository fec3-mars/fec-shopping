import React from 'react';

class IndividualQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  formatAnswers(answers) {
    //default only two answers show
    //answers ordered by Seller FIRST ALWAYS
    //then subsquently sorted by 'helpfulness'
    const answerArr = [];

    for (let prop in answers) {
      answerArr.push(answers[prop]);
    };
    console.log(answerArr.sort((a, b) => {
      if (a.answerer_name !== 'Seller' && b.answerer_name === 'Seller') {
        return -1;
      }
      if (a.answerer_name === 'Seller' && b.answerer_name !== 'Seller') {
        return 1;
      }
      return 0;
    }))
  }


  render() {
    const {
      answers,
      asker_name,
      question_body,
      question_date,
      question_helpfulness,
      question_id,
      reported,
    } = this.props.question;

    this.formatAnswers(answers);


    return(
      <div className="individual-question">
        <h6>Q: {question_body}</h6>
        <h6>A:</h6>
      </div>

    )
  }
};

export default IndividualQuestion;

/*
answerer_name: "dschulman"
body: "It runs small"
date: "2019-11-17T00:00:00.000Z"
helpfulness: 1
id: 5448523
photos: (2) ['https://images.unsplash.com/photo-14701168
*/