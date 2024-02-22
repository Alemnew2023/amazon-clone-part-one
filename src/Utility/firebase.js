import firebase from "firebase/compat/app"
//auth
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore";
import "firebase/compat/auth"

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDUma9221eG78Jg5g58coyutOvXbaQpzno",
  authDomain: "clone-f1500.firebaseapp.com",
  projectId: "clone-f1500",
  storageBucket: "clone-f1500.appspot.com",
  messagingSenderId: "30120103837",
  appId: "1:30120103837:web:4c484dda100b98840b2974",
};

// Initialize firebase

const app =firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();




