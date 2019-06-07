import React from 'react'
import { formatPrice } from '../helpers'
import { AppContext } from '../context'

const EditFishForm = props => {
	const appContext = React.useContext(AppContext)
	const { updateInventoryItem, deleteInventoryItem } = appContext
	const { product } = props
	const { id, name, price, image, desc, inStock } = product
	const handleChange = event => {
		let updatedValue = event.currentTarget.value
		let propertyToUpdate = event.currentTarget.name
		const updatedFish = {
			...product,
			[propertyToUpdate]: updatedValue,
		}
		updateInventoryItem(updatedFish)
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
			<button onClick={() => deleteInventoryItem(id)}>Remove Fish</button>
		</li>
	)
}
export default EditFishForm
