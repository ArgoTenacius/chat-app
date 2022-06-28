import React from 'react'
import './auth.css'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase/config'

const Auth = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        auth.currentUser = result
      });
  }

  return (
    <div className='auth'>
      <div className='auth__box'>
        <p className='auth__box-text'>Welcome to chat app</p>
        <button className='auth__box-button' onClick={() => signInWithGoogle()}>Sign in with google</button>
      </div>
    </div>
  )
}

export default Auth