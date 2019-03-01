import React, { Component } from 'react';

class Check extends Component {
         render(){
        
        return(
            <div>
                <input type= "checkbox" defaultChecked="cheked"/>Busy
                <input type= "checkbox" defaultChecked="cheked"/>Available
                <input type= "checkbox" defaultChecked="cheked"/>Started
                <button type= "button" defaultChecked="cheked">Reload</button>
            </div>
            
        )
    }
}
export default Check ;