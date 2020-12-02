import React, { Component } from 'react';
import Classes from "./Person.css";
import WithClass from '../../../hoc/WithClass';
// import Aux from '../../../hoc/Aux';
import withclass from '../../../hoc/withclass_1';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../App';
import { withTranslation } from 'react-i18next';
//import Radium from 'radium';


class person extends Component{
    constructor(props){
        super(props);
        console.log('[Person.js] inside constructor',props);
        this.inputElement = React.createRef();
      }
      componentWillMount(){
        console.log('[Person.js] inside component will mount');
      }
    
      componentDidMount(){
        console.log('[Person.js] inside component did mount');
        if (this.props.position === 0){
           // this.inputElement.focus();
           this.inputElement.current.focus();
        }
       
      }
      focus(){
          this.inputElement.current.focus();
      }

    render(){

        const {t} = this.props;
        console.log('[Person.js] Inside render method');
        return (
            <div>
            {/* <WithClass classes = {Classes.Person}> */}
             {/* <div className={Classes.Person}  */}
            {/* style = {style} */}
            {/* >  */}
            <AuthContext.Consumer>
                {/* /{this.props.authenticated ?<p>I am Authenticated</p> : null} */}
                {auth => auth?<p>{t("I am Authenticated")}</p> : null}
            </AuthContext.Consumer>
            <p onClick={this.props.click}>{t("I'm")} {this.props.name} {t("and I'm")} {this.props.age} {t("years old")}.</p>
            <p>{this.props.children}</p>
            <input 
               // ref = {(inp)=>{this.inputElement = inp}}
                ref = {this.inputElement}
                type="text" 
                onChange={this.props.change} 
                value = {this.props.name} 
            />
            {/* </div> */}
            {/* </WithClass> */}
            </div>
            )
        // return[
        //     <p key = '1' onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>,
        //     <p key = '2'>{this.props.children}</p>,
        //     <input key = '3' type="text" onChange={this.props.change} value = {this.props.name} />
        // ]
    }
}

//const person =(props)=>{
    /* const style = {
        '@media (min-width : 500px)':{
            width : "450px"
        }
    } */
//     return (
//     <div className={Classes.Person} 
//     //style = {style}
//     > 
//     <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
//     <p>{props.children}</p>
//     <input type="text" onChange={props.change} value = {props.name} />
//     </div>
//     )
// }
person.propTypes = {
    click:PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};
export default 
//Radium(
   withclass(withTranslation()(person), Classes.Person)
    //)
    ;