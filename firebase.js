// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIcv8bF5K-_mIm3YMwyt5CKkN9qBOFFvg",
  authDomain: "campusfinder-9a9fc.firebaseapp.com",
  databaseURL: "https://campusfinder-9a9fc-default-rtdb.firebaseio.com",
  projectId: "campusfinder-9a9fc",
  storageBucket: "campusfinder-9a9fc.appspot.com",
  messagingSenderId: "182377240182",
  appId: "1:182377240182:web:ac45a5406a4905b6c5f157",
  measurementId: "G-9D0R0XJ1L8",
};

// Initialize Firebase
if (firebase.getApps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}

const auth = getAuth();
export { auth, getDatabase, ref, onValue, set };
