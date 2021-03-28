import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAlFwgweKxQlHpEFXN5GWPXFsd_-MHn2ZU",
  authDomain: "instagram-clone-6ca76.firebaseapp.com",
  projectId: "instagram-clone-6ca76",
  storageBucket: "instagram-clone-6ca76.appspot.com",
  messagingSenderId: "238391219857",
  appId: "1:238391219857:web:c084bebbb6ad8ad6441130",
}
//initialize firebase with all configuration keys
firebase.initializeApp(config)

//export firestore database
export const db = firebase.firestore()
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
