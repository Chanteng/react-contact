export const addContacts = (contacts) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts")
      .add(contacts)
      .then(() => {});
  };
};

// export const addContacts = (newContacts) => {
// return {
//     type: "ADD_CONTACT",
//     payload: newContacts
// };
// };

export const editContacts = (id, updatedContact) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts")
      .doc(id)
      .update(updatedContact)
      .then(() => {});
  };
};


export const deleteContacts = (id) => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore()
          .collection("contacts")
          .doc(id)
          .delete()
          .then(() => {});
      };
}


export const getAllContact = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts")
      .onSnapshot(
        (snapshot) => {
          let contacts = [];
          snapshot.forEach((doc) => {
            contacts.push({ ...doc.data(), id: doc.id });
          });
          console.log(contacts);
          dispatch({ type: "SET_ALL_CONTACTS", payload: contacts });
        },
        (error) => {}
      );
  };
};
