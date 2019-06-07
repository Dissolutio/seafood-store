import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context'
import App from './App'
import * as serviceWorker from './serviceWorker'
const EntryPoint = () => (
	<BrowserRouter>
		<AppContextProvider>
			<App />
		</AppContextProvider>
	</BrowserRouter>
)
ReactDOM.render(<EntryPoint />, document.getElementById('root'))
serviceWorker.unregister()
