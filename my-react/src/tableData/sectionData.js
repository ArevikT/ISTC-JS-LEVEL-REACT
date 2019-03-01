import React, { Component } from 'react' ;
import arrData from './data'
import Rows from './returnROWS';

class Data extends Component {
    postData= () => { 
     let data = arrData;
    fetch("http://rest.learncode.academy/api/johnbob/friends", {
        method: "POST",
        headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(data),
   })
   .then(response => response.json()) 
   .then((response) => {
    let arr1 = [response] ;
    let arr2 = [];
   for( let i = 0; i < arr1.length; i++){
       arr2.push(<Rows name = { arr1[i] } />) ;
   }
   return arr2 ;
   }) 
   
}

render(){
   return (
            <div>
                { this.postData()} 
             </div>
            )
        }
    
}
export default Data;
