import React from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../helpers'

const EditFishForm = props => {
	const { fish, updateInventoryItem, deleteInventoryItem } = props
	const { id, name, price, image, desc, inStock } = props.fish

	const handleChange = event => {
		let updatedValue = event.currentTarget.value
		let propertyToUpdate = event.currentTarget.name
		if (propertyToUpdate === 'price') {
			updatedValue = Math.round(parseFloat(updatedValue.replace(/\D/gi, '')) * 100) / 100
		}
		const updatedFish = {
			...fish,
			[propertyToUpdate]: updatedValue,
		}
		updateInventoryItem(updatedFish)
	}
	const deleteFishClick = event => {
		console.log(event)
		deleteInventoryItem(id)
	}
	return (
		<li className="edit-fish card shadow-2 m-3">
			<input type="text" name="name" onChange={handleChange} value={name} />
			<input type="text" name="price" onChange={handleChange} value={formatPrice(price)} />
			<select type="text" name="inStock" onChange={handleChange} value={inStock}>
				<option value={true}>Fresh!</option>
				<option value={false}>Sold out!</option>
			</select>
			<textarea name="desc" onChange={handleChange} value={desc} />
			<input type="text" onChange={handleChange} value={image} name="image" />
			<button onClick={deleteFishClick}>Remove Fish</button>
		</li>
	)
}
EditFishForm.propTypes = {
	fish: PropTypes.shape({
		id: PropTypes.string,
		image: PropTypes.string,
		name: PropTypes.string,
		desc: PropTypes.string,
		inStock: PropTypes.bool,
		price: PropTypes.number,
	}),
	updateInventoryItem: PropTypes.func.isRequired,
	deleteInventoryItem: PropTypes.func.isRequired,
}
export default EditFishForm
