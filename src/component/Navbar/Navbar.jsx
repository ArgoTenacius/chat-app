import React from 'react'
import './navbar.css'
import { BiLogOut } from 'react-icons/bi'
import { AiOutlineUserAdd } from 'react-icons/ai'

const Navbar = ({userPhoto}) => {
  return (
    <div className='navbar'>
      <header className='navbar__header'>
        <img src={userPhoto} alt='profile_photo' className='app__photo-icon'/>
        <div>
          <BiLogOut className='app__icon'/>
          <AiOutlineUserAdd className='app__icon'/>
        </div>
      </header>
    </div>
  )
}

export default Navbar