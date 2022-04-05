import React from 'react';

class IndividualAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      helpful: false,
      report: false,
    };
  }

  change(e) {
    const target = e.target.className;
    if (this.state[`${target}`]) {
      alert('Already voted');
    }


    let obj = {};
    obj[`${target}`] = true;
    this.setState(obj);
  }


  render() {
    const {
      answerer_name,
      body,
      date,
      helpfulness,
      id,
      photos,
    } = this.props.answer;

    const {
      helpful,
      report,
    } = this.state;


    const formattedDate = new Date(date);

    let name = answerer_name;
    if (answerer_name === 'Seller') {
      name = <b>Seller</b>
    }

    let reportDisplay = <button className='report' onClick={this.change.bind(this)}>Report</button>;
    if (report) {
      //TODO
      //must make post request to ACTUALLY change report state
      //for now just visual
      reportDisplay = <button className='report' onClick={this.change.bind(this)}>Reported</button>
    }

    let helpfulnessScore = <p>Yes({helpfulness})</p>;
    if (helpful) {
      //TODO
      //must make post request to ACTUALLY change helpfulness score
      //for now just visual
      helpfulnessScore = <p>Yes({helpfulness + 1})</p>;
    }

    return(
      <div className='answers'>
        <p className='answer-body'>{body}</p>
        <p>by {name}, {formattedDate.toDateString()}</p>
        <button className='helpful' onClick={this.change.bind(this)}>Helpful? </button>
        {helpfulnessScore}
        {reportDisplay}
      </div>
    )
  }
}

/*
answerer_name: "dschulman"
body: "It runs small"
date: "2019-11-17T00:00:00.000Z"
helpfulness: 1
id: 5448523
photos: (2) ['https://images.unsplash.com/photo-14701168
*/

export default IndividualAnswer;