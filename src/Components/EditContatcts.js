import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {editContacts} from "../actions/contactActions"
import {connect} from "react-redux"


function EditContatcts(props) {
  const [name, setName] = useState(props.user.name);
  const [number, setNumber] = useState(props.user.number);
  const [location, setLocation] = useState(props.user.location);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  function handleSubmit() {
    
    let editedUser = {
      name: name,
      number: number,
      location: location,
      id: props.user.id,
    };

    props.editContacts(props.user.id, editedUser);
    props.toggleModal();
  }


  return ( 

    <div>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => handleNameChange(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number</Form.Label>
        <Form.Control
          name="text"
          placeholder="Enter Number"
          value={number}
          onChange={(e) => handleNumberChange(e)}
        />
        </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control
          name="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => handleLocationChange(e)}
        />

        <Button onClick={() => handleSubmit()}>Save</Button>
      </Form.Group>
    </Form>
  </div>

  );
}

const mapDispatchToProps = {
  editContacts,
}

export default connect(null, mapDispatchToProps) (EditContatcts);
