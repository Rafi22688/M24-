
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

import {
  getDatabase
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

import {
  getStorage
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAsOx6bor1C9_8zRBs9bmAI7fhnHqG1d6g",
  authDomain: "m24-7977a.firebaseapp.com",
  databaseURL: "https://m24-7977a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "m24-7977a",
  storageBucket: "m24-7977a.firebasestorage.app",
  messagingSenderId: "610915970188",
  appId: "1:610915970188:web:0693a0101016c8d2da9fa9",
  measurementId: "G-JH2W9L2MLY"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const database = getDatabase(app);
const storage = getStorage(app);

export {
  app,
  auth,
  googleProvider,
  database,
  storage
};
