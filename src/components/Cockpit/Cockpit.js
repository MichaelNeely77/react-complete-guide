import React, { useEffect, useRef, useContext } from 'react';

import styles from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const cockpit = props => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);


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
            <button onClick={authContext.login}>Log in</button>}

        </div>
        
    );

};

export default React.memo(cockpit);

