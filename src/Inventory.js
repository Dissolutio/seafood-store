import React from 'react'
import EditFishForm from './components/EditFishForm'
const Inventory = props => {
	const { inventory, updateInventoryItem, deleteInventoryItem } = props
	return (
		<>
			<h2>Manage Inventory</h2>
			<ul>
				{Object.values(inventory).map((fish, index) => (
					<EditFishForm
						key={`${fish.id}+${index}`}
						fish={fish}
						updateInventoryItem={updateInventoryItem}
						deleteInventoryItem={deleteInventoryItem}
					/>
				))}
			</ul>
		</>
	)
}
export default Inventory
