import React from 'react';
import Class from './Cockpit.css';


const Cockpit = (props) => {
    let btnclass = "";
    if (props.showPersons){
        btnclass=Class.red;
    }
    const classes = [];
    if (props.persons.length<=2){
      classes.push(Class.red);
    }
    if (props.persons.length<=1){
      classes.push(Class.bold);
    }
    return(
        <div className={Class.Cockpit}>
            {/* <h1>Hi I am react app</h1> */}
    <h1>{props.pageTitle}</h1>
            <p className = {classes.join(' ')}>This is really Working!!</p>

            <br></br>
            <br></br>
            <button  
                className = {btnclass}
                onClick={props.togglePersonsHandler}>Toggle persons
            </button>
            <button onClick = {props.login}>Log In</button>
        </div>
    );
    };
export default Cockpit;