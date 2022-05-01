// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAhuR3rRVovrZCFt-QOCj-0Ktcg3QoP6CI",

  authDomain: "genius-car-services-37d65.firebaseapp.com",

  projectId: "genius-car-services-37d65",

  storageBucket: "genius-car-services-37d65.appspot.com",

  messagingSenderId: "249161510255",

  appId: "1:249161510255:web:beb57ad06b100a005dcc9a"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
