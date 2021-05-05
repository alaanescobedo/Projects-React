import React from "react";
import Component from "./components/component.js";

import Properties from "./components/properties.js";
import State from "./components/state.js";
import ConditionalRendering from "./components/conditionalRendering.js";
import ElementRendering from "./components/elementRendering.js";
import { EventsES6, EventsES7, MoreAboutEvents } from "./components/Events.js";
import ComponentComunication from "./components/ComponentComunication.js";
import LifeCycle from "./components/LifeCycle.js";
import AjaxApis from "./components/AjaxApis.js";
import HooksCounter from "./components/HooksCounter.js";
import HooksScroll from "./components/HooksScroll.js";
import HooksClock from "./components/HooksClock.js";
import HooksAjax from "./components/HooksAjax.js";
import HooksCustom from "./components/HooksCustom.js";
import HookReferences from "./components/HookReference.js";
import Form from "./components/Forms.js";

import logo from "./logo.svg";
import "./App.css";
import Styles from "./components/Styles.js";
import StyledComponents from "./components/StyledComponents.js";

function App() {
  const auth = true;
  let name = "Alan";

  return (
    <>
      <div className="App">
        <header className="App-header">
          <section>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{name}</h1>
            <p>{auth ? "User is logged" : "User is not logged"}</p>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
          </section>
          <section>
            <Component msg="Hola, soy un componenten (En español)" />S
            <hr />
            <Properties
              string="This is a text string"
              number={19}
              boolean={false}
              array={[1, 2, 3]}
              object={{ name: "Alan", email: "alaan1132@gmail.com" }}
              function={(num) => num * num}
              reactElement={<i>This is a React Element</i>}
              reactComponent={<Component msg="I'm a component passed as property" />}
            />
            <hr />
            <State />
            <hr />
            <ConditionalRendering />
            <hr />
            <ElementRendering />
            <hr />
            <EventsES6 />
            <hr />
            <EventsES7 />
            <hr />
            <MoreAboutEvents />
            <hr />
            <ComponentComunication />
            <hr />
            <LifeCycle />
            <hr />
            <AjaxApis />
            <hr />
            <HooksCounter />
            <hr />
            <HooksScroll />
            <hr />
            <HooksClock />
            <hr />
            <HooksAjax />
            <hr />
            <HooksCustom />
            <hr />
            <HookReferences />
            <hr />
            <Form />
          </section>
          <hr />
          <Styles />
          <hr />
          <StyledComponents />
        </header>
      </div>
    </>
  );
}

export default App;
