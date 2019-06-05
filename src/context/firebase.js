import React from 'react'
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
}
export class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.database()
	}
	inventory = () => this.db.ref('inventory')
	inventoryItem = fishId => this.db.ref(`inventory/${fishId}`)
}
export const FirebaseContext = React.createContext({})
export const withFirebase = Component => props => (
	<FirebaseContext.Consumer>{firebase => <Component {...props} firebase={firebase} />}</FirebaseContext.Consumer>
)
