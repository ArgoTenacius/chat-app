import React from 'react'
import './contact.css'

export const Contact = ({photo, name, setChatUser}) => {
  return (
    <div className='contact'>
        <img src={photo} alt="profile_photo" className='contact__photo'/>
        <h1 className='contact__name' onClick={() => setChatUser({
            name: name,
            photoURL: photo
        })}>{name}</h1>
    </div>
  )
}