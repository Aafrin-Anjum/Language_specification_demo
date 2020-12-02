import React, { Component } from 'react';
class Spreadrest extends Component {
    state = { 
         name : [],
         newArray  : [],
         newName : []
     }
     componentDidMount=()=>{
        this.state.name = ['Aafrin', "nikita", "Anjali"];
        this.state.newArray  = [this.state.name, "Archana"];
        this.state.newName = [...this.state.name, "Archana"];
        this.setState({
            name : ['Aafrin', "nikita", "Anjali"],
            newArray  : [this.state.name, "Archana"],
            newName : [...this.state.name, "Archana"]
        })
        console.log(this.state.name);
        console.log(this.state.newArray);
        console.log(this.state.newName);
     }
    render() { 
        return (
            <div>{this.state.name}
            <br></br>
            {this.state.newArray}
            <br></br>
            {this.state.newName}
            </div>
          );
    }
}
 
export default Spreadrest;