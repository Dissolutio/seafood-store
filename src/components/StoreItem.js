import React from 'react'
import PropTypes from 'prop-types'

import { formatPrice } from '../helpers'
const StoreItem = props => {
	const { fish, addToOrder } = props
	const { image, name, price, desc, status } = fish
	const isAvailable = status === 'available'
	return (
		<li className="menu-fish">
			<img src={image} alt={name} />
			<h3 className="fish-name">
				{name}
				<span className="price">{formatPrice(price)}</span>
			</h3>
			<p>{desc}</p>
			<button disabled={!isAvailable} onClick={() => addToOrder(fish)}>
				{isAvailable ? 'Add to Order' : 'Sold out!'}
			</button>
		</li>
	)
}
StoreItem.propTypes = {
	fish: PropTypes.shape({
		id: PropTypes.string,
		image: PropTypes.string,
		name: PropTypes.string,
		desc: PropTypes.string,
		status: PropTypes.string,
		price: PropTypes.number,
	}),
	addToOrder: PropTypes.func,
}
export default StoreItem
