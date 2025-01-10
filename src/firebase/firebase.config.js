// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMrXve7vmuXjckPyD_mBAuoEdNSr3a2tA",
  authDomain: "jewellery-shop-2ea9d.firebaseapp.com",
  projectId: "jewellery-shop-2ea9d",
  storageBucket: "jewellery-shop-2ea9d.firebasestorage.app",
  messagingSenderId: "424468644743",
  appId: "1:424468644743:web:101d369c12a41c47214922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth