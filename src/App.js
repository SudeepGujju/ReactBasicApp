import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NodeList from "./List/NoteList";
import Counters from "./counters/Counters";

class App extends Component {
  style = {
    float: "left"
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <NodeList style={this.style} />
        <Counters style={this.style} />
      </div>
    );
  }
}

export default App;
