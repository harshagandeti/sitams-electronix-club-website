import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYfynyd5KtESG_CppzCc_KwguU7x6xC4s",
  authDomain: "sitams-electronix-club.firebaseapp.com",
  projectId: "sitams-electronix-club",
  storageBucket: "sitams-electronix-club.appspot.com",
  messagingSenderId: "457970109452",
  appId: "1:457970109452:web:deecf4637795b1fd7e3229",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const Storage = getFirestore(app);

// const firebaseConfig = {
//   apiKey: "<SOME_Key>",
//   authDomain: "<SOME_Key>",
//   projectId: "<SOME_Key>",
//   storageBucket: "<SOME_Key>",
//   messagingSenderId: "<SOME_Key>",
//   appId: "<SOME_Key>"
// };
