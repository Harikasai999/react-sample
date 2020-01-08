import React, { useState } from 'react';
import './SignUp.css';
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
function SignUp() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [country, setCountry] = useState("");
  function onChangeFirstname(e) {
    // console.log("popopopopopopopo",e.target.value)
    setFirstname(e.target.value)
  }
  function onChangeLastname(e) {
    // console.log("popopopopopopopo",e.target.value)
    setLastname(e.target.value)
  }
  function onChangeEmail(e) {
    // console.log("popopopopopopopo",e.target.value)
    setEmail(e.target.value)
  }
  function onChangePassword(e) {
    // console.log("popopopopopopopo",e.target.value)
    setPassword(e.target.value)
  }
  function onChangePhone(e) {
    // console.log("popopopopopopopo",e.target.value)
    setPhone(e.target.value)
  }
  function handleChangeCity(e) {
    setCity(e.target.value)
  }
  function handleChangeState(e) {
    setStateValue(e.target.value)
  }
  function handleChangeCountry(e) {
    setCountry(e.target.value)
  }
  function onSubmit(event) {

    alert("wddqwdqwdqd"+ firstname+ lastname, email, password, phone, city, stateValue, country)
    event.preventDefault();
  }
  return (
    <div class="container">
      <div class="heading">
        <h1>SignUp</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div class="row">
          <div class="col-25">
            <label for="fname">First Name</label>
          </div>
          <div class="col-75">
            <input type="text" id="fname" name="firstname" placeholder="Your first name.." value={firstname} onChange={onChangeFirstname} />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Last Name</label>
          </div>
          <div class="col-75">
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={lastname} onChange={onChangeLastname} />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="email">Email</label>
          </div>
          <div class="col-75">
            <input type="email" id="email" name="email" placeholder="Your email.." value={email} onChange={onChangeEmail} />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="password">Password</label>
          </div>
          <div class="col-75">
            <input type="password" id="password" name="password" placeholder="Your password.." value={password} onChange={onChangePassword} />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="phone">Phone Number</label>
          </div>
          <div class="col-75">
            <input type="text" id="phone" name="phone" placeholder="Your phone number.." value={phone} onChange={onChangePhone} />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="city">City</label>
          </div>
          <div class="col-75">
            <select id="city" name="city" class="select-type" value={city} onChange={handleChangeCity}>
              {cities.map((res, key) => {
                return (
                  <option value={res.value}>{res.value}</option>
                )
              })}
              
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="state">State</label>
          </div>
          <div class="col-75">
            <select id="state" name="state" class="select-type" value={stateValue} onChange={handleChangeState}>
            {states.map((res, key) => {
                return (
                  <option value={res.value}>{res.value}</option>
                )
              })}
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="country">Country</label>
          </div>
          <div class="col-75">
            <select id="country" name="country" class="select-type" value={country} onChange={handleChangeCountry}>
            {countries.map((res, key) => {
                return (
                  <option value={res.value}>{res.value}</option>
                )
              })}
            </select>
          </div>
        </div>
        <div class="heading">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default SignUp;
ReactDOM.render(<SignUp />, document.getElementById('root'));