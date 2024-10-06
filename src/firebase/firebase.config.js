// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZFnzWVn4YgMzJ46zardKP18dFtQ_n0Ds",
    authDomain: "react-auth-private-route-9e75b.firebaseapp.com",
    projectId: "react-auth-private-route-9e75b",
    storageBucket: "react-auth-private-route-9e75b.appspot.com",
    messagingSenderId: "793600292654",
    appId: "1:793600292654:web:4f302178669cf32d07ecbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;