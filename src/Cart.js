import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './components/CheckoutForm'
import { formatPrice, calculateTotal } from './helpers'
import { AppContext } from './context'
export default props => {
	const appContext = React.useContext(AppContext)
	const { cart, emptyCart } = appContext
	return (
		<div>
			<StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
				<Elements>
					<CheckoutForm totalPrice={calculateTotal(cart)} emptyCart={emptyCart} />
				</Elements>
			</StripeProvider>
			<ListGroup>
				{Object.values(cart).map(item => (
					<ListGroupItem className="d-flex justify-content" key={`${item.id}`}>
						<span>{item.name}</span>
						<span>{`x ${item.quantity}`}</span>
						<span>{formatPrice(item.price)}</span>
					</ListGroupItem>
				))}
			</ListGroup>
		</div>
	)
}
