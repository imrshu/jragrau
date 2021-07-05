import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBlKquEeS7V4hb1kV9rYd2Gtr5JhLkLu-s",
    authDomain: "jragrau-868e6.firebaseapp.com",
    projectId: "jragrau-868e6",
    storageBucket: "jragrau-868e6.appspot.com",
    messagingSenderId: "536044627817",
    appId: "1:536044627817:web:38bc1997504a0675123ff8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});
export default firebase;