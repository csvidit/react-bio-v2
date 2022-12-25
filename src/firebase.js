// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDbUQ67APOvHL5jD00YaKde3MGltLcPcBQ",

  authDomain: "vk-bio.firebaseapp.com",

  projectId: "vk-bio",

  storageBucket: "vk-bio.appspot.com",

  messagingSenderId: "1082610852982",

  appId: "1:1082610852982:web:60bb548d248be78ffbab57",

  measurementId: "G-9DECLNWHZT"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);