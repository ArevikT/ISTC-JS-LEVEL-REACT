import React, { Component } from 'react';
import Popup from "./components/showPopoup";

import './App.css';

class App extends Component {
  state = {
    popup: false
  }
  showPopup = () => {
     this.setState({popup: true})
  }

  render() {
    return (
      <div className="App">
          <p>show your popup</p>
          <button>Show popup</button>
          {this.state.popup ? <Popup text="Hello" myFunction = {this.showPopup} />:null}
      </div>
    );
  
  }
}
export default App;
