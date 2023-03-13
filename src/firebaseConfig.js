import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArZ1b8AfytXpI99WfbQSEDP4-arVjLwyA",
  authDomain: "userform-c0e10.firebaseapp.com",
  projectId: "userform-c0e10",
  storageBucket: "userform-c0e10.appspot.com",
  messagingSenderId: "1060978088550",
  appId: "1:1060978088550:web:df8cbf1b09346ea7c2eba7",

};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);