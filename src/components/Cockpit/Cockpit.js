import React, { useEffect, useRef } from 'react';

import styles from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const cockpit = props => {
    const toggleBtnRef = useRef(null);


    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.Red;  
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(styles.red);
    } 
    if (props.personsLength <= 1) {
        assignedClasses.push(styles.bold);
      }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working! Right?</p>
            <button ref={toggleBtnRef}
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
        </div>
        
    );

};

export default React.memo(cockpit);

