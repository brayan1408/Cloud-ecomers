import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp( {
     apiKey: "AIzaSyDrn_HVeS8BmFcG5EG1Wqo9bjDc0UKYzN8",
  authDomain: "ecomers-4ab27.firebaseapp.com",
  projectId: "ecomers-4ab27",
  storageBucket: "ecomers-4ab27.appspot.com",
  messagingSenderId: "822990952674",
  appId: "1:822990952674:web:2d3b821ee83cb6381726bb",
  measurementId: "G-GYZCTEK342"
})

const db = firebase.firestore();

export { db }






