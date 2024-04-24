import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: 'AIzaSyCNFw2SWbk4dUgmlguNinS-5MY0y3wag7s',
    authDomain: 'chat-app-5393a.firebaseapp.com',
    projectId: 'chat-app-5393a',
    storageBucket: 'chat-app-5393a.appspot.com',
    messagingSenderId: '962452512049',
    appId: '1:962452512049:web:38ac2ce25366b06b52a410',
    measurementId: 'G-3WQSS27NF0',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');

if (window.location.hostname === 'localhost') {
    // auth.useEmulator('http://localhost:9099');
    db.useEmulator('localhost', '8084');
}

export { db, auth };
export default firebase;
