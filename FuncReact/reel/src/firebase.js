import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig ={
    apiKey: "AIzaSyACSz5o86D0-uZzj87ahV-vyhj4o8B7nU4",
    authDomain: "reels-new-37cca.firebaseapp.com",
    projectId: "reels-new-37cca",
    storageBucket: "reels-new-37cca.appspot.com",
    messagingSenderId: "181555312790",
    appId: "1:181555312790:web:514ba3ec734ef4a8892ab7"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)


export const auth = firebase.auth();
const firestore = firebase.firestore();
// export const database = {
//   users: firestore.collection('users'),
//   posts: firestore.collection('posts'),
//   comments: firestore.collection('comments'),
//   getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
//   formatDoc: doc => {
//     return { id: doc.id, ...doc.data() }
//   }
// }
// 1. get firebase storage 
 export const database = {
    users: firestore.collection('users'),
    // posts: firestore.collection('posts'),
    // comments: firestore.collection('comments'),
    getTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
  }
export const storage = firebase.storage();
export default firebase;

