import React from 'react'
import { ListGroup, ListGroupItem, Card, CardHeader, CardFooter, CardBody } from 'reactstrap'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './components/CheckoutForm'
import { formatPrice, calculateTotal } from './helpers'
import { AppContext } from './context'
const Cart = () => {
	const appContext = React.useContext(AppContext)
	const { cart, emptyCart } = appContext
	const [orderComplete, setOrderComplete] = React.useState({})
	if (Object.keys(orderComplete).length > 0) {
		setTimeout(() => {
			setOrderComplete({})
		}, 5000)
		return (
			<>
				<div className="alert alert-success" role="alert">
					{orderComplete.message}
					<p>
						<a className="btn-link" href={orderComplete.charge.receipt_url}>
							GO TO RECEIPT
						</a>
					</p>
				</div>
			</>
		)
	}
	// IF CART'S EMPTY, NO PAYMENT FORM
	if (parseInt(Object.keys(cart).length) > 0) {
		return (
			<Card>
				<CardHeader className="text-center large-font">Your Order:</CardHeader>
				<CardBody>
					<ListGroup>
						{Object.values(cart).map(item => (
							<ListGroupItem className="d-flex justify-content text-primary" key={`${item.id}`}>
								<span className="m-2">{item.name}</span>
								<span className="m-2">{`x ${item.quantity}`}</span>
								<span className="m-2">{formatPrice(item.price)} /lb</span>
							</ListGroupItem>
						))}
					</ListGroup>
				</CardBody>
				<CardFooter>
					<p className="text-center large-font">Total: {formatPrice(calculateTotal(cart))}</p>
					<StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
						<Elements>
							<CheckoutForm
								setOrderComplete={setOrderComplete}
								totalPrice={calculateTotal(cart)}
								emptyCart={emptyCart}
							/>
						</Elements>
					</StripeProvider>
				</CardFooter>
			</Card>
		)
	} else {
		return null
	}
}
export default Cart
