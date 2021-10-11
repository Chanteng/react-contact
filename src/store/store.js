import { createStore } from "redux";
import contactReducer from "../reducers/contactReducer";

const Store = createStore(contactReducer)

export default Store;