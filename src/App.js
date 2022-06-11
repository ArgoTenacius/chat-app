import React, {useState} from 'react';
import { Load } from './components';
import RouteSwitch from './RouteSwitch';

const App = () => {
  const [user, setUser] = useState({});
  const [onLoad, setOnLoad] = useState(true);
  
  return (
    <div className='App'>
      {
        onLoad ? <Load setOnLoad={setOnLoad} setUser={setUser} /> :
        <RouteSwitch user={user} setUser={setUser} />
      }
    </div>
  );
}

export default App;
