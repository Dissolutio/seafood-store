import React from 'react'
import { Button, Card, CardImg, CardHeader, CardText, CardBody, CardFooter, CardSubtitle } from 'reactstrap'
import { formatPrice } from './helpers'
const Store = props => {
	const { inventory, addToOrder } = props
	return (
		<>
			<ul className="row d-flex">
				{Object.values(inventory).map((fish, index) => {
					const { id, image, name, price, desc, inStock } = fish
					return (
						<Card className="col-sm-6" tag="li" key={fish.id}>
							<CardHeader className="h2">{name}</CardHeader>
							<CardBody className="d-flex justify-content-center">
								<CardImg src={image} alt={name} className="w-50 mr-auto ml-auto mt-2 img-thumbnail" />
								<CardText className="align-middle">{desc}</CardText>
							</CardBody>
							<CardFooter>
								<Button disabled={!inStock} onClick={() => addToOrder(id)}>
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
