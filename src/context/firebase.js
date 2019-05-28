import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
	apiKey: 'AIzaSyCPHDNLN8NLNp3r79Aed92kgemVklAU5vw',
	authDomain: 'seafood-store-d0aa6.firebaseapp.com',
	databaseURL: 'https://seafood-store-d0aa6.firebaseio.com',
	projectId: 'seafood-store-d0aa6',
	storageBucket: 'seafood-store-d0aa6.appspot.com',
	messagingSenderId: '138104919033',
	appId: '1:138104919033:web:d48cdfda11334ab0',
}
class Firebase {
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
export default Firebase
