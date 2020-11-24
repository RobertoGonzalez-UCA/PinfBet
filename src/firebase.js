import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDG1hG3g_GmWEZeGcEOYiOERkSEdExVkYI",
  authDomain: "asdd-e79b0.firebaseapp.com",
  databaseURL: "https://asdd-e79b0.firebaseio.com",
  projectId: "asdd-e79b0",
  storageBucket: "asdd-e79b0.appspot.com",
  messagingSenderId: "843235430675",
  appId: "1:843235430675:web:804b5bb2450756e1cf0ae6",
  measurementId: "G-912EJ97GKC"
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
