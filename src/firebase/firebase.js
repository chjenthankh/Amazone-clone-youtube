import firebase from "firebase";
const config = {
  apiKey: "AIzaSyCw7l0A_HlW2l-pHR634zFKdKezaQkrV7U",
  authDomain: "clone-7d5ed.firebaseapp.com",
  databaseURL: "https://clone-7d5ed.firebaseio.com",
  projectId: "clone-7d5ed",
  storageBucket: "clone-7d5ed.appspot.com",
  messagingSenderId: "111955507964",
  appId: "1:111955507964:web:2f8969761a499cf645b579",
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
