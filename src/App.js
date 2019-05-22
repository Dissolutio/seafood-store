import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Nav, NavLink } from 'reactstrap'

import Store from './Store.js'
import Cart from './Cart.js'
import Inventory from './Inventory.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.scss';

function App() {
  return (
    <div className="app-wrapper">
      <div className="slider-menu">
        <Nav vertical>
          <NavLink href="/store">Store</NavLink>
          <NavLink href="/cart">Cart</NavLink>
          <NavLink href="/inventory">Inventory</NavLink>
        </Nav>
      </div>
      <div className="container page-wrapper">
        <Router>
          <Route path='/store' component={Store} />
          <Route path='/cart' component={Cart} />
          <Route path='/inventory' component={Inventory} />
        </Router>
      </div>
    </div>
  );
}

export default App;
