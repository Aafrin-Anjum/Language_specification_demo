//import React, { Component } from 'react';
import React, { PureComponent } from 'react';
//import Radium, {StyleRoot}from 'radium';
import  Class from './App.css';

import Person from './components/Persons/Person/Person';
import ErrorBoundry from './components/ErrorBoundry/ErrorBounder';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit';
import WithClass from './hoc/WithClass';
// import Aux from './hoc/Aux';
import withclass from './hoc/withclass_1';
import { withTranslation } from 'react-i18next';  
import LanguageSelector from "./LanguageSelector";
import './i18nextConf';

export const AuthContext = React.createContext(false);


//class App extends Component{
class App extends PureComponent{
  constructor(props){
    super(props);
    console.log('[App.js] inside constructor',props);
    this.state= {
      persons : [
        {id : "AAA",name :"Aafrin", age : 25},
        {id : "BBB",name :"nikita", age : 25},
        {id : "CCC",name :"Rehana", age : 42}
      ],
      showPersons:false,
      toggleClicked : 0,
      authenticate : false
    }
  }
 
  componentWillMount(){
    console.log('[App.js] inside component will mount');
  }

  componentDidMount(){
    console.log('[App.js] inside component did mount');
  }

  // shouldComponentUpdate(nextProps,nextState){
  //     console.log('[Update App.js] Inside should component update', nextProps,nextState);
  //     //return true;
  //     return nextState.persons !== this.state.persons
  //     || nextState.showPersons !== this.state.showPersons;
  // }
  componentWillUpdate(nextProps,nextState){
    console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('[Update App.js] Inside getDerivedStateFromProps', nextProps, prevState);
    return prevState;
  }


  getSnapshotBeforeUpdate(){
    console.log('[Update App.js] Inside getSnapshotBeforeUpdate');
  }

  componentDidUpdate(){
      console.log('[Update App.js] Inside componentDidUpdate');
  }
  // state={
  //   persons : [
  //     {id : "AAA",name :"Aafrin", age : 25},
  //     {id : "BBB",name :"nikita", age : 25},
  //     {id : "CCC",name :"Rehana", age : 42}
  //   ],
  //   showPersons:false
  // }

  // switchNameHandler= (newName) =>{
  //   this.setState({
  //     persons : [
  //       {name :newName, age : 25},
  //       {name :"nikita", age : 25},
  //       {name :"Rehana", age : 42}
  //     ]
  //   })
  // }

  deletePersonHandler=(personIndex)=>{
    //const person = this.state.persons;
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({
      persons : person
    })

  }

  nameChangeHandler=(event, id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons : persons
      //  [
      //   {name :"Aafrin", age : 25},
      //   {name :event.target.value, age : 25},
      //   {name :"Rehana", age : 42}
      // ]
    })
  }

  // togglePersonsHandler =()=>{
  //   const doesShow = this.state.showPersons;
  //   this.setState({
  //     showPersons : !doesShow,
  //     toggleClicked : this.state.toggleClicked + 1
  //   })
  // }

  togglePersonsHandler =()=>{
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) =>{
      return{
        showPersons : !doesShow,
        toggleClicked : prevState.toggleClicked + 1
      }
      
    })
  }

  loginHandler = () =>{
    this.setState({
      authenticate : true
    })
  }
 

  render(){
    // const buttonStyle = {
    //   backgroundColor : "green",
    //   color: "white",
    //   font : "inherit",
    //   border : '1px solid blue',
    //   padding : "10px",
    //   cursor :"pointer",
     /*  ':hover':{
        backgroundColor : "lightgreen",
        color : "black"
      } */
    //}
    const {t} = this.props;
    console.log('[App.js] Inside render method');
    let persons = null;
    // let btnclass = "";
    if(this.state.showPersons){
      persons = (
        <div>
          <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed ={this.nameChangeHandler}
           // isAuthenticated = {this.state.authenticate}
          /> 
          {/* {this.state.persons.map((person, index) =>{
            return <ErrorBoundry key = {person.id}><Person 
            //key = {person.id}
            click = {()=>this.deletePersonHandler(index)} 
            name ={person.name}
            age = {person.age}
            change =  {(event)=>this.nameChangeHandler(event, person.id)}
            /></ErrorBoundry>
          })} */}
          {/* <Person  
            name = {this.state.persons[0].name} 
            age = {this.state.persons[0].age}/>
          <Person  
            name = {this.state.persons[1].name} 
            age = {this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, "Puchu!")}
            change={this.nameChangeHandler}>My Hobbies : Chilling </Person>
          <Person  
            name = {this.state.persons[2].name} 
            age = {this.state.persons[2].age}/> */}
        </div>
        );
       // buttonStyle.backgroundColor = "red"
        /* buttonStyle[':hover']={
          backgroundColor : "salmon",
          color : "black"
        } */
        // btnclass=Class.red;

    }
    //let classes = ['red', 'bold'].join(' ');
    // const classes = [];
    // if (this.state.persons.length<=2){
    //   classes.push(Class.red);
    // }
    // if (this.state.persons.length<=1){
    //   classes.push(Class.bold);
    // }
  return (
    //<StyleRoot>
    //<div  className ="App">
    <div>
    {/* <WithClass classes = {Class.App}> */}
    {/* <div  className ={Class.App}> */}
    {/* {t()} */}
    <LanguageSelector />
    {/* <select
                                        className="form-control Value"
                                        onChange={(e) => changeLanguage(e)}
                                    >
                                     
                                    <option  value="en" >English</option>)
                                          


                                    </select> */}
    <h1>{t("Show Persons")}</h1>
      <button onClick ={() =>{this.setState({showPersons: true})}}>{t("Show Persons")}</button>
      <Cockpit 
        pageTitle = {this.props.title}
        showPersons = {this.state.showPersons}
        persons = {this.state.persons}
        togglePersonsHandler = {this.togglePersonsHandler}
        login = {this.loginHandler}
       />

      {/* <h1>Hi I am react app</h1> */}
     {/*  <p className = {classes.join(' ')}>This is really Working!!</p> */}
     {/* <Spreadrest /> */}
     {/* <br></br> */}
     {/* <br></br> */}
    {/* <button   */}
     {/* className ="Button"
     className = {btnclass}
     style = {buttonStyle}
    onClick={this.togglePersonsHandler}>Toggle persons</button> */}
      {/* {this.state.showPersons === true ? 
        <div>
          <Person  
            name = {this.state.persons[0].name} 
            age = {this.state.persons[0].age}/>
          <Person  
            name = {this.state.persons[1].name} 
            age = {this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, "Puchu!")}
            change={this.nameChangeHandler}>My Hobbies : Chilling </Person>
          <Person  
            name = {this.state.persons[2].name} 
            age = {this.state.persons[2].age}/>
        </div> : null
      } */}
      <AuthContext.Provider value = {this.state.authenticate}>
      {/* {t({persons})} */}
      {persons}
      </AuthContext.Provider>
     
    {/* </div> */}
    {/* </WithClass> */}
     {/* </StyleRoot> */}
    </div>
   

  );
}
}

export default
// Radium(
  
 withclass(withTranslation()(App), Class.App)
  //)
  ;
