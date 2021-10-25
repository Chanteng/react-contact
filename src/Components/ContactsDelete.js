import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditContatcts from "./EditContatcts";
import {deleteContacts} from "../actions/contactActions"
import {connect} from "react-redux"


function User(props) {
  const user = props.user;

  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    
    setShowModal(!showModal);
  }

  return (
    <div>

      <h2>{user.name}</h2>
      <h2>{user.number}</h2>
      <h2>{user.location}</h2>

      <Button variant="primary" onClick={() => toggleModal()}>
        Edit
      </Button>

       { <Button variant="danger" onClick={() => props.deleteContacts(user.id)}>
        Delete
      </Button> }

      <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Please Edit Here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <EditContatcts
            user={user}
            editUser={props.editUser}
            toggleModal={toggleModal}
          />
        </Modal.Body>

      </Modal>

    </div>
  );
}


const mapDispatchToProps = {
  deleteContacts,
}
 
export default connect (null, mapDispatchToProps) (User);