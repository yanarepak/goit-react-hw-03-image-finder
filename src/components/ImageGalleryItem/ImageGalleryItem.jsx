import { GalleryItem, PhotoGallery } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;

    return (
      <GalleryItem>
        <PhotoGallery
          src={webformatURL}
          alt={tags}
          width="500"
          height="210"
          loading="lazy"
          onClick={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal
            modalImg={largeImageURL}
            tags={tags}
            closeModal={this.toggleModal}
          />
        )}
      </GalleryItem>
    );
  }
}
