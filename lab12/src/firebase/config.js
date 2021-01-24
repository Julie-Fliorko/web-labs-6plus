import firebase from "firebase";
import "firebase/database";

export const firebaseConfig = {
    apiKey: "AIzaSyAycWGz70Ln8jPcFOYpQdMRy_vbr68gJfg",
    authDomain: "reactbowls.firebaseapp.com",
    databaseURL: "https://reactbowls.firebaseio.com",
    projectId: "reactbowls",
    storageBucket: "reactbowls.appspot.com",
    messagingSenderId: "714974965903",
    appId: "1:714974965903:web:0fd9bf84d8c9342d95c0fa"
};

firebase.initializeApp(firebaseConfig);
console.log("зашибісь")
export default firebase.database();