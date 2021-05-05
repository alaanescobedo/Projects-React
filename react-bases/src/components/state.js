import React, { Component } from "react";

function StateToChild(props) {
  return (
    <div>
      <h3>{props.counterChild}</h3>
    </div>
  );
}

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    //Provoca warning porque en el ciclo de vida al realizar el intervalo aun no se ha renderizado el componente
    // setInterval(() => {
    //   this.setState({ counter: this.state.counter + 1 });
    // }, 1000);
  }

  render() {
    return (
      <div>
        <h2>State</h2>
        <p>{this.state.counter}</p>
        <StateToChild counterChild={this.state.counter} />
      </div>
    );
  }
}
