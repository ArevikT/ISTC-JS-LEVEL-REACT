import React, { Component } from 'react';
//import Cycle from './components/lifecycles';
import ReduxEx from "./components/redux" ;
import { connect } from "react-redux" ;


class App extends Component {
 render() {
   return (
     <div className="App">
      {/* <Cycle/> */}
       < ReduxEx />
     </div>
   );
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);