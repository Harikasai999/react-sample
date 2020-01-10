import React from 'react';
// import { Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/SignUp")}>SignUp</Button>
      </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/Login")}>
      Login
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/List")}>
      List
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/Pagination")}>
      Pagination
      </Button>
      </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/Card")}>
      Card
      </Button> </div>
      {/* <div class="button-container">
        <Button className="button-style" onClick={() => props.history.push("/SignUp")}>SignUp</Button>
      </div>
      <div class="button-container">
        <Button className="button-style" onClick={() => props.history.push("/Login")}>Login</Button>
      </div>
      <div class="button-container">
        <Button className="button-style"  onClick={() => props.history.push("/List")}>List</Button>
      </div>
      <div class="button-container">
        <Button  className="button-style" onClick={() => props.history.push("/Pagination")}>Pagination</Button>
      </div>
      <div class="button-container">
        <Button  className="button-style" onClick={() => props.history.push("/Card")}>Card</Button>
      </div> */}

    </div>
  )
}

export default App;
