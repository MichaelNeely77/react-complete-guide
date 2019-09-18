import React, { Component } from 'react';
import styles from'./App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from'../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
      persons: [
        { id: 'asdf1', name: 'Max', age: 28 },
        { id: 'fdsa3', name: 'Manu', age: 29 },
        { id: 'acvd3', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true
    }

    static getDerivedStateFromProps(props, state) {
      console.log('[App.js] getDerivedStateFromProps', props);
      return state;
    }

    // componentWillMount() {
    //   console.log('[Apps.js] componentWillMount');
    // }

    componentDidMount() {
      console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log('[App.js] shouldComponentUpdate');
      return true;
    }

    componentDidUpdate() {
      console.log('[App.js] componentDidUpdate');
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

    console.log('[App.js] render');
    let persons = null;


    if( this.state.showPersons ) {
      persons = (
      <Persons 
            persons ={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
      );
    }

    return (

      <WithClass styles={styles.App}>
        <button onClick = {() => {
          this.setState({showCockpit: false});
      }}
      >
        Remove Cockpit
        </button>
        {this.state.showCockpit ? (
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler} 
          /> 
    ) : null}
          {persons}
      </WithClass>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;