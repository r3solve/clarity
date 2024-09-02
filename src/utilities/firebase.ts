import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
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
  getDoc,
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
    if ((err.code = "auth/invalid-email")){
      throw new Error("Invalid username or password") 
      
  }}
}

const signOutUser =async() => {
  try {
    const res = await signOut(auth)
    return res
  }catch(e) {
    alert("Can't Sign Out")
    console.log("Error", e)
  }
}

const uploadDataToFireStore = async (data:any) => {

  const docRef = await setDoc(doc(db, "users", data.email), {
    ...data,
    electives: []
  });
  return docRef
}

const getUserFromFireStore = async (emai:string)=> {
  const docRef = doc(db, `users/${emai}`)
  
  try {
    const doc = await getDoc(docRef)
    return doc.data()
  }catch(e){
    throw new Error(`${e}`)

  }

}

export {signUpUserWithRawCredentials, uploadDataToFireStore, signInWithRawCredentials, signOutUser, getUserFromFireStore}