import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBw6TFRNjGZkAQmoaauirHQP8VmNPFNu-Q",
  authDomain: "ecommerce-react-ccaec.firebaseapp.com",
  databaseURL: "https://ecommerce-react-ccaec.firebaseio.com",
  projectId: "ecommerce-react-ccaec",
  storageBucket: "ecommerce-react-ccaec.appspot.com",
  messagingSenderId: "85903699394",
  appId: "1:85903699394:web:0b0340bcbb4e684df67a5b",
  measurementId: "G-3ZG372N1PZ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`Users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error when creating users", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
