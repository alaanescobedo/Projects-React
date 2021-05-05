import React, { Component } from "react";

export default class Father extends Component {
  state = {
    count: 0,
  };
  incrementCounter = (e) => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <>
        <h2>Comunication Beetween Components</h2>
        <p>
          Counter <b>{this.state.count}</b>
        </p>
        <Child incrementCounter={this.incrementCounter} msg="Message for son 1" />
        <Child incrementCounter={this.incrementCounter} msg="Message for son 2" />
      </>
    );
  }
}

function Child(props) {
  return (
    <>
      <h3>{props.msg}</h3>
      <button onClick={props.incrementCounter}>+</button>
    </>
  );
}
