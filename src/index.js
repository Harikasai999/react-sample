import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import List from "./List/List"
import Pagination from "./Pagination/Pagination"
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Card from "./Components/CardExample"
import Cart from "./Cart/Cart"
import GridExample from "./Components/GridExample"
import GridList from "./Components/Grid/GridList"
import GridList2 from "./Components/Grid/GridList2"
import GridList3 from "./Components/Grid/GridList3"
import GridList4 from "./Components/Grid/GridList4"
import CheckboxExm from "./Components/CheckBox/CheckboxExm"
import TextInput from "./Components/TextInput/TextInput"
import DatePickerExmp from "./Components/DatePicker/DatePickerExmp"
import RadioCheck from "./Components/Radio/RadioCheck"
import Selection from "./Components/Selection/Selection"
import Drawer from "./Components/Drawer/SideMenu"
import PrimarySearchAppBar from "./Components/AppBar/PrimarySearchAppBar"
import RegularAppBar from './Components/AppBar/RegularAppBar';

const routing = (
    <Router>
    <Route exact path="/" component={App} />
      <Route exact path="/List" component={List} />
      <Route path="/Pagination" component={Pagination} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Login" component={Login} />
      <Route path="/Card" component={Card} />
      <Route path="/Cart" component={Cart} />
      <Route path="/GridExample" component={GridExample} />
      <Route path="/GridList" component={GridList} />
      <Route path="/GridList2" component={GridList2} />
      <Route path="/GridList3" component={GridList3} />
      <Route path="/GridList4" component={GridList4} />
      <Route path="/CheckboxExm" component={CheckboxExm} />
      <Route path="/TextInput" component={TextInput} />
      <Route path="/DatePickerExmp" component={DatePickerExmp} />
      <Route path="/RadioCheck" component={RadioCheck} />
      <Route path="/Selection" component={Selection} />
      <Route path="/Drawer" component={Drawer} />
      <Route path="/PrimarySearchAppBar" component={PrimarySearchAppBar} />
      <Route path="/RegularAppBar" component={RegularAppBar} />
    </Router>
  );

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
