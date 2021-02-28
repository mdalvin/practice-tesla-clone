import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQRn6iKZc6rhpCPhNpokSGMclro9lyz5o",
  authDomain: "tesla-clone-23b89.firebaseapp.com",
  projectId: "tesla-clone-23b89",
  storageBucket: "tesla-clone-23b89.appspot.com",
  messagingSenderId: "29595016882",
  appId: "1:29595016882:web:08ccbc5f65a661d7a4b3ab",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
