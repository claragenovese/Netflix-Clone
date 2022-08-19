import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCga9fISkxfHvJlscNHeVQZkMzSkQNJyhI",
  authDomain: "netflix-clone-acc28.firebaseapp.com",
  projectId: "netflix-clone-acc28",
  storageBucket: "netflix-clone-acc28.appspot.com",
  messagingSenderId: "298208734583",
  appId: "1:298208734583:web:e934830d6148582c74c572"
}

export const app =  initializeApp(firebaseConfig)

export const auth = getAuth(app)

