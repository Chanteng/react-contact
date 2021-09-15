import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import ContactsForm from './Components/ContactsForm';
import Contacts from './Components/Contacts';

function App() {
  const [users, setUser] = useState([]);

  function addUser(addUp) {
    setUser([...users, addUp])
  }

  return(
    <div>
      <ContactsForm addUser={addUser} />
      <Contacts user={users} />
    </div>
  )

}


export default App;
