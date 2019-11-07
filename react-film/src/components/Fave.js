import React, { Component } from "react";

class Fave extends Component {
  state = {
    // isFave: false,
    // onFaveToggle: false
  };

  handleClick = e => {
    e.stopPropagation();
    console.log("Handling Fave click!");
    // Add this line. You'll call the function passed through props.
    this.props.onFaveToggle();
    // Delete the `setState` line. You no longer track state here.
    // this.setState({isFave: !this.state.isFave});
  };

  render() {
    return (
      <div
        className={
          "film-row-fave " +
          (this.props.isFave ? "remove_from_queue" : "add_to_queue")
        }
        onClick={this.handleClick}
      >
        <p className="material-icons">add_to_queue</p>
      </div>
    );
  }
}

export default Fave;
