import React from 'react';
import Modal from '../Modal/Modal.jsx';
import './IndividualPhoto.scss';

class IndividualPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="add-a-photo">
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <img src={this.props.photo} alt="" className="full-photo" />
        </Modal>

        <li className="thumbnails">
          <button className="photo-button" type="button" onClick={this.showModal}>
            <img src={this.props.photo} className="thumbnail" />
          </button>
        </li>
      </div>
    );
  }
}

export default IndividualPhoto;
