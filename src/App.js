import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Store from './Store.js'
import Cart from './Cart.js'
import Inventory from './Inventory.js'
import Header from './components//Header.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/App.scss'

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<div className="container page-wrapper">
				<Switch>
					<Route exact path="/" render={props => <Store {...props} />} />
					<Route path="/inventory" render={props => <Inventory {...props} />} />
					<Route path="/cart" render={props => <Cart {...props} />} />
				</Switch>
			</div>
		</div>
	)
}
export default App
