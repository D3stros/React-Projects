import React, { Component } from 'react';
import './App.css';
import Person from "./Person/person";

class App extends Component {
  render() {
     return (
     <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>This is a paragraph.</p>
      <Person />
     </div>
      );
    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work?"));
  }
}

export default App;
