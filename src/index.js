import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContextProvider } from './context'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
	<AppContextProvider>
		<App />
	</AppContextProvider>,
	document.getElementById('root'),
)
serviceWorker.unregister()
