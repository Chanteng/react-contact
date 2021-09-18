import React, { useState } from "react";
import { v4 as uuid } from "uuid";



function ContactsForm(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (number && name && location) {
      let newUser = {
        name: name,
        number: number,
        location: location,
        id: uuid(),
      };

      props.addUser(newUser);

      setName("");
      setNumber("");
      setLocation("");
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
      <input type="text" placeholder="Number" value={number} onChange={(e) => setNumber(e.target.value)} /> <br />
    <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}  /> <br />

      <input type="submit" />
    </form>
  );
}

export default ContactsForm;