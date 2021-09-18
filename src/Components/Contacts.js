import React from "react";
import ContactsDelete from "./ContactsDelete";


function Contacts(props) {
  return (
    <div>
      {props.users.map((user) => {
        return (
          <ContactsDelete
            user={user}
            key={user.id}
            deleteUser={props.deleteUser}
            editUser={props.editUser}
          />
        );
      })}
    </div>
  );
}

export default Contacts;