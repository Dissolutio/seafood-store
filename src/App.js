import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { AppContextProvider } from './context'

import Store from './Store.js'
import Cart from './Cart.js'
import Inventory from './Inventory.js'
import Header from './components//Header.js'

import fishes from './sample-fishes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/App.scss'

function App() {
	return (
		<AppContextProvider fishes={fishes} sidenavInitial={false}>
			<div className="app-wrapper">
				<Header />
				<div className="container page-wrapper">
					<Router>
						<Route path="/store" component={Store} />
						<Route path="/cart" component={Cart} />
						<Route path="/inventory" component={Inventory} />
					</Router>
				</div>
			</div>
		</AppContextProvider>
	)
}

export default App
