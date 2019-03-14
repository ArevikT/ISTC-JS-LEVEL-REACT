import React, { Component , Fragment } from 'react';
import './style.css';

class Cubic extends Component {
    state ={
        color:"red",
        count:0,
        text: "",
        number: 0
    }
    myFunction= ()=>{
        this.setState({
           color: "green" ,
           count: this.state.count+=1
        })
      
    }

    changeText = (e) => {
        this.setState({text:e.target.value}) 
            
    }
    changeNumber = (e) => {
        this.setState({text:e.target.value})
    }


    render(){
        return (
        <Fragment>
            <div style ={{backgroundColor: this.state.color}} className= "cubic" onClick= {this.myFunction}>{this.state.count}</div>

            <input onChange = { this.changeText() } type = "text" ref = { el => this.text = el } value = {this.state.text} name = "text" />
            <p>{ this.state.color.text }</p>
            <input onChange = { this.changeNumber() } type = "number" ref = { el => this.number = el } value = "" name = "number" />
            <p>{ this.state.color.number }</p>
        </Fragment>
        )
    }

}
export default Cubic;