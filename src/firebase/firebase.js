import * as firebase from 'firebase'

var firebaseConfig = {
    projectId: process.env.REACT_APP_PROJECT_ID,
    apiKey: process.env.REACT_APP_API_KEY,
    appId: process.env.REACT_APP_APP_ID,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}
console.log("process.env.REACT_APP_PROJECT_ID:", process.env.REACT_APP_PROJECT_ID)
console.log("process.env.REACT_APP_NAME:", process.env.REACT_APP_NAME)
console.log("firebaseConfig:", firebaseConfig)

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics();

const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }
