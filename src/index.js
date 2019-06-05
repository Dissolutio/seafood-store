import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Firebase, FirebaseContext } from './context/firebase'
import * as serviceWorker from './serviceWorker'
const EntryPoint = () => (
	<BrowserRouter>
		<FirebaseContext.Provider value={new Firebase()}>
			<App />
		</FirebaseContext.Provider>
	</BrowserRouter>
)
ReactDOM.render(<EntryPoint />, document.getElementById('root'))
serviceWorker.unregister()
