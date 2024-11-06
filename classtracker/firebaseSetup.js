import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,collection,addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCN8KqySVzBcApmg2snAb7mlnRQucxZNgg",
  authDomain: "reactminiproject-ece2d.firebaseapp.com",
  projectId: "reactminiproject-ece2d",
  storageBucket: "reactminiproject-ece2d.firebasestorage.app",
  messagingSenderId: "808159556228",
  appId: "1:808159556228:web:56b5c5eef4dfb647bcc8d1",
  measurementId: "G-6VE786CG6C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
async function StudentData(params) {
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
} 
StudentData()

