import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAe4_0mTtKIHQt_7ouLqhFMu2Bb7IDLJzE",
  authDomain: "fir-auth-example-165b8.firebaseapp.com",
  databaseURL: "https://fir-auth-example-165b8.firebaseio.com",
  projectId: "fir-auth-example-165b8",
  storageBucket: "fir-auth-example-165b8.appspot.com",
  messagingSenderId: "950657901868"
};
firebase.initializeApp(config);

export default firebase;