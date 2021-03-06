import React from "react";
import { Route, Switch } from "react-router-dom";
import Store from "./components/Store.js";
import Inventory from "./Inventory.js";
import Header from "./components//Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="container page-wrapper">
        <Switch>
          <Route exact path="/" render={(props) => <Store {...props} />} />
          <Route
            path="/inventory"
            render={(props) => <Inventory {...props} />}
          />
        </Switch>
      </div>
    </div>
  );
};
export default App;
