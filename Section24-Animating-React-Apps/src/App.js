import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: null,
    showBlock: false,
  };

  showModal = () => this.setState({ modalIsOpen: true });

  closeModal = () => this.setState({ modalIsOpen: false });

  toggleBlock = () => {
    this.setState((prevState) => ({ showBlock: !prevState.showBlock }));

    console.log(this.state.showBlock);
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={this.toggleBlock}>
          Toggle
        </button>
        <br />
        <Transition
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
          mountOnEnter
          unmountOnExit
          in={this.state.showBlock}
          timeout={300}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            >
              This is the block to show
            </div>
          )}
        </Transition>
        <Modal closed={this.closeModal} show={this.state.modalIsOpen} />

        {this.state.modalIsOpen ? (
          <Backdrop closed={this.closeModal} show={this.state.modalIsOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
