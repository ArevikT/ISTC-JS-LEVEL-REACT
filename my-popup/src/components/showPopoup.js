
import React, {Component, Fragment} from "react" ;

class Popup extends Component {
  
    state = {
        popup: false
      }
    myFunction = () => this.props.callback();     
  
    render(){
        return (
            <Fragment>
              <h1>{this.props.text}</h1>
              <button onClick= {this.myFunction}>Close</button>
            </Fragment>
        )
    }
}
export default Popup;