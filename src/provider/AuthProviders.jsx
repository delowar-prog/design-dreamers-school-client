import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';
export const authContext = createContext(null)
const AuthProviders = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const provider = new GoogleAuthProvider();
  //create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //update profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }
  //login user
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  //Solial Login
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  //logout user
  const logoutUser = () => {
    setLoading(true)
    return signOut(auth)
  }
  //user monitoring
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      //get & set token into localstorage
      if (currentUser) {
        axios.post('https://summer-camp-fashion-design-server.vercel.app/jwt', {
          email: currentUser.email
        })
          .then((res) => {
            localStorage.setItem('access-token', res.data.token)
            setLoading(false)
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        localStorage.removeItem('access-token')
      }

    });
    return () => {
      return unsubscribe
    }
  }, [auth])

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    loginUser,
    logoutUser,
    googleLogin
  }
  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProviders