import React from 'react';
import ImageModal from '../ImageModal/ImageModal.jsx';
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

  onImageError( {currentTarget} ) {
    currentTarget.onerror = null;
    currentTarget.src = 'https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg';
  }

  render() {
    return (
      <div className="add-a-photo">
        <ImageModal show={this.state.show} handleClose={this.hideModal}>
          <img
            src={this.props.photo}
            alt=""
            className="full-photo"
            onError={this.onImageError}
          />
        </ImageModal>

        <li className="thumbnails">
          <button className="photo-button" type="button" onClick={this.showModal}>
            <img
              src={this.props.photo}
              className="thumbnail"
              onError = {this.onImageError}
            />
          </button>
        </li>
      </div>
    );
  }
}

export default IndividualPhoto;
