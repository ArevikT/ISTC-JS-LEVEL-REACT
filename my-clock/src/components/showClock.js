import React, {Component,Fragment} from "react";

class Clock extends Component {
    state = {
        date: new Date(),
        clicked: true
    }

    componentDidMount(){
       this.time = setInterval(()=> this.changeTime(),1000)
    }

    changeTime = () => {
        this.setState({
            date: new Date()
        })
    }

    componentDidUpdate(previousProps,previousState){
        if(previousState.date !== this.state.date){
            console.log("jam@ poxvec");
        }
     
    }
  
    componentWillUnmount(){
        clearInterval(this.time);
    }

    render(){
        return(
            <Fragment>
                <h1>Hello erexeq jan</h1>
                <p>the time is { this.state.date.toLocaleTimeString()}</p>   
            </Fragment>
        )
    }
}
export default Clock;