import React from 'react'
import './navbar.css'
import { BiLogOut } from 'react-icons/bi'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { auth, firestore } from '../../firebase/config'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore'

const Navbar = ({userPhoto}) => {
  const contactRef = collection(firestore, "chats");
  const [contacts] = useCollectionData(contactRef, {idField: 'id'});

  const Contact = ({title, photo}) => (
    <div className='contact'>
      <img src={photo} alt='contact_photo' className='app__photo-icon' />
      <h1 className='contact__title'>{title}</h1>
    </div>
  )

  return (
    <div className='navbar'>
      <header className='navbar__header'>
        <img src={userPhoto} alt='profile_photo' className='app__photo-icon'/>
        <div>
          <BiLogOut className='app__icon' onClick={() => auth.signOut()}/>
          <AiOutlineUserAdd className='app__icon'/>
        </div>
      </header>

      <section className='navbar__contact'>
        {
          contacts  && contacts.map((index, id) => (
            <Contact key={id} title={index.room.title} photo={index.room.photoURL} />
          ))
        }
      </section>
    </div>
  )
}

export default Navbar