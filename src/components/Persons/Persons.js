// const Persons = (props) =>{
//     return();
// } or we can use -----
import Person from './Person/Person';
import ErrorBoundry from '../ErrorBoundry/ErrorBounder';


//import React, {Component} from 'react';
import React, { PureComponent } from 'react';

//class Persons extends Component{
class Persons extends PureComponent{
    constructor(props){
        super(props);
        console.log('[Persons.js] inside constructor',props);
        this.lastPersonsRef = React.createRef();
      }
      componentWillMount(){
        console.log('[Persons.js] inside component will mount');
      }
    
      componentDidMount(){
        console.log('[Persons.js] inside component did mount');
        // this.lastPersonsRef.current.focus();
      }

      componentWillReceiveProps(nextProps){
          console.log('[update persons.js] Inside Component will receive props', nextProps);
      }
    //   shouldComponentUpdate(nextProps,nextState){
    //       console.log('[Update Persons.js] Inside should component update', nextProps,nextState);
    //       return nextProps.persons !== this.props.persons
    //       || nextProps.changed !== this.props.changed
    //       || nextProps.clicked !== this.props.clicked;
    //     //return true;
    //   }
      componentWillUpdate(nextProps,nextState){
        console.log('[Update Persons.js] Inside componentWillUpdate', nextProps, nextState);
      }
      componentDidUpdate(){
          console.log('[Update Persons.js] Inside componentDidUpdate');
      }

    render(){
        console.log('[Persons.js] Inside render method');

        return this.props.persons.map((person, index) =>{
            return <ErrorBoundry key = {person.id}><Person 
            //key = {person.id}
            click = {()=>this.props.clicked(index)} 
            ref = {this.lastPersonsRef}
           // authenticated = {this.props.isAuthenticated}
            position = {index}
            name ={person.name}
            age = {person.age}
            change =  {(event)=>this.props.changed(event, person.id)}
            /></ErrorBoundry>
          }
    );
    }
}

// const Persons = (props) => props.persons.map((person, index) =>{
//         return <ErrorBoundry key = {person.id}><Person 
//         //key = {person.id}
//         click = {()=>props.clicked(index)} 
//         name ={person.name}
//         age = {person.age}
//         change =  {(event)=>props.changed(event, person.id)}
//         /></ErrorBoundry>
//       }
// );


export default Persons;