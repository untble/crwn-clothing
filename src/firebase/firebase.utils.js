import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCV8BERdztICZwJGw4VpdjoU2aKpCqP-xA",
  authDomain: "crwn-db-9beea.firebaseapp.com",
  projectId: "crwn-db-9beea",
  storageBucket: "crwn-db-9beea.appspot.com",
  messagingSenderId: "173278406421",
  appId: "1:173278406421:web:127df5cfe849f4d285ab1c",
  measurementId: "G-YHP09GEV99",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;