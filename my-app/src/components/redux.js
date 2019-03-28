import React, { Component } from 'react';
import reducer from "./moduls/reduser";
import {changeText, incrementNumber, decrementNumber, resetNumber} from "./moduls/action";
import {createStore, applyMiddleware  } from 'redux';
import thunk  from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk));



 class ReduxEx extends Component{
    constructor(props){
        super(props);
        this.state = {
            changeName:store.getState().changeName
        };
        store.subscribe(() => this.setState({changeName: store.getState().changeName}));
    }
    changeText = () => {
        store.dispatch(changeText("Mamikonyan"))
    }
    increment = () => {
        store.dispatch(incrementNumber())
    
    }
    decrement = () => {
        store.dispatch(decrementNumber())
    }
    reset = () => {
        store.dispatch(resetNumber())
    }

    render(){
       const state = store.getState();
       console.log(state, "state", store, "store", store.getState(), "get state")
        return(
           <div>
                <p>{this.state.changeName}</p>
                <button onClick={this.changeText}>Change text</button>
                <p></p>
                <p>{state.counter}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset number</button>
           </div>
        );
    }
}
export default ReduxEx;