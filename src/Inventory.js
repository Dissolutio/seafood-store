import React from 'react'
import EditProductForm from './components/EditProductForm'
import { AppContext } from './context'
const Inventory = props => {
	const appContext = React.useContext(AppContext)
	const { inventory } = appContext
	return (
		<>
			<h2>Manage Inventory</h2>
			<ul>
				{Object.values(inventory).map((product, index) => (
					<EditProductForm key={product.id} product={product} />
				))}
			</ul>
		</>
	)
}
export default Inventory
