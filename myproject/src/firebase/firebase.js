// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZFJZYu0fBOkjkoRtLwxl5oxIk52kdmCo",
  authDomain: "internarea-a6c5f.firebaseapp.com",
  projectId: "internarea-a6c5f",
  storageBucket: "internarea-a6c5f.firebasestorage.app",
  messagingSenderId: "93787066813",
  appId: "1:93787066813:web:8c20c52a52b6e4b60a82d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
