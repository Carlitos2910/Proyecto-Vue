// SE UTILIZARÁ PARA ENLACES DE AUTENTIFICACIÓN.

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8XhR53z3NPfyQ-ydP7-yvHOlcsdelrmM",
    authDomain: "vue-clb.firebaseapp.com",
    projectId: "vue-clb",
    storageBucket: "vue-clb.appspot.com",
    messagingSenderId: "91983337499",
    appId: "1:91983337499:web:b3a86b59de9483497040be"
    };


export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export const storage = getStorage(firebaseApp);