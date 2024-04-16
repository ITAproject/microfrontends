import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "products/Products";
import AddProduct from "products/AddProduct";
import Notifications from "notifications/Notifications";
import AddNotification from "notifications/AddNotification";
import AddDiscount from "discounts/AddDiscount";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <AddProduct />
      <Products />
        --------------------------------
        <AddDiscount />
        --------------------------------
      <AddNotification />
      <Notifications />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
