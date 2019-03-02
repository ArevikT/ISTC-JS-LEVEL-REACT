import React, { Component } from 'react';
import './style.css';

class Cubic extends Component {
    state ={
        color:"red",
        count:0
    }
    myFunction= ()=>{
        this.setState({
           color: "green" ,
           count: this.state.count+=1
        })
      
    }
    render(){
        return (
            <div style ={{backgroundColor: this.state.color}} className= "cubic" onClick= {this.myFunction}>{this.state.count}</div>
        )
    }

}
export default Cubic;