import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA5V3SCySjFSG95vzOT4cyYnXW8T1RId3U',
  authDomain: 'vuetify-task.firebaseapp.com',
  databaseURL: 'https://vuetify-task.firebaseio.com',
  projectId: 'vuetify-task',
  storageBucket: 'vuetify-task.appspot.com',
  messagingSenderId: '326769563310',
  appId: '1:326769563310:web:afed84278a2b3230467f3f'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
