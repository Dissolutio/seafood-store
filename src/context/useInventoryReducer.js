import React from 'react'
import sampleFishes from '../sample-fishes'

function inventoryReducer(state, action) {
	let updatedInventory = Object.assign({}, state)
	switch (action.type) {
		case 'deleteInventoryItem':
			const idToDelete = action.payload
			delete updatedInventory[idToDelete]
			return updatedInventory
		case 'updateInventoryItem':
			let fish = action.payload
			console.log(fish)
			if (!fish.id) {
				fish.id = `fish${Object.keys(state).length + 1}`
			}
			fish.price = Math.round(parseFloat(fish.price.replace(/\D/gi, '')) * 100) / 100
			updatedInventory[fish.id] = Object.assign({}, fish)
			console.log(updatedInventory[fish.id].price)
			return updatedInventory
		default:
			return state
	}
}
function useInventoryReducer() {
	const initialState = sampleFishes
	const [state, dispatch] = React.useReducer(inventoryReducer, initialState)
	return [state, dispatch]
}
export default useInventoryReducer
// function Counter() {
// 	return (
// 		<>
// 			Count: {state.count}
// 			<button onClick={() => dispatch({ type: 'deleteInventoryItem' })}>+</button>
// 			<button onClick={() => dispatch({ type: 'updateInventoryItem' })}>-</button>
// 		</>
// 	)
// }
