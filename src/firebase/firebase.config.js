// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7h6dub1fppW07PtH43OAntrs3SImyk04",
    authDomain: "art-craft-gallery.firebaseapp.com",
    projectId: "art-craft-gallery",
    storageBucket: "art-craft-gallery.appspot.com",
    messagingSenderId: "633086668618",
    appId: "1:633086668618:web:aa710b40f5cc58304adbb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;