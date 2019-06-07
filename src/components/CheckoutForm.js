import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { CardElement, injectStripe } from 'react-stripe-elements'
import { formatPrice } from '../helpers'
class CheckoutForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			complete: false,
			completedCharge: {},
			error: {},
		}
		this.createCharge = this.createCharge.bind(this)
		this.useTestVisa = this.useTestVisa.bind(this)
	}
	async useTestVisa() {
		let response = await fetch(`${process.env.REACT_APP_USETESTVISA_ENDPOINT}`, {
			method: 'POST',
			body: JSON.stringify({
				charge: {
					amount: this.props.totalPrice,
					currency: 'usd',
				},
			}),
		})
		const data = await response.json()
		if (response.ok) {
			this.setState({ complete: true, completedCharge: data })
			this.props.emptyCart()
		}
	}
	async createCharge() {
		let { token } = await this.props.stripe.createToken({ name: 'Name' })
		console.log()
		let response = await fetch(`${process.env.REACT_APP_CREATE_CHARGE_ENDPOINT}`, {
			method: 'POST',
			body: JSON.stringify({
				charge: {
					amount: this.props.totalPrice,
					currency: 'usd',
				},
				token: token.id,
			}),
		})
		if (response.ok) {
			const data = await response.json()
			this.setState({ complete: true, completedCharge: data.charge })
			this.props.emptyCart()
		} else {
			const error = await response.json()
			this.setState({ error: error })
		}
	}

	render() {
		if (this.state.complete) return <h1>Purchase Complete</h1>
		return (
			<div className="checkout">
				<p>Total Cost: {formatPrice(this.props.totalPrice)}</p>
				<div className="jumbotron p-4">
					<div className="m-3">
						<CardElement />
					</div>
					<Button color="primary" block onClick={this.createCharge}>
						Pay
					</Button>
				</div>
				<div className="text-center m-3">OR</div>
				<Button color="success" block onClick={this.useTestVisa}>
					Use a test card:
					<div className="small-print-card-info">Visa 4242 4242 4242 4242</div>
				</Button>
			</div>
		)
	}
}

export default injectStripe(CheckoutForm)
