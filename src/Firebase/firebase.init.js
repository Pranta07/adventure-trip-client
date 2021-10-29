import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const appInitialize = () => {
    initializeApp(firebaseConfig);
};

export default appInitialize;
