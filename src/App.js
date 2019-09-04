import React, { Component } from 'react';
import './App.css';
import Person from "./Person/person";

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name:"Dennis", age:31},
      {name: "Daniel", age:30}
    ]
  }

  switchNameHandler = () => {
    // console.log("Was clicked!")
    this.setState({persons: [
      {name: "Maximilian", age: 30},
      {name:"Dennis", age:31},
      {name: "Daniel", age:30}
    ]})
  }

  render() {
     return (
     <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>This is a paragraph.</p>
      <button onClick= {this.switchNameHandler}>Switch Name</button>
      <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
      <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
      <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
     </div>
      );
    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work?"));
  }
}

export default App;
