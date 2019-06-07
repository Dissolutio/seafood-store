import React from 'react'

const initialState = {}
function useCartReducer() {
	const [state, dispatch] = React.useReducer(cartReducer, initialState)
	return [state, dispatch]
}

function cartReducer(state, action) {
	let updatedCart = Object.assign({}, state)
	switch (action.type) {
		case 'deleteCartItem':
			const idToDelete = action.payload
			delete updatedCart[idToDelete]
			return updatedCart
		case 'addItemToCart':
			let { id, name, price, quantity } = action.payload
			if (updatedCart[id]) {
				updatedCart[id].quantity++
				return updatedCart
			}
			if (!quantity) {
				quantity = 1
			} else {
				quantity++
			}
			if (typeof price === 'string') {
				price = Math.round(parseFloat(price.replace(/\D/gi, '')) * 100) / 100
			}
			const cartItem = Object.assign({}, { id, name, price, quantity })
			updatedCart[cartItem.id] = cartItem
			return updatedCart
		case 'incrementCartItem':
			let cartItemToIncrement = updatedCart[action.payload]
			cartItemToIncrement.quantity += 1
			return updatedCart
		case 'decrementCartItem':
			let cartItemToDecrement = updatedCart[action.payload]
			cartItemToDecrement.quantity -= 1
			if (cartItemToDecrement.quantity <= 0) {
				delete updatedCart[cartItem.id]
			}
			return updatedCart
		case 'resetCart':
			return initialState
		case 'emptyCart':
			return {}
		default:
			return state
	}
}
export default useCartReducer
