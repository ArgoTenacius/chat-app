import { db } from './firebase/config';
import { ref, set } from "firebase/database"
import { Auth } from './components/auth/Auth';

function App() {

  /*
  const debugDB = async () => {
    await set(ref(db, 'debug'), {
      name: "Santo"
    })
  }
  */

  return (
    <div className='App'>
      <Auth />
    </div>
  );
}

export default App;
