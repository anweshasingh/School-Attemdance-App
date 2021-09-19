 import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD5VQFfLFSTtEvuGN4QWU2abpRqb2XRRRY",
  authDomain: "attendance-app-50455.firebaseapp.com",
  databaseURL: "https://attendance-app-50455-default-rtdb.firebaseio.com",
  projectId: "attendance-app-50455",
  storageBucket: "attendance-app-50455.appspot.com",
  messagingSenderId: "592833685885",
  appId: "1:592833685885:web:af70588e3ad34021704414"
};

//initialize your database
if(!firebase.apps.length) {
  let app = firebase.initializeApp(firebaseConfig)
}
  export default firebase.database()
 

  