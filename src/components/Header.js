import React from 'react'
import { Nav, NavItem, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
export default props => {
	const { resetAppClick, resetAppDoublePress } = props
	const buttonText = () => {
		if (resetAppDoublePress === 1) {
			return {
				text: 'Really Reset App?',
				color: 'danger',
			}
		} else {
			return {
				text: 'Reset App',
				color: 'info',
			}
		}
	}
	return (
		<header id="header" className="container mt-3">
			<Nav tag="nav" className="d-flex justify-content-end">
				<NavItem className="pl-3 pr-3">
					<Link className="heading-2" to="/">
						Seafood Store
					</Link>
				</NavItem>
				<NavItem className="pl-3 pr-3">
					<Link to="/cart">Cart</Link>
				</NavItem>
				<NavItem className="pl-3 pr-3">
					<Link to="/inventory">Inventory</Link>
				</NavItem>
			</Nav>
			<Button outline className="m-4" color={buttonText().color} onClick={resetAppClick}>
				{buttonText().text}
			</Button>
		</header>
	)
}
