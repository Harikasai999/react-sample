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
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/Cart")}>
      Cart
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/GridExample")}>
      Grid
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/GridList")}>
      Grid with title bars
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/GridList2")}>
      Image-only Grid list
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/GridList3")}>
      Single line Grid list
      </Button> </div>
      
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/GridList4")}>
      Advanced Grid list
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/CheckboxExm")}>
    Check box examples
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/TextInput")}>
   Text-Inputs
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/DatePickerExmp")}>
      Date - Picker
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/RadioCheck")}>
      Radio Buttons
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/Selection")}>
      Select options
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/Drawer")}>
      Drawer
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/PrimarySearchAppBar")}>
      Primary Search App Bar
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/RegularAppBar")}>
     Regular App Bar
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/CustomizedExpansionPanels")}>
 Expansion Panels
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/SkeletonSample")}>
        Loaders
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/CustomizedSteppers")}>
        Steppers
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/Switches")}>
      Switches
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/AlertDialog")}>
      Dialog
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/InteractiveList")}>
      Interactive List
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/MaterialTableDemo")}>
      Material Table
      </Button> </div>
      <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/CustomizedRatings")}>
     Ratings      </Button> </div>
     <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/Carousel")}>
     Carousel      </Button> </div>
     <div class="button-container">
      <Button variant="outlined" color="primary" onClick={() => props.history.push("/HorizontalList")}>
     Horizontal List      </Button> </div>
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
