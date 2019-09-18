import React, { Component, Fragment } from 'react';

import Auxiliary from '../../../hoc/Auxiliary'
// import styles from './Person.module.css';


class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');    
        return(
        <Fragment>
            <p onClick={this.props.click} >I'm a {this.props.name} and I am {this.props.age} years old</p>
            <p key="i2" >{this.props.children}</p>
            <input key="i3" type="text" onChange={this.props.changed} value={this.props.name}

            />            
        </Fragment>
        );
        }
    }
    




export default Person;
