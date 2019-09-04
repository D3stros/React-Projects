import React, { useState } from 'react';
import './App.css';
import Person from "./Person/person";

const app = props => {
  // Destructuring to pull elements out of an array. React Hooks does not merge with the old state. It completely replaces the old state. In this case is affected.
  // In setPersonsState the otherState has to be added as well so that it will not be gone after setPersonsState
  const [ personsState, setPersonsState ]= useState({
    persons: [
      {name: "Max", age: 28},
      {name:"Dennis", age:31},
      {name: "Daniel", age:30}
    ]
  });

  const [ otherState, setOtherState] = useState({otherState: "some other value2"});
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log("Was clicked!")
    setPersonsState({
      persons: [
      {name: "Maximilian", age: 30},
      {name:"Dennis", age:31},
      {name: "Daniel", age:30}
    ]
  });
  };

     return (
     <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>This is a paragraph.</p>
      <button onClick= {switchNameHandler}>Switch Name</button>
      <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age} />
      <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age} />
      <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age} />
     </div>
      );
    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work?"));
  }

export default app;


