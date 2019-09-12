import React, { Component } from 'react';
import styles from'./App.module.css';

import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: 'Max', age: 28 },
      { id: 'fdsa3', name: 'Manu', age: 29 },
      { id: 'acvd3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
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
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
    let persons = null;
    let btnClass = '';

    if( this.state.showPersons ) {
      persons = (
        <div>
          <Persons 
            persons ={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changePersonHandler} />
      </div> );

      btnClass = styles.Red;     
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(styles.red);
    } 
    if (this.state.persons.length <= 1) {
        assignedClasses.push(styles.bold);
      }



    return (

      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <h2>This is the new code</h2>

        <p className={assignedClasses.join(' ')}>This is really working! Right?</p>
        <button
        className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
