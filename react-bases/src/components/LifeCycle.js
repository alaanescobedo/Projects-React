import React, { Component } from "react";

class Clock extends Component {
  //°Fase de desmontaje
  componentWillUnmount() {
    // console.log(3, "The component has been removed from the DOM");
  }

  render() {
    return <h3>{this.props.hour}</h3>;
  }
}

//ES6 Version (with contructor)
export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    //°Fase de inicio
    // console.log(0, "The component is initialized, NOT in the DOM yet");

    this.state = {
      hour: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.timer = null;
  }

  //°Fase de montaje
  componentDidMount() {
    // console.log(1, "The component is already in the DOM");
  }

  //°Fase de actualizacion
  componentDidUpdate(prevProps, prevState) {
    // console.log(2, "The state or props have changed");
    // console.log(prevProps);
    // console.log(prevState);
  }
  //   //°Fase de desmontaje
  //   componentWillUnmount() {
  //     console.log(3, "The component has been removed from the DOM");
  //   }

  runTime = () => {
    this.timer = setInterval(() => this.setState({ hour: new Date().toLocaleTimeString() }), 1000);
  };

  start = () => {
    this.runTime();
    this.setState({ visible: true });
  };

  stop = () => {
    clearInterval(this.timer);
    this.setState({ visible: false });
  };

  render() {
    //°Fase de renderizado 0.5, 4
    // console.log(4, "The component is draw or redraw due to some change in the DOM");
    return (
      <>
        <h2>Life cycle of class components</h2>
        {this.state.visible && <Clock hour={this.state.hour} />}
        {/* <h3>{this.state.hour}</h3> */}
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </>
    );
  }
}
