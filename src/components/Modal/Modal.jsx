import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalPhoto } from './Modal.styled';

const modalRoot = document.getElementById('modal');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = event => {
    if (event.code === 'Escape') this.props.closeModal();
  };

  handleClick = event => {
    if (event.currentTarget === event.target) this.props.closeModal();
  };

  render() {
    const { tags, modalImg } = this.props

    return createPortal(
      <Overlay onClick={this.handleClick}>
        <ModalPhoto>
          <img src={modalImg} alt={tags} />
        </ModalPhoto>
      </Overlay>,
      modalRoot
    );
  }
}
