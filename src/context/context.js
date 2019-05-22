import React, { createContext, useState } from 'react'

export const Context = createContext({})

export const Provider = props => {
	// Initial values are obtained from the props
	const { sidenavIsOpen: sidenavInitial, inventory: fishes, children } = props

	// Use State to keep the values
	const [sidenavIsOpen, setSidenavIsOpen] = useState(sidenavInitial)
	const [inventory, setInventory] = useState(fishes)
	const toggleSidenav = sidenavIsOpen => {
		setSidenavIsOpen(!setSidenavIsOpen)
	}
	// Make the context object:
	const appContext = {
		sidenavIsOpen,
		setSidenavIsOpen,
		toggleSidenav,
		inventory,
		setInventory,
	}

	// pass the value in provider and return
	return <Context.Provider value={appContext}>{children}</Context.Provider>
}

export const { Consumer } = Context
