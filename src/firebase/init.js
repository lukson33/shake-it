import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAcgBOeL-BMFBFewNnU9K2oo2S4PUi_-oU",
  authDomain: "shake-it-4b792.firebaseapp.com",
  databaseURL: "https://shake-it-4b792.firebaseio.com",
  projectId: "shake-it-4b792",
  storageBucket: "shake-it-4b792.appspot.com",
  messagingSenderId: "819560242949",
  appId: "1:819560242949:web:46458009ab9cc4a48b216c",
  measurementId: "G-6HX1RHYYJT"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Export Firestore database
export default firebaseApp.firestore();
