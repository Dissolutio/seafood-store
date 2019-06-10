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
		<li className="edit-fish card shadow p-4 m-3 col-sm-5">
			<form>
				<div className="form-group">
					<label htmlFor="name">
						Name:
						<input type="text" name="name" onChange={handleChange} value={name} />
					</label>
				</div>
				<div className="form-group">
					<label htmlFor="price">
						Price:
						<input type="text" name="price" onChange={handleChange} value={formatPrice(price)} />
					</label>
				</div>
				<div className="input-group">
					<div className="input-group-prepend">
						<span className="input-group-text">Description:</span>
					</div>
					<textarea name="desc" aria-label="Description" onChange={handleChange} value={desc} />
				</div>
				<div className="form-group">
					<label htmlFor="image">
						Img:
						<input type="text" onChange={handleChange} value={image} name="image" />
					</label>
				</div>
				<div className="form-group">
					<label htmlFor="inStock" />
					In stock? :
					<select className="form-control" type="text" name="inStock" onChange={handleChange} value={inStock}>
						<option value={true}>In stock</option>
						<option value={false}>Sold out</option>
					</select>
				</div>
				<button className="btn btn-warning" onClick={() => deleteInventoryItem(id)}>
					Remove Fish
				</button>
			</form>
		</li>
	)
}
export default EditFishForm
