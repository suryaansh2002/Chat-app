import firebase from 'firebase';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyClS041zhaP8vJptE78mjYVtxyEEhihYN8",
    authDomain: "auth-practice-5b968.firebaseapp.com",
    projectId: "auth-practice-5b968",
    storageBucket: "auth-practice-5b968.appspot.com",
    messagingSenderId: "123151595951",
    appId: "1:123151595951:web:a23b5af8eb2bb22e26975a",
    measurementId: "G-GHRSET2BFK"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const auth=app.auth();