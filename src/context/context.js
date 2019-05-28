import React, { createContext, useState } from 'react'
export const Context = createContext({})
export const Provider = props => {
	const [sidenavIsOpen, setSidenavIsOpen] = useState(false)
	const [customerShoppingCart, setCustomerShoppingCart] = useState({})
	const toggleSidenav = () => setSidenavIsOpen(!sidenavIsOpen)

	const addToOrder = storeItem => {
		console.log(storeItem)
		let updatedCustomerShoppingCart = Object.assign({}, customerShoppingCart)
		if (updatedCustomerShoppingCart[storeItem.id]) {
			updatedCustomerShoppingCart[storeItem.id] += 1
		} else {
			updatedCustomerShoppingCart[storeItem.id] = Object.assign({}, { [storeItem.id]: 1 })
		}
		setCustomerShoppingCart(updatedCustomerShoppingCart)
	}
	const appContext = {
		sidenavIsOpen,
		setSidenavIsOpen,
		toggleSidenav,
		customerShoppingCart,
		setCustomerShoppingCart,
		addToOrder,
	}
	return <Context.Provider value={appContext}>{props.children}</Context.Provider>
}

export const { Consumer } = Context
