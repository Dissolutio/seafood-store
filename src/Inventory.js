import React from 'react'
import EditFishForm from './components/EditFishForm'
const Inventory = props => {
	const { inventory, updateInventoryItem, deleteInventoryItem } = props
	console.log(Object.values(inventory))
	return (
		<div className="container">
			<h2>Manage Inventory</h2>
			<ul>
				{Object.values(inventory).map((fish, index) => (
					<EditFishForm
						key={index}
						fish={fish}
						updateInventoryItem={updateInventoryItem}
						deleteInventoryItem={deleteInventoryItem}
					/>
				))}
			</ul>
		</div>
	)
}
export default Inventory
