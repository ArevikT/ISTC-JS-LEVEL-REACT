import React, { Component, Fragment } from 'react';
//import Popup from "./components/showPopoup";
import SignIn from "./components/signIn" ;
import SignUp from "./components/signUp"

import './App.css';

class App extends Component {
  state={
    signIn:true,
    signUp:true
  }
  signIn=()=>{
    this.setState({signIn:true});
    this.setState({signUp:false});

  }
  signUp=()=>{
    this.setState({signIn:false});
    this.setState({signUp:true});
  }
  render() {
    return (
      <Fragment>
         <div class="wrap1"> 
        <div class="wrap2">
          <div id="wrap">
              <div id="sign">
                <div id="signUP" onClick={this.signUp}>SIGN UP</div>
                <div id="signIN" onClick={this.signIn}>SIGN IN</div>
            </div>
               {this.state.signIn? null:<SignUp/>}
               {this.state.signUp? null: <SignIn/>}
          </div>
          {/* <p id="demo"></p> */}
      </div>
      
   </div>
      </Fragment>
    );
  }
}
export default App;
