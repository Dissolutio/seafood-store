import React from 'react'
import { NavLink } from 'react-router-dom'
export default () => {
	return (
		<header id="header" className="row d-flex flex-row flex-wrap text-center">
			<div className="col-xs-12 col-sm-6 col-md-4">
				<img src="/images/logo.png" alt="logo" />
			</div>
			<nav className="col-xs-12 col-sm-6 col-md-8 ">
				<NavLink className="btn btn-link" to="/">
					Shop
				</NavLink>
				<NavLink className="btn btn-link" to="/inventory">
					Inventory
				</NavLink>
			</nav>
		</header>
	)
}
