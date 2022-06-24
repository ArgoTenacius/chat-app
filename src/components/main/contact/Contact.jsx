import React from 'react'
import './contact.css'

export const Contact = ({user, log, setChatUser, setChatLog}) => {

  const selectUser = () => {
    setChatUser({
      name: user.name,
      photoURL: user.photoURL
    })

    setChatLog(log)
  }

  return (
    <div className='contact' onClick={() => selectUser()}>
        <img src={user.photoURL} alt="profile_photo" className='contact__photo'/>
        <h1 className='contact__name'>{user.name}</h1>
    </div>
  )
}