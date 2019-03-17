import React, { Component, Fragment } from "react" ;

class MyClock extends Component {
    state = {
        inputValue:0,
        time: 0,
        rotate: "",
    }
   timeValue = (e) => {
       this.setState(
          { inputValue:e.target.value }
       )

   }
   changeTime = () => {
       this.setState({time:0});
    for (let i = 0; i < this.state.inputValue; i++) {
        this.state.time += 30;        
    }
    console.log(this.state.time);

    return this.setState({rotate: "rotate(" + (this.state.time + "deg)")});
   } 
    render(){
        return(
            <Fragment>
                <input type= "number" id="number" value={ this.state.inputValue } onChange={this.timeValue}></input>
                <button type= "button" onClick = {this.changeTime} >Change</button>
                <div id = "clock">
                    <div className="clockHand" style={{ transform: this.state.rotate }}></div>
                   
                </div>
            </Fragment>
        )
      
        
    }
}

export default MyClock;