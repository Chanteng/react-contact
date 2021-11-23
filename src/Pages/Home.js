import React, { useEffect, useState } from "react";
import {getAllContact} from "../actions/contactActions"
import {connect} from "react-redux"
import ContactsForm from "../Components/ContactsForm";
import Contacts from "../Components/Contacts";



function Home(props) {
//   const [users, setUsers] = useState([]);
  useEffect(()=>{
    props.getAllContact();
  }, [])


  return (
    <div>
      <ContactsForm />
      <Contacts/>
    </div>
  );
}

const mapDispatchToProps = {
	getAllContact,
};


export default connect(null, mapDispatchToProps) (Home);