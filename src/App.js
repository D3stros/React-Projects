import React, { Component } from "react";
import "./App.css";
import Person from "./Person/person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Dennis", age: 31 },
      { id: 3, name: "Daniel", age: 30 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangedHandler = (event, id)  => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  deletePersonHandler = (personIndex) => {
    // Creating a copy of persons array before manipulating it. Slice without arguments copies full array and returns a new array which is stored in const
    // const persons = this.state.persons.slice();

    // The same can be done via the spread operator.It spreads out elements of an array into lists of elements which gets added to this array. 
    //So objects of the old array are here now but not the old array itself. 
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            // Clicking this will delete specifically this element by passing the index to it.
            click = {() => this.deletePersonHandler(index)}
            name = {person.name} 
            age = {person.age}
            key = {person.id}
            changed = {(event) => this.nameChangedHandler(event, person.id)}/>
          })}
      </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is a paragraph.</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Show/hide content 
        </button>
        {persons}
      </div>
    );
    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work?"));
  }
}

export default App;
