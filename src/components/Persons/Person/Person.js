import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from'./Person.module.css';
import AuthContext from '../../../context/auth-context';

// import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass';
// import styles from './Person.module.css';


class Person extends Component {
constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
}

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    render() {
        console.log('[Person.js] rendering...');    
        return(
        <Fragment>
            <AuthContext.Consumer>
                {(context) => 
                    context.authenticated ? <p>Authenticated!</p> : <p>Please login</p>}
            </AuthContext.Consumer>
            <p onClick={this.props.click} >
                I'm a {this.props.name} and I am {this.props.age} years old
            </p>
            <p key="i2" >
                {this.props.children}
            </p>
            <input 
                key="i3" 
                // ref= {(inputEl) => {this.inputElement = inputEl }} 
                ref = {this.inputElementRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name}
            />            
        </Fragment>
        );
        }
    }
    
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};



export default withClass(Person, styles.Person);
