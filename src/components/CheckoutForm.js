import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { CardElement, injectStripe } from 'react-stripe-elements'
class CheckoutForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			error: {},
		}
		this.createCharge = this.createCharge.bind(this)
		this.useTestVisa = this.useTestVisa.bind(this)
	}
	async completeCharge(response) {
		const data = await response.json()
		if (response.ok) {
			console.log(data)
			this.props.setOrderComplete(data)
			this.props.emptyCart()
		} else {
			const error = await response.json()
			this.setState({ error: error })
		}
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
		this.completeCharge(response)
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
		this.completeCharge(response)
	}

	render() {
		return (
			<>
				<div className="jumbotron p-4">
					<Button color="success" block onClick={this.useTestVisa}>
						Pay with:
						<div className="small-print-card-info">Visa ...4242</div>
					</Button>
				</div>
				<div className="jumbotron p-4">
					<div className="text-center m-3">
						Or enter card info (<a href="https://stripe.com/docs/testing#cards">use a stripe test card</a>)
					</div>
					<div className="p-5">
						<CardElement />
					</div>
					<Button color="secondary" block onClick={this.createCharge}>
						Submit Card
					</Button>
				</div>
			</>
		)
	}
}

export default injectStripe(CheckoutForm)
