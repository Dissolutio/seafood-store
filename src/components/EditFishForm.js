import React from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../helpers'

const EditFishForm = props => {
	const { fish, updateInventoryItem, deleteInventoryItem } = props
	const { id, name, price, image, desc, status } = fish
	const handleChange = event => {
		let updatedValue = event.currentTarget.value
		let propertyToUpdate = event.currentTarget.name
		const updatedFish = {
			...fish,
			[propertyToUpdate]: updatedValue,
		}
		console.log(updatedFish.price)
		updateInventoryItem(updatedFish)
	}
	return (
		<li className="edit-fish">
			<input type="text" name="name" onChange={handleChange} value={name} />
			<input type="text" name="price" onChange={handleChange} value={price} />
			<select type="text" name="status" onChange={handleChange} value={status}>
				<option value="available">Fresh!</option>
				<option value="unavailable">Sold out!</option>
			</select>
			<textarea name="desc" onChange={handleChange} value={desc} />
			<input type="text" onChange={handleChange} value={image} name="image" />
			<button onClick={() => deleteInventoryItem(id)}>Remove Fish</button>
		</li>
	)
}
EditFishForm.propTypes = {
	fish: PropTypes.shape({
		id: PropTypes.string,
		image: PropTypes.string,
		name: PropTypes.string,
		desc: PropTypes.string,
		status: PropTypes.string,
		price: PropTypes.number,
	}),
	updateInventoryItem: PropTypes.func.isRequired,
	deleteInventoryItem: PropTypes.func.isRequired,
}
export default EditFishForm
