import React, { useEffect, useState } from "react";
import {getAllContact} from "../actions/contactActions"
import {connect} from "react-redux"
import ContactsForm from "../Components/ContactsForm";
import Contacts from "../Components/Contacts";
import {Button} from "react-bootstrap"
import {logoutUser} from "../actions/authAction"



function Home(props) {
//   const [users, setUsers] = useState([]);
  useEffect(()=>{
    props.getAllContact();
  }, [])


  return (
    <div>
      <ContactsForm />
      <Contacts/> <br />
      <Button onClick={props.logoutUser} >Log out</Button>
    </div>
  );
}

const mapDispatchToProps = {
	getAllContact, logoutUser
};


export default connect(null, mapDispatchToProps) (Home);