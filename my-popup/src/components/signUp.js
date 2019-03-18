import React, { Component, Fragment } from "react";

class SignUp extends Component {
    state = {
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
    }
    myFunctionName = () => {
        let regexName = /^[a-zA-Z]+$/;
            if( regexName.test(this.name.value) === false ){
                this.setState({name:"Must be in letters only"});
                return (this.name.style.borderColor= "red");
         }else{
             this.setState({name:""})
                return (this.name.style.borderColor= "green");
         } 
    }
    myFunctionSurname = () => {
        let regexName = /^[a-zA-Z]+$/;
           if( regexName.test(this.surname.value) === false ){
            this.setState({surname:"Must be in letters only"});
            return  this.surname.style.borderColor= "red";
        }else{
            this.setState({surname:""})
            return this.surname.style.borderColor= "green";
        }
    }
    myFunctionEmail = () => {
        let regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
         if( regexEmail.test(this.email.value) === false ){
            this.setState({email:"Sample characters@characters.domain"}) ;
            return  this.email.style.borderColor= "red";
         }else{
            this.setState({email:""})
            return this.email.style.borderColor= "green";
        }
    }
    myFunctionPassword = () => {
        let regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if( regexPassword.test(this.password.value) === false ){
            this.setState({password:"Your Password Should Contain At Least 8 Characters, 1 Number, 1 Upper And 1 Lower"});
            return  this.password.style.borderColor= "red";
        }else{
            this.setState({password:""})
            return this.password.style.borderColor= "green";
        }
    }
    myFunctionConfirmPassword = () => {
        if( this.confirmPassword.value !== this.password.value){
           this.setState({confirmPassword:"Does not match the password"});
           return  this.confirmPassword.style.borderColor= "red";
        }else{
           this.setState({confirmPassword:""});
           return this.confirmPassword.style.borderColor= "green";
        }
      }
      createACCOUNT = () => {
        let objSignIn = {
            name: this.name.value,
            surname: this.surname.value, 
            email: this.email.value,
            password: this.password.value,
            confirmPassword:this.confirmPassword.value 
      };
    // console.log(objSignIn);
      let regexName = /^[a-zA-Z]+$/;
      let regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      let regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    
      if(regexName.test(this.name.value) === true && regexName.test(this.surname.value) === true && regexEmail.test(this.email.value) === true && regexPassword.test(this.password.value) === true && this.confirmPassword.value === this.password.value) {
      fetch('http://rest.learncode.academy/api/learncode/friends', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
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
            <form action="" id="form1">
                        <input type="text" id="name" className="data" placeholder="Name"  ref={ input=>this.name=input } onChange={ this.myFunctionName } />
                        <span id="errorName">{ this.state.name }</span>
                     <input type="text" id="surname" className="data" placeholder="Surname" ref={ input=>this.surname=input } onChange={this.myFunctionSurname } />
                        <span id="errorSurname">{this.state.surname}</span>
                     <input type="email" id="email" className="data" placeholder="Your Email" ref={ input=>this.email=input } onChange= { this.myFunctionEmail }/>
                        <span id="errorEmail">{this.state.email}</span>
                     <input type="password" id="password" className="data" placeholder="Password" ref={ input=>this.password=input} onChange={ this.myFunctionPassword }/>
                        <span id="errorPassword">{this.state.password}</span>
                     <input type="password" id="confirmPassword" className="data" placeholder="Repeat your password" ref={ input=>this.confirmPassword=input} onChange={ this.myFunctionConfirmPassword }/>
                        <span id="errorConfirmPassword">{this.state.confirmPassword}</span>
                      <div className="check">
                         <input type="checkbox" name="agree" />
                         <label>aggri all statements in <a href="">Terms of service</a></label>
                      </div>
                      <input type="button" id="createAccount" className="data"  value="CREATE ACCOUNT" onClick={this.createACCOUNT}/>
                     <div id="lastDiv">Have already an account?<a  className="last_a" href="">Login Here</a></div>
                </form>
        </Fragment>
        );
    }

}
export default SignUp;