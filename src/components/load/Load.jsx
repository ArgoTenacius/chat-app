import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../../firebase/config'
import './load.css'

const Load = ({setUser, setOnLoad}) => {

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setOnLoad(false);
        })
    })
    
    return (
        <div className='load'>
            <span className='loader'>

            </span>
        </div>
    )
}

export default Load