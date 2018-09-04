import firebase from 'firebase'

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDG4DIoOal4_-iCqrXyUHiYED2EAkzDzqs",
    authDomain: "pizza-planet-a8fc2.firebaseapp.com",
    databaseURL: "https://pizza-planet-a8fc2.firebaseio.com",
    projectId: "pizza-planet-a8fc2",
    storageBucket: "pizza-planet-a8fc2.appspot.com",
    messagingSenderId: "88490756742"
  };
  const firebaseApp = firebase.initializeApp(config);
  const db = firebaseApp.database();
  export const dbMenuRef = db.ref('menu');
  export const dbOrdersRef = db.ref("orders");
