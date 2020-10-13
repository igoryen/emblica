import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid) => {
    // console.log("actions/auth.js - login()")
    return {
        type: 'LOGIN',
        uid
    }
}

export const startLogin = () => {
    return () => {
        return firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            // .then(() => console.log('Sign-in successful.'));
    };
};

export const logout = () => {
    // console.log("actions/auth.js - logout()")
    return {
        type: 'LOGOUT'
    }
}

export const startLogout = () => {
    return () => {
        return firebase
            .auth()
            .signOut()
            // .then(() => console.log('Sign-out successful.'))
            // .catch((error) => console.log('error', error))
    }
}
