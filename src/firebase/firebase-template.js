import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "r",
  messagingSenderId: ""
}

firebase.initializeApp(config)

const database = firebase.database()
const githubAuthProvider = new firebase.auth.GithubAuthProvider()

export { firebase, githubAuthProvider, database as default }
