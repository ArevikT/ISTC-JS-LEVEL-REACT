import React, { Component } from 'react';
import Row from './returnRow';

class Header extends Component {
    ShowRow =() => {
        let arrHeader = ["Game number", "Status", "Player 1", "Player 2", "Round", "Amount", "Time", "Action"] ;
        let arr = [];
        for( let i = 0; i < arrHeader.length; i++){
            arr.push(<Row name = { arrHeader[i] } />) ;
        }
        return arr ;
    }
    
    render(){
        return (
            <header>
               { this.ShowRow()} 
            </header>
        )
    }
}
export default Header ;