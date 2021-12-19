import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    modelIsOpen: false,
  }

  showModel = () => this.setState({modelIsOpen: true});

  closeModel = () => this.setState({modelIsOpen: false});


  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal show={this.state.modelIsOpen} closed={this.closeModel}/>
        <Backdrop />
        <button className="Button" onClick={this.showModel}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
