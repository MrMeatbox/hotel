import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCl2_r8fJSN8KfjmPrmWjvrLuf0hzxMXUk",
  authDomain: "hotelapp-d4bdc.firebaseapp.com",
  projectId: "hotelapp-d4bdc",
  storageBucket: "hotelapp-d4bdc.appspot.com",
  messagingSenderId: "964380320223",
  appId: "1:964380320223:web:6e386f467de79f7460a46a",
  measurementId: "G-6VDNC18WRP",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
