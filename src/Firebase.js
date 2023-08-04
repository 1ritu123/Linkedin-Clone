import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCK_ETF5zfmGV5Ue9u5mMcuaI3xl2p2XWs",
  authDomain: "linkedin-clone-ad379.firebaseapp.com",
  projectId: "linkedin-clone-ad379",
  storageBucket: "linkedin-clone-ad379.appspot.com",
  messagingSenderId: "430191292767",
  appId: "1:430191292767:web:3c588dfcc15d92a0c386ea"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
