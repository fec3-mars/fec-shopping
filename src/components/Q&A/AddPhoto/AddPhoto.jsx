import React from 'react';
import Modal from '../Modal/Modal.jsx';
import './AddPhoto.scss';


class AddPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      displayImages: [],
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      photos,
    } = this.state;

    let newPhotos = [];
    if (photos.length !== prevState.photos.length) {
      this.props.addPhotos(photos);

      newPhotos = photos.map((photo, idx) => <img key={idx} className="thumbnail" alt="Answer" src={photo} />);

      this.setState({
        displayImages: [...newPhotos],
      });
    }
  }

  onImageChange(e) {
    const files = [...e.target.files];

    if (files.length < 1) return;
    if (files.length > 5) {
      alert('No more than five photos please');
      e.target.value = null;
      this.setState({
        photos: [],
        displayImages: [],
      });

      return;
    }

    const images = [];
    files.forEach((file) => images.push(URL.createObjectURL(file)));

    this.setState({
      photos: [...images],
    });
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
          <div className="add-an-answer">
            <h3>Choose up to five photos</h3>
            <input id="fileInputId" type="file" multiple accept="image/*" onChange={this.onImageChange.bind(this)} />
            {this.state.displayImages}
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
