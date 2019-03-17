import React, { Component } from 'react';
import Clock from "./components/showClock" ;
import MyClock from  "./components/clock" ;

import './App.css';

class App extends Component {
  state = {
    clicked:false
  }
  delete= ()=>{
    this.setState({clicked:true}) ;
  }
  render() {
    return (
      <div className="App">
         {this.state.clicked?null:<Clock />}
         <button onClick = {this.delete}>Click</button> <br />
         <MyClock />
      </div>
    );
  }
}

export default App;
