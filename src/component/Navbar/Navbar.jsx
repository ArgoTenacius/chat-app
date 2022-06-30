import React from 'react'
import './navbar.css'
import { BiLogOut } from 'react-icons/bi'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { auth, firestore } from '../../firebase/config'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, getDoc } from 'firebase/firestore'

const Navbar = ({userPhoto, setContactID, getDocID}) => {
  const contactRef = collection(firestore, "chats");
  const [contacts] = useCollectionData(contactRef, {idField: 'id'});

  const selectContact = (contact) => {
    setContactID(contact.id);
    getDocID(contact.id)
  }

  const Contact = ({contact}) => (
    <div className='contact' onClick={() => selectContact(contact)}>
      <img src={contact.photoURL} alt='contact_photo' className='app__photo-icon' />
      <h1 className='contact__title'>{contact.title}</h1>
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
            <Contact key={id} contact={index.room}/>
          ))
        }
      </section>
    </div>
  )
}

export default Navbar