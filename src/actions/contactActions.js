export const addContacts = (newContacts) => {
return {
    type: "ADD_CONTACT",
    payload: newContacts
};
};

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