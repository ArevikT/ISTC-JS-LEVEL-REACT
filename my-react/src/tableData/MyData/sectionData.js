import React, { Component } from 'react' ;
import arrData from './data'
import Rows from './MyData/returnROWS';

class Data extends Component {
    postData= () => { 
     
    fetch("http://rest.learncode.academy/api/johnbob/friends", {
        method: "POST",
        headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(arrData),
   })
   .then(response => response.json()) 
   .then((response) => {
         return response ;
   }) 
}
   ShowRows =() => {
    
     let arr1 =this.postData().then((results) => {return results;});
     let arr2 = [];
   for( let i = 0; i < arr1.length; i++){
       arr2.push(<Rows name = { arr1[i] } />) ;
    }
   return arr2 ;
  
}

render(){
   return (
            <div>
                { this.ShowRows() } 
             </div>
            )
        }
    
}
export default Data;
