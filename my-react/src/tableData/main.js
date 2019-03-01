import React, { Component } from 'react';
import Header from './Header/header';
import Check from './sectionCheck';
import Data from './sectionData' ;
import './style.css';

class Table extends Component {
    render() {
      return (
        <div className="App">
          <Header />
          <Data />
          <Check />

          
        </div>
      );
    }
  }
  
  export default Table;
  