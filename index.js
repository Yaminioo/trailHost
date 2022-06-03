// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkcNQWzYpgYONBf8zilqtKCUqw2kK4fzE",
    authDomain: "sample-hosting-web.firebaseapp.com",
    projectId: "sample-hosting-web",
    storageBucket: "sample-hosting-web.appspot.com",
    messagingSenderId: "1038007040387",
    appId: "1:1038007040387:web:1655002428e68e05169eb6",
    measurementId: "G-LDMNVGB6FM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);