import React, { useEffect } from 'react';

import styles from './Cockpit.module.css';

const cockpit = props => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('Saved data to the cloud!');
        }, 1000);
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

    if (props.persons.length <= 2) {
      assignedClasses.push(styles.red);
    } 
    if (props.persons.length <= 1) {
        assignedClasses.push(styles.bold);
      }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working! Right?</p>
            <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
        
    );

};

export default cockpit;

