import React from 'react';
import './IndividualAnswer.css';
import { markAnswerHelpful, reportAnswer } from '../../axios';

class IndividualAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      helpful: false,
      report: false,
    };
  }

  answerHelpful() {
    const {
      id
    } = this.props.answer;

    markAnswerHelpful(id)
      .then(() => {
        console.log('answer marked helpful success');
      })
      .then(() => {
        this.props.reloadPage();
      })
      .catch((err) => {
        console.log('error in mark answer helpful', err);
      });
  }

  answerReport() {
    const {
      id,
    } = this.props.answer;

    reportAnswer(id)
      .then(() => {
        console.log('answer reported successfully');
      })
      .then(() => {
        this.props.reloadPage();
      })
      .catch((err) => {
        console.log('error in reporting answer', err);
      });
  }

  render() {
    const {
      body,
      date,
      helpfulness,
      photos,
      answerer_name
    } = this.props.answer;

    //----------------------------------------------------------------------------------------------

    const formattedDate = new Date(date);

    let name = answerer_name;
    if (answerer_name === 'Seller') {
      name = <b>Seller</b>;
    }

    let photoGallery;
    if (photos) {
      photoGallery = photos.map((photo, idx) => <img alt="review" className="review-photos" src={photo} key={idx} />);
    }

    //------------------------------------------------------------

    return (
      <div className="answers" style={{ border: 'solid white' }}>
        <p className="answer-body">{body}</p>
        <p>
          by
          {name}
          ,
          {formattedDate.toDateString()}
        </p>
        <button type="button" className="helpful" onClick={this.answerHelpful.bind(this)}>Helpful? </button>
        <p>
          Yes
          (
          { helpfulness }
          )
        </p>
        <button type="button" className="report" onClick={this.answerReport.bind(this)}>Report</button>
        {photoGallery}
      </div>
    );
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
