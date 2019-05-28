import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Nav, NavLink } from 'reactstrap'
import { AppContext } from '../context'
export default () => {
	const appContext = useContext(AppContext)
	const { sidenavIsOpen, toggleSidenav } = appContext
	return (
		<>
			<div className="page-header jumbotron">
				<h1>Seafood Store</h1>
				<button
					className={`hamburger hamburger--slider ${sidenavIsOpen ? 'is-active' : ''}`}
					type="button"
					onClick={toggleSidenav}>
					<span className="hamburger-box">
						<span className="hamburger-inner" />
					</span>
				</button>
			</div>
			<div className={`sidenav ${sidenavIsOpen ? 'sidenav-open' : ''}`}>
				<Nav card vertical>
					<Link to="/store">Store</Link>
					<Link to="/cart">Cart</Link>
					<Link to="/inventory">Inventory</Link>
				</Nav>
			</div>
		</>
	)
}
