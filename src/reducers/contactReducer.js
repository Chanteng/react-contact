const initialState = {
  contacts: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      // console.log(action.payload);
      return { ...state, contacts: [...state.contacts, action.payload] };


    case "EDIT_CONTACT":
      // console.log(action.payload);
      const updatedContact = state.contacts.map ((contacts) => {
        if (contacts.id === action.payload.id) {
          return action.payload.updatedContact;
        }
        return contacts;
      });

      return { ...state, contacts: updatedContact }
   

    case "DELETE_CONTACT":
      const filteredContacts = state.contacts.filter (
        (contacts) => contacts.id !== action.payload
      );
      return {...state, contacts: filteredContacts}


    case "SET_ALL_CONTACTS":
      return { ...state, contacts: action.payload };

    default:
      return state;
  }
};

export default contactReducer;
