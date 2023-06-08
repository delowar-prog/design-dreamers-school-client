import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    
    //create user with password
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //update profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    //login user with password
    const loginUserWithPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //login with google
    const googleProvider = new GoogleAuthProvider()
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //logout user
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    //set observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            //get & set into localstorage
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    }, [auth])

    const authInfo = {
        user,
        loading,
        registerUser,
        updateUserProfile,
        loginUserWithPass,
        loginWithGoogle,
        logoutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider