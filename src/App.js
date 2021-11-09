import React, { useState, useEffect } from "react";
import Contacts from "./Components/Contacts";
import ContactsForm from "./Components/ContactsForm";
import "./App.css"
import {getAllContact} from "./actions/contactActions"
import {connect} from "react-redux"


function App(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    props.getAllContact();
  }, [])

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

const mapDispatchToProps = {
  getAllContact,
}

export default connect(null, mapDispatchToProps) (App);