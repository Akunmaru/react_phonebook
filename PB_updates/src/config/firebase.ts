import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase.config'
import { GoogleAuthProvider, getAuth} from 'firebase/auth'

export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth()
export const Providers = { google: new GoogleAuthProvider() }

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCCZB1JE-TUVhyP7VX1NVMt9wdJ6Ucqisc",
//   authDomain: "pb-update-98e87.firebaseapp.com",
//   projectId: "pb-update-98e87",
//   storageBucket: "pb-update-98e87.appspot.com",
//   messagingSenderId: "359300821364",
//   appId: "1:359300821364:web:1022fe0252db4980c6fc21"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);