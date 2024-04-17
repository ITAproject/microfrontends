import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "products/Products";
import AddProduct from "products/AddProduct";
import Notifications from "notifications/Notifications";
import AddNotification from "notifications/AddNotification";
import AddDiscount from "discounts/AddDiscount";
import RemoveDiscount from "discounts/RemoveDiscount";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <div className="bg-blue-500 text-white text-center py-6 my-6">
              Dobrodošli v naši trgovini!
        </div>
      <AddProduct />
      <Products />
      <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
      <AddDiscount />
      <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
      <RemoveDiscount />
      <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
      <AddNotification />
      <Notifications />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
