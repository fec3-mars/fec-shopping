import React from 'react';

class IndividualQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curProduct: {},
      questions: [],
    };
  }


  render() {
    console.log('props in indQuestion', this.props);

    return(
      <div className="individual-question">
        <h6>Q: {this.props.question.question_body}</h6>
        <h6>A:</h6><p>{this.props.question.answers.body}</p>
      </div>

    )
  }
};

export default IndividualQuestion;