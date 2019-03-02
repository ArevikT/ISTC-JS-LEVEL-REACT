import React, { Component } from 'react' ;
import arrData from './data'
import Rows from './returnROWS';

class Data extends Component {
    state= {
        data: []  
    }
    postData= () => { 
    fetch("http://rest.learncode.academy/api/johnbob/friends", {
        method: "POST",
        headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(arrData),
   })
   .then(response => response.json()) 
   .then(response => {
      this.setState({data:[response]});

       console.log(response);
           let arr2 = [];
          for( let i = 0; i < response.length; i++){
              arr2.push(<Rows name = { response[i] } />) ;
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




// let arr1 = [response] ;
//     let arr2 = [];
//    for( let i = 0; i < arr1.length; i++){
//        arr2.push(<Rows name = { arr1[i] } />) ;
//    }
//    return arr2 ;
//    }) 