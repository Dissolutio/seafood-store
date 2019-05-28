import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Store from './Store.js'
import Cart from './Cart.js'
import Inventory from './Inventory.js'
import Header from './components//Header.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/App.scss'
import useInventoryReducer from './context/useInventoryReducer'

function App(props) {
	const [inventory, dispatch] = useInventoryReducer()
	const deleteInventoryItem = id => {
		dispatch({ type: 'deleteInventoryItem', payload: id })
	}
	const updateInventoryItem = fish => {
		dispatch({ type: 'updateInventoryItem', payload: fish })
	}
	return (
		<div className="app-wrapper">
			<div className="container page-wrapper">
				<Router>
					<Header />
					<Route
						path="/store"
						render={props => (
							<Store
								{...props}
								inventory={inventory}
								deleteInventoryItem={deleteInventoryItem}
								updateInventoryItem={updateInventoryItem}
							/>
						)}
					/>
					<Route
						path="/inventory"
						exact
						render={props => (
							<Inventory
								{...props}
								inventory={inventory}
								deleteInventoryItem={deleteInventoryItem}
								updateInventoryItem={updateInventoryItem}
							/>
						)}
					/>
					<Route path="/cart" render={props => <Cart {...props} inventory={inventory} />} />
				</Router>
			</div>
		</div>
	)
}

export default App
