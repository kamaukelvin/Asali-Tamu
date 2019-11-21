 import firebase from 'firebase/app';
 import 'firebase/firestore'
 
 
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC59FLpc1g8I6ur-dVwiLLVP1iGihnVtEo",
  authDomain: "asali-tamu-85bce.firebaseapp.com",
  databaseURL: "https://asali-tamu-85bce.firebaseio.com",
  projectId: "asali-tamu-85bce",
  storageBucket: "asali-tamu-85bce.appspot.com",
  messagingSenderId: "34019483220",
  appId: "1:34019483220:web:bbd0cab798b97a0f8757c1",
  measurementId: "G-2GE9WBLRE8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  
// exporting the firebase and the collection
  export const db = firebase.firestore();
  export const dbMenuAdd = db.collection('menuItems')