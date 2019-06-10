import React from 'react'
import AppContext from '../context'
export default function ResetButton() {
	const appContext = React.useContext(AppContext)
	const { resetAppClickCount, resetAppClick } = appContext
	const resetButtonText = () => {
		if (resetAppClickCount === 1) {
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
		<button color={resetButtonText().color} onClick={resetAppClick}>
			{resetButtonText().text}
		</button>
	)
}
