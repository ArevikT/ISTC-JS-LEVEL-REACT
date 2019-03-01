import React, { Component } from 'react';

class Row extends Component {
    render(){
        return(
            <div className= {"headerRow"}>{ this.props.name }</div>
        )
    }
}
export default Row;