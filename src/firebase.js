import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLCx14hPV0pxLvfNOeBFWvR-T8q4AX1jM",
  authDomain: "clone-aca75.firebaseapp.com",
  projectId: "clone-aca75",
  storageBucket: "clone-aca75.appspot.com",
  messagingSenderId: "386370335382",
  appId: "1:386370335382:web:9da940fcccb98b87e448b7",
  measurementId: "G-EC656N6EWT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
