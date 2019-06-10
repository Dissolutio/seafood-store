import React from 'react'
import { sampleFishes } from '../sample-data'

const initialState = sampleFishes

function inventoryReducer(state, action) {
	let updatedInventory = Object.assign({}, state)
	switch (action.type) {
		case 'deleteInventoryItem':
			const idToDelete = action.payload
			delete updatedInventory[idToDelete]
			return updatedInventory
		case 'updateInventoryItem':
			let fish = action.payload
			if (!fish.id) {
				fish.id = `fish${Object.keys(state).length + 10}`
			}
			if (typeof fish.price === 'string') {
				fish.price = Math.round(parseFloat(fish.price.replace(/\D/gi, '')) * 100) / 100
			}
			updatedInventory[fish.id] = Object.assign({}, fish)
			console.log(updatedInventory[fish.id].price)
			return updatedInventory
		case 'resetInventory':
			return initialState
		default:
			return state
	}
}
function useInventoryReducer() {
	const [state, dispatch] = React.useReducer(inventoryReducer, initialState)
	return [state, dispatch]
}
export default useInventoryReducer
