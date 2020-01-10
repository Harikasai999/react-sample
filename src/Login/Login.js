import React, { useState } from 'react';
import './Login.css';
import ReactDOM from 'react-dom';
var cities = [
    {
        value: "Vijayawada"
    },
    {
        value: "Vizag"
    },
    {
        value: "Hyderabad"
    },
    {
        value: "Kurnool"
    },
]
var states = [
    {
        value: "AP"
    },
    {
        value: "Telangana"
    },
    {
        value: "Tamilnadu"
    },
    {
        value: "Kerala"
    },
    {
        value: "Rajasthan"
    },
]
var countries = [
    {
        value: "India"
    },
    {
        value: "China"
    },
    {
        value: "United States"
    },
    {
        value: "Indonesia"
    },
    {
        value: "Russia"
    },
]
// import { Link } from 'react-router-dom';
function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
  
    function onChangeEmail(e) {
        // console.log("popopopopopopopo",e.target.value)
        setEmail(e.target.value)
    }
    function onChangePassword(e) {
        // console.log("popopopopopopopo",e.target.value)
        setPassword(e.target.value)
    }
 
    function onSubmit(event) {

        alert("wddqwdqwdqd"+ email+ password,)
        event.preventDefault();
    }
    return (
        <div>
             <div class="heading">
        <h1>Login</h1>
      </div>
      <form onSubmit={onSubmit}>
            <div class="input-container">
                <div class="col-25">
                    Email
                </div>
                <div class="col-75">
                    <input type="email" id="email" name="email" placeholder="Your email" value={email} onChange={onChangeEmail}  />
                </div>
            </div>
            <div class="input-container">
                <div class="col-25">
                    Password
                </div>
                <div class="col-75">
                    <input type="password" id="password" name="password" placeholder="Your password" value={password} onChange={onChangePassword}  />
                </div>
            </div>
            <div class="heading">
          <input type="submit" value="Submit" />
        </div>
        </form>
        </div>
    );
}

export default Login;
ReactDOM.render(<Login />, document.getElementById('root'));