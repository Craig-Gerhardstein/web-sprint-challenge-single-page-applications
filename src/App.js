import React, {useState, useEffect} from "react";
import {Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import Order from "./components/Order"
import OrderForm from "./components/PizzaForm"
import axios from 'axios'
import * as yup from 'yup'



const App = () => {
  
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/PizzaForm" component={OrderForm} />
        </Switch>

      </div>
    </>
  );
};
export default App;
