import React, { useContext } from 'react'
import { AppContext } from './context'
export default () => {
	const { inventory, setInventory } = useContext(AppContext)
	return <div>{inventory.fish1.toString()}</div>
}
