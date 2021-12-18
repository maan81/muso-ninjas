import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBa1IKHYqFAFGglmudcW8mdOgnq_p_xfdE",
  authDomain: "muso-ninjas-3a812.firebaseapp.com",
  projectId: "muso-ninjas-3a812",
  storageBucket: "muso-ninjas-3a812.appspot.com",
  messagingSenderId: "138735063603",
  appId: "1:138735063603:web:4a88e7f6a37d6432b38946"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage();


// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
