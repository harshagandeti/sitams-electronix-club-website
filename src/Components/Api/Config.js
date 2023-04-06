import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "<SOME_Key>",
  authDomain: "<SOME_Key>",
  projectId: "<SOME_Key>",
  storageBucket: "<SOME_Key>",
  messagingSenderId: "<SOME_Key>",
  appId: "<SOME_Key>"
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
