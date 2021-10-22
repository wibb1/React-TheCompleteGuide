import { Component } from "react";

// ErrorBoundaries require use of class based components - they wil not work with functional components

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { error: false, errorText: '' };
  }
  componentDidCatch(error) {
    this.setState({ error: true, errorText: error.toString()});
  } // this catches the error generated in the Users.js file

  render() {
    // this could render a modal with the list of error on a form
    if (this.state.error) {
      return <p>{this.state.errorText}</p>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
