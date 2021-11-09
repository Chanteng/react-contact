export const addContacts = (contacts) => {
    return (dispatch, state, {getFirestore}) => {
    getFirestore()
    .collection("contacts")
    .add(contacts)
    .then(()=>{});
    };
};


// export const addContacts = (newContacts) => {
// return {
//     type: "ADD_CONTACT",
//     payload: newContacts
// };
// };

export const editContatcts = (id, updatedContact) => {
    return {
        type: "EDIT_CONTACT",
        payload: {id, updatedContact}
    }
};


export const deleteContacts = (id) => {
    return {
        type: "DELETE_CONTACT",
        payload: id
    }
}



export const getAllContact = () => {
    return (dispatch, state, {getFirestore}) => {
        getFirestore()
        .collection ("contacts")
        .onSnapshot (
            (snapshot) => {
                let contacts = [];
                snapshot.forEach((doc) => {
                    contacts.push(doc.data());
                });
                console.log(contacts);
                dispatch({type: "SET_ALL_CONTACTS", payload: contacts})
            },
            (error) => {}
        )
    }
}