import { signInWithEmailAndPassword } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from 'firebase/auth'

import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIyJbVlBTFmaWKtumIoKWkHW-24sCFeaI",
  authDomain: "clarity-e973d.firebaseapp.com",
  projectId: "clarity-e973d",
  storageBucket: "clarity-e973d.appspot.com",
  messagingSenderId: "1006355099137",
  appId: "1:1006355099137:web:b686f0d531140e0dd6da00",
  measurementId: "G-2VTGJZF9Y0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

const auth = getAuth(app)

const signUpUserWithRawCredentials = async(email:string, password:string) => {
    try {
      const user = await  createUserWithEmailAndPassword(auth, email, password)
      return user
      console.log(user.user)
    }catch (err) {
      throw new Error("The was an error ")
    }
}

const signInWithRawCredentials = async(email:string, password:string ) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user
  }catch(err){
    console.log(err)
    throw new Error("An error Occured")
  }
}

const uploadDataToFireStore = async (data:any) => {

  const docRef = await setDoc(doc(db, "users", data.email), {
    ...data,
    electives: []
  });
  return docRef
}

export {signUpUserWithRawCredentials, uploadDataToFireStore, signInWithRawCredentials}