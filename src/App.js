import React, { Component } from 'react';
import Modal from './Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <h1>Модальне вікно на класах</h1>
        <button onClick={this.openModal}>Відкрити модалку</button>
        <Modal show={this.state.showModal} onClose={this.closeModal}>
          <h2>Це модальне вікно</h2>
          <p>Ви можете закрити його кнопкою або клавішею Escape.</p>
        </Modal>
      </div>
    );
  }
}

export default App; 