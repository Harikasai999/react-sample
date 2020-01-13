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
import GridList from "./Components/GridList"
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
    </Router>
  );

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
