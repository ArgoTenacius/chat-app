import { db } from './firebase/config';
import { ref, set } from "firebase/database"

function App() {

  const debugDB = async () => {
    await set(ref(db, 'debug'), {
      name: "Santo"
    })
  }

  return (
    <div className='App'>
      <button onClick={() => debugDB()}>Happy button!</button>
    </div>
  );
}

export default App;
