// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCO6LqcSEnegUdULFoX331XU4CnJ4GMVlo",
  authDomain: "facebook-clone-nikolab.firebaseapp.com",
  databaseURL: "https://facebook-clone-nikolab.firebaseio.com",
  projectId: "facebook-clone-nikolab",
  storageBucket: "facebook-clone-nikolab.appspot.com",
  messagingSenderId: "1043686627627",
  appId: "1:1043686627627:web:abd9979c6d6735d66b0d6e",
  measurementId: "G-X9VD2N0ZB2"
};

  var firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;
