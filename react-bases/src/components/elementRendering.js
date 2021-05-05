import React, { Component } from "react";
import data from "../helpers/data.json";

function ListItem(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noreferrer">
        {props.el.name}
      </a>
    </li>
  );
}

export default class ElementRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Spring", "Summer", "Autumn", "Winter"],
    };
  }
  render() {
    return (
      <div>
        <h2>Element Rendering</h2>
        <h3>Seasons of the year:</h3>
        <ol>
          {this.state.seasons.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend Javascript</h3>
        <ul>
          {data.frameworks.map((el, i) => (
            <ListItem key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
