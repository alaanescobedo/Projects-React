import React, { Component } from "react";

export class EventsES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.add = this.add.bind(this);
    this.subtraction = this.subtraction.bind(this);
  }

  add(e) {
    console.log("adding up");
    this.setState({ count: this.state.count + 1 });
  }

  subtraction(e) {
    console.log("subtracting");
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h2>Events in Class Components ES6</h2>
        <nav>
          <button onClick={this.add}>+</button>
          <button onClick={this.subtraction}>-</button>
        </nav>
        <h3>{this.state.count}</h3>
      </div>
    );
  }
}

export class EventsES7 extends Component {
  state = {
    count: 0,
  };

  add = (e) => this.setState({ count: this.state.count + 1 });

  subtraction = (e) => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <div>
        <h2>Events in Class Components ES7</h2>
        <nav>
          <button onClick={this.add}>+</button>
          <button onClick={this.subtraction}>-</button>
        </nav>
        <h3>{this.state.count}</h3>
      </div>
    );
  }
}

// function Button() {
//   return <button>Button made component</button>;
// }
// const Button = (props) => <button onClick={props.myOnClick}>Button made component</button>;
const Button = ({ myOnClick }) => <button onClick={myOnClick}>Button made component</button>;

export class MoreAboutEvents extends Component {
  addHandlerClick = (e, msg) => {
    //Evento Sintetico
    console.log(e);
    console.log(e.target);
    //Evento nativo
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    //Paso de parametros desde el manejador de eventos (e)=>{e,msg}
    console.log(msg);
  };

  render() {
    return (
      <div>
        <h3>More about events</h3>
        <button onClick={(e) => this.addHandlerClick(e, "Hola,pasando parametro desde un evento, o que ase ")}>
          Saludar
        </button>
        {/*Evento Personalizado*/}
        {/*<Button onClick={(e) => this.addHandlerClick(e, "No funciona asi")} />}*/}
        <Button myOnClick={(e) => this.addHandlerClick(e, "Hola,pasando parametro desde un evento, o que ase ")} />
      </div>
    );
  }
}
