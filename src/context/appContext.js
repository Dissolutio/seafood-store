import React, { createContext } from 'react'
import useInventoryReducer from './useInventoryReducer'
import useCartReducer from './useCartReducer'

export const AppContext = createContext({})

export const AppContextProvider = props => {
	const [inventory, inventoryDispatch] = useInventoryReducer()
	const [cart, cartDispatch] = useCartReducer()
	const [resetAppClickCount, setResetAppClickCount] = React.useState(0)
	// INVENTORY
	function deleteInventoryItem(id) {
		inventoryDispatch({ type: 'deleteInventoryItem', payload: id })
	}
	function updateInventoryItem(item) {
		inventoryDispatch({ type: 'updateInventoryItem', payload: item })
	}
	// CART
	function deleteCartItem(id) {
		cartDispatch({ type: 'deleteCartItem', payload: id })
	}
	function addItemToCart(id) {
		const itemToAdd = Object.assign({}, { ...inventory[id] })
		cartDispatch({ type: 'addItemToCart', payload: itemToAdd })
	}
	function incrementCartItem(id) {
		cartDispatch({ type: 'incrementCartItem', payload: id })
	}
	function decrementCartItem(id) {
		cartDispatch({ type: 'decrementCartItem', payload: id })
	}
	function emptyCart() {
		cartDispatch({ type: 'emptyCart' })
	}
	// RESET APP (& DOUBLE CLICK REQUIREMENT)
	function resetAppClick() {
		if (resetAppClickCount === 0) {
			setResetAppClickCount(1)
			setTimeout(() => {
				if (resetAppClick === 1) {
					setResetAppClickCount(0)
				}
			}, 2000)
		}
		if (resetAppClickCount >= 0) {
			resetApp()
		}
	}
	function resetApp() {
		cartDispatch({ type: 'resetCart' })
		inventoryDispatch({ type: 'resetCart' })
		setResetAppClickCount(0)
	}

	// Make the context object:
	const appContext = {
		inventory,
		cart,
		deleteInventoryItem,
		updateInventoryItem,
		deleteCartItem,
		addItemToCart,
		incrementCartItem,
		decrementCartItem,
		emptyCart,
		resetAppClickCount,
		resetAppClick,
		resetApp,
	}
	return <AppContext.Provider value={appContext}>{props.children}</AppContext.Provider>
}
