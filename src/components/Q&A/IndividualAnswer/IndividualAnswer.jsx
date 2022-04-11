import React from 'react';
import './IndividualAnswer.scss';
import IndividualPhoto from '../IndividualPhoto/IndividualPhoto';
import { markAnswerHelpful, reportAnswer } from '../../axios';

class IndividualAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      helpful: false,
    };
  }

  answerHelpful() {
    const {
      id,
    } = this.props.answer;

    this.setState({
      helpful: true,
    });

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

    const {
      idx,
    } = this.props;

    const {
      helpful,
    } = this.state;

    //----------------------------------------------------------------------------------------------

    const formattedDate = new Date(date);

    let name = answerer_name;
    if (answerer_name === 'Seller') {
      name = <b>Seller</b>;
    }

    let photoGallery;
    if (photos) {
      photoGallery = photos.map((photo, idx) => <IndividualPhoto photo={photo} key={idx} />);
    }

    let header;
    if (idx === 0) {
      header = (
        <h3 className="answer-header">
          {'A: '}
        </h3>
      );
    }

    let helpfulButton = (
      <button type="button" className="answer-helpful" onClick={this.answerHelpful.bind(this)}>
        Helpful?
        Yes
        (
        { helpfulness }
        )
      </button>
    );

    if (helpful) {
      helpfulButton = (
        <button type="button" className="answer-helpful-clicked">
          <b>
            Helpful?
            Yes
            (
            { helpfulness }
            )
          </b>
        </button>
      );
    }

    //------------------------------------------------------------

    return (
      <div className="answer-block">
        <div className="answer-header">
          {header}
          <p className="answer-body">
            { body }
          </p>
        </div>
        <p className="answerer-text">
          by
          {` ${name}`}
          ,
          {formattedDate.toDateString()}
        </p>
        {helpfulButton}
        <button type="button" className="answer-report" onClick={this.answerReport.bind(this)}>Report</button>
        <ul className="thumbnails">
          {photoGallery}
        </ul>
      </div>
    );
  }
}

export default IndividualAnswer;
