// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC-BKNhSI0StOaZzVMhgGQosDIhx7aKys",
  authDomain: "auth-intregrate-private-route.firebaseapp.com",
  projectId: "auth-intregrate-private-route",
  storageBucket: "auth-intregrate-private-route.appspot.com",
  messagingSenderId: "122156338119",
  appId: "1:122156338119:web:27fce63428801c2062a7e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
// export default app;