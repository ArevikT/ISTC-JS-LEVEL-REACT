import React, { Component, Fragment } from 'react';
import Popup from "./components/showPopoup";

import './App.css';

class App extends Component {
  
   state = {
      showPopup: false
    };
  
  togglePopup=()=> {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <Fragment>
        <h1>hihi</h1>
        <button onClick={this.togglePopup}>show popup</button>
        {this.state.showPopup ?  <Popup text='Close Me' closePopup={this.togglePopup} />: null}
      </Fragment>
    );
  }
}
export default App;
