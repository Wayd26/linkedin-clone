import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANJee5I8PCLVbHrCwClut-byGLqyyBbQc",
    authDomain: "linkedin-clone-ec137.firebaseapp.com",
    projectId: "linkedin-clone-ec137",
    storageBucket: "linkedin-clone-ec137.appspot.com",
    messagingSenderId: "1003393573607",
    appId: "1:1003393573607:web:93139a396af4e597f1f842",
    // measurementId: "G-L6743T4N6W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };