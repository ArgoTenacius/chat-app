import React from 'react';
import { auth } from './firebase/config.js';
import { Auth, ChatApp } from './component/index.js'
import { useAuthState } from 'react-firebase-hooks/auth';
import './app.css'

const App = () => {

  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      {
        user ? <ChatApp user={user}/> : <Auth />
      }
    </div>
  );
}

export default App;
