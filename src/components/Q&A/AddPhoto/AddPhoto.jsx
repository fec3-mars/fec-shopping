import React from 'react';
import Modal from '../Modal/Modal.jsx';

class AddPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal = () => {
    this.setState({ show: false });
  };

  showModal = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div className="add-a-photo">
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="add-an-answer">
            <h3>Add Photos</h3>
          </div>
        </Modal>

        <button type="button" onClick={this.showModal}>
          Add Photos
        </button>
      </div>
    );
  }
}

export default AddPhoto;
