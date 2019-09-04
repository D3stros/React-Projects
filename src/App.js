import React, { Component } from 'react';
import './App.css';
import Person from "./Person/person";

class App extends Component {
  render() {
     return (
     <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>This is a paragraph.</p>
      <Person name = "Dennis" age = "35" />
      <Person name = "Marvin" age = "27" />
      <Person name = "Rafael" age = "20">My interests are: Cinema, Sport</Person>
     </div>
      );
    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work?"));
  }
}

export default App;
