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

  switchNameHandler = (newName) => {
    // console.log("Was clicked!")
    this.setState({persons: [
      {name: newName, age: 30},
      {name:"Dennis", age:31},
      {name: "Daniel", age:30}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: "Max", age: 30},
      {name: event.target.value, age:31},
      {name: "Daniel", age:27}
    ]})
  }

  // Best practice is bind and not this.switchNameHandler
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }
     return (
     <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>This is a paragraph.</p>
      <button
      style={style} 
      onClick= {() => this.switchNameHandler("Maximilian")}>Switch Name</button>
      <Person 
        name = {this.state.persons[0].name} 
        age = {this.state.persons[0].age} />
      <Person 
        name = {this.state.persons[1].name} 
        age = {this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this, "Max!")} 
        changed={this.nameChangedHandler}
        />
      <Person 
        name = {this.state.persons[2].name} 
        age = {this.state.persons[2].age} />
     </div>
      );
    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work?"));
  }
}

export default App;
