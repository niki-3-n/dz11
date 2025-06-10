import React, { Component } from 'react';
import styled from 'styled-components';
import './Modal.css';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  min-width: 300px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

class Modal extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.show && !prevProps.show) {
      this.setState({ isOpen: true });
    } else if (!this.props.show && prevProps.show) {
      this.setState({ isOpen: false });
    }
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.props.onClose();
  };

  handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.closeModal();
    }
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <ModalBackdrop onClick={this.closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {this.props.children}
          <button onClick={this.closeModal}>Close</button>
        </ModalContent>
      </ModalBackdrop>
    );
  }
}

export default Modal; 