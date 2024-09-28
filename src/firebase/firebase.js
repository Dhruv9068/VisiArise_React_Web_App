import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQaeIOgZqOs7DewUMcr3rf2IDYBLNLQDQ",
  authDomain: "login-778ef.firebaseapp.com",
  projectId: "login-778ef",
  storageBucket: "login-778ef.appspot.com",
  messagingSenderId: "418877569291",
  appId: "1:418877569291:web:f035309a989c9998de4a0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth};