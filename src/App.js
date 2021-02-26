// import React, {useState, useEffect} from "react";
// import {Switch, Route } from "react-router-dom";
// import HomePage from "./components/HomePage"

// import OrderForm from "./components/PizzaForm"




// const App = () => {
  
//   return (
//     <>
//       <div className="App">
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/PizzaForm" component={OrderForm} />
//         </Switch>

//       </div>
//     </>
//   );
// };
// export default App;
import React from "react";
import './App.css'
// import '.../Pizza.jpg'
import PizzaHeader from "./Header";

const App = () => {
  return (
    <div className="head"><PizzaHeader/>
</div>
);
};
export default App