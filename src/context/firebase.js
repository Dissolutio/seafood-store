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

	// AUTH API
	doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)
	doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)
	doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider)
	doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider)
	doSignOut = () => this.auth.signOut()
	doSendEmailVerification = () =>
		this.auth.currentUser.sendEmailVerification({
			url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
		})

	// *** Merge Auth and DB User API *** //
	onAuthUserListener = (next, fallback) =>
		this.auth.onAuthStateChanged(authUser => {
			if (authUser) {
				this.user(authUser.uid)
					.once('value')
					.then(snapshot => {
						const dbUser = snapshot.val()
						// assign default role
						if (dbUser && !dbUser.userRole) {
							dbUser.userRole = 'default'
						}
						// merge auth and db user
						authUser = {
							uid: authUser.uid,
							...dbUser,
						}
						next(authUser)
					})
			} else {
				fallback()
			}
		})

	// *** User API ***
	user = uid => this.db.ref(`users/${uid}`)
	users = () => this.db.ref('users')

	// *** Message API ***
	message = uid => this.db.ref(`messages/${uid}`)
	messages = () => this.db.ref('messages')

	// *** Armies API ***
	userArmies = uid => this.db.ref(`armies/${uid}`)
	publicArmies = id => this.db.ref(`armies/public/${id}`)

	// *** Armies API ***
	userLibraries = uid => this.db.ref(`libraries/${uid}`)
	publicArmies = id => this.db.ref(`armies/public/${id}`)

	// *** Cards API ***
	coreHeroscapeCards = () => this.db.ref('cards/coreHeroscapeCards')
}
export const FirebaseContext = React.createContext({})
export const withFirebase = Component => props => (
	<FirebaseContext.Consumer>{firebase => <Component {...props} firebase={firebase} />}</FirebaseContext.Consumer>
)
