import React, { Component } from 'react';
import Modal from './Modal';
import './Modal.css';

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
      <div className="App">
        <header className="App-header">
          <h1>Модальне вікно на класах</h1>
          <button onClick={this.openModal}>Відкрити модалку</button>
          <Modal show={this.state.showModal} onClose={this.closeModal}>
            <h2>Це модальне вікно</h2>
            <p>Ви можете закрити його кнопкою або клавішею Escape.</p>
          </Modal>
        </header>
      </div>
    );
  }
}

export default App; 