import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Store from './Store.js'
import Cart from './Cart.js'
import Inventory from './Inventory.js'
import Header from './components//Header.js'

import { sampleFishes, sampleCart } from './sample-data'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/App.scss'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inventory: {},
			cart: {},
			resetAppDoublePress: 0,
		}
	}
	componentDidMount() {
		const localStorageCart = localStorage.getItem('cart')
		const localStorageInventory = localStorage.getItem('inventory')
		if (localStorageCart) {
			this.setState({ cart: JSON.parse(localStorageCart) })
		}
		if (localStorageInventory) {
			this.setState({ inventory: JSON.parse(localStorageInventory) })
		}
	}
	componentDidUpdate() {
		const { cart, inventory } = this.state
		localStorage.setItem('cart', JSON.stringify(cart))
		localStorage.setItem('inventory', JSON.stringify(inventory))
	}
	updateInventoryItem = fish => {
		const inventory = { ...this.state.inventory }
		if (!fish.id) {
			fish.id = `fish${Object.keys(inventory).length + 1}`
		}
		inventory[fish.id] = fish
		this.setState({
			inventory,
		})
	}
	addToOrder = key => {
		const { inventory } = this.state
		const cart = { ...this.state.cart }
		if (cart[key]) {
			this.incrementToOrder(key)
		} else {
			const itemAdded = inventory[key]
			cart[key] = Object.assign(
				{},
				{
					id: key,
					name: itemAdded.name,
					price: itemAdded.price,
					quantity: 1,
				},
			)
		}
		this.setState({ cart })
	}
	removeFromOrder = key => {
		const cart = { ...this.state.cart }
		delete cart[key]
		this.setState({ cart })
	}
	decrementFromOrder = key => {
		const cart = { ...this.state.cart }
		cart[key].quantity -= 1
		if (cart[key].quantity <= 0) {
			this.removeFromOrder(key)
		}
		this.setState({ cart })
	}
	incrementToOrder = key => {
		const cart = { ...this.state.cart }
		cart[key].quantity = cart[key].quantity + 1 || 1
		this.setState({ cart })
	}
	resetApp = () => {
		this.setState({ inventory: sampleFishes, cart: sampleCart, resetAppDoublePress: 0 })
	}
	deleteInventoryItem = key => {
		const inventory = { ...this.state.inventory }
		delete inventory[key]
		this.setState({ inventory })
	}
	resetOrder = () => {
		this.setState({ cart: {} })
	}
	resetAppClick = () => {
		if (this.state.resetAppDoublePress >= 1) {
			this.resetApp()
			this.setState({ resetAppDoublePress: 0 })
		} else {
			this.setState({ resetAppDoublePress: 1 }, () => {
				setTimeout(() => {
					if (this.state.resetAppDoublePress === 1) {
						this.setState({ resetAppDoublePress: 0 })
					}
				}, 3000)
			})
		}
	}

	render() {
		const {
			addToOrder,
			removeFromOrder,
			incrementToOrder,
			decrementFromOrder,
			updateInventoryItem,
			deleteInventoryItem,
			resetAppClick,
			resetOrder,
		} = this
		const { inventory, cart, resetAppDoublePress } = this.state

		return (
			<div className="app-wrapper">
				<Header resetAppClick={resetAppClick} resetAppDoublePress={resetAppDoublePress} />
				<div className="container page-wrapper">
					<Switch>
						<Route
							exact
							path="/"
							render={props => (
								<Store
									{...props}
									inventory={inventory}
									deleteInventoryItem={deleteInventoryItem}
									updateInventoryItem={updateInventoryItem}
									addToOrder={addToOrder}
									removeFromOrder={removeFromOrder}
									incrementToOrder={incrementToOrder}
									decrementFromOrder={decrementFromOrder}
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
						<Route
							path="/cart"
							render={props => (
								<Cart
									{...props}
									inventory={inventory}
									cart={cart}
									addToOrder={addToOrder}
									removeFromOrder={removeFromOrder}
									resetOrder={resetOrder}
								/>
							)}
						/>
					</Switch>
				</div>
			</div>
		)
	}
}
