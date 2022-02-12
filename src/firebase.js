import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAnufMV343usCTB5YgLG1Jn7eAfytbdhTg",
  authDomain: "smithagram-2dd4a.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-d14b7.firebaseio.com",
  projectId: "smithagram-2dd4a",
  storageBucket: "smithagram-2dd4a.appspot.com",
  messagingSenderId: "743737279584",
  appId: "1:743737279584:web:36a553b981ebc9eb0b2f05",
  measurementId: "G-24BP35WHM0",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
