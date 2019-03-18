import React, { Component, Fragment } from "react";

class SignIn extends Component {
    state = {
        username:"",
        password:""
    }
    myFunctionUsername = () => {
          let regexName = /^[a-zA-Z]+$/;
        if( regexName.test(this.username.value) === false ){
            this.setState({username:"Must be in letters only"});
               return (this.username.style.borderColor= "red");
        }else{
            this.setState({username:""})
               return (this.username.style.borderColor= "green");
        } 
    }
    myFunctionPass = () => {
        let regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
         if( regexPassword.test(this.pass.value) === false ){
            this.setState({password:"Your Password Should Contain At Least 8 Characters, 1 Number, 1 Upper And 1 Lower"}) ;
             return  (this.pass.style.borderColor= "red");
        } else{
            this.setState({password:""})
            return (this.pass.style.borderColor= "green");
        } 
    }
    logIN = () => {
        let objSignIn = {
            username: this.username.value,
            password: this.pass.value   
      };
    // console.log(objSignIn);
      let regexName = /^[a-zA-Z]+$/;
      let regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    
      if( regexName.test(this.username.value) === true && regexPassword.test(this.pass.value) === true ){
      fetch('http://rest.learncode.academy/api/learncode/friends', {
        method: "POST",
        headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(objSignIn),
    })
   .then(response => response.json()) 
   .then((response) => {
            console.log("You saved this item", response); 
          })        
        }
   }
    render() {
        return(
            <Fragment>
               
                <form action="" id="form2">
                    <input type="text" id="username" className="data" placeholder="Username" ref={input=>this.username=input} onChange={this.myFunctionUsername} />
                        <span id="errorUsername">{this.state.username}</span>
                    <input type="password" id="pass" className="data" placeholder="Password" ref={input=>this.pass=input} onChange={this.myFunctionPass}/>
                        <span id="errorPass">{this.state.password}</span>
                    <input type="button" className="data" id="logIn" value="LOG IN" onClick={this.logIN}/>
                 </form> 
            </Fragment>
        );
    }
}
export default SignIn;