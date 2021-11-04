import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyClG7oaBGb_YquN7Q4JNybG4ZV8Pk_TAJs",
  authDomain: "messenger-clone-a44c9.firebaseapp.com",
  projectId: "messenger-clone-a44c9",
  storageBucket: "messenger-clone-a44c9.appspot.com",
  messagingSenderId: "585324866277",
  appId: "1:585324866277:web:6ca474deb7bfdbc298c20c"
}).auth();
