import React from 'react'
import { Button, Card, CardImg, CardHeader, CardText, CardBody, CardFooter } from 'reactstrap'
import { formatPrice } from './helpers'
import { AppContext } from './context'
import Cart from './Cart'

const Store = props => {
	const appContext = React.useContext(AppContext)
	const { inventory, addItemToCart } = appContext
	return (
		<>
			<Cart />
			<ul className="row d-flex">
				{Object.values(inventory).map((product, index) => {
					const { id, image, name, price, desc, inStock } = product
					return (
						<Card className="col-sm-6" tag="li" key={product.id}>
							<CardHeader className="h2">{name}</CardHeader>
							<CardBody className="d-flex justify-content-center">
								<CardImg src={image} alt={name} className="w-50 mr-auto ml-auto mt-2 img-thumbnail" />
								<CardText className="align-middle">{desc}</CardText>
							</CardBody>
							<CardFooter>
								<Button disabled={!inStock} onClick={() => addItemToCart(id)}>
									{inStock ? 'Add to Order' : 'Sold out!'}
								</Button>
								@{formatPrice(price)}/lb
							</CardFooter>
						</Card>
					)
				})}
			</ul>
		</>
	)
}
export default Store
