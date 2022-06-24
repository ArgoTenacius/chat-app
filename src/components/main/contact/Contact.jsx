import React from 'react'
import './contact.css'

export const Contact = ({photo, name}) => {
  return (
    <div className='contact'>
        <img src={photo} alt="profile_photo" className='contact__photo'/>
        <h1 className='contact__name'>{name}</h1>
    </div>
  )
}