import React, { useContext } from 'react'
import { AppContext } from './context'
import StoreItem from './components/StoreItem'

const Store = props => {
	const appContext = useContext(AppContext)
	const { removeFromOrder, addToOrder, customerShoppingCart } = appContext
	const { inventory } = props
	return (
		<div className="container">
			<h2>Shop!</h2>
			<ul>
				{Object.values(inventory).map((fish, index) => {
					return (
						<StoreItem
							key={`fish${index}`}
							fish={fish}
							addToOrder={addToOrder}
							removeFromOrder={removeFromOrder}
						/>
					)
				})}
			</ul>
		</div>
	)
}
export default Store
