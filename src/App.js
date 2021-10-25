import React, { useState } from "react";
import Contacts from "./Components/Contacts";
import ContactsForm from "./Components/ContactsForm";
import "./App.css"

function App() {
  const [users, setUsers] = useState([]);

  // function addUser(user) {
  //   setUsers([...users, user]);
  // }


  // function editUser(newDetails, userId) {
  //   const editedUser = users.map((user) => {
  //     if (userId === user.id) {
  //       return newDetails;
  //     } else {
  //       return user;
  //     }
  //   });

  //   setUsers(editedUser);
  // }


  // function deleteUser(userId) {

  //   const filteredUsers = users.filter((user) => {
  //     return userId !== user.id;
  //   });

  //   setUsers(filteredUsers);
  // }

  return (
    <div>
      <ContactsForm  />
      <Contacts  />
    </div>
  );
}

export default App;