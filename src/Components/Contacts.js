import React from "react";
import ContactsDelete from "./ContactsDelete";
import {connect} from "react-redux"



function Contacts(props) {
  // console.log(props);
  return (
    <>
      {props.contactsData.map((user) => {
        return (
          <ContactsDelete
            user={user}
            key={user.id}
          
          />
        );
      })}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    contactsData: state.contacts,
    contactsData: state.contactsState.contacts
  }
}

export default connect(mapStateToProps) (Contacts);