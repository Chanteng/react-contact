import { applyMiddleware, compose, createStore } from "redux";
import contactReducer from "../reducers/contactReducer";
import firebase from "../firebase/Config"
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";



const Store = createStore(contactReducer,compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
)
);

export default Store;