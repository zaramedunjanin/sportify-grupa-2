import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyBMN8_T66IaFIBmkf5ADj1frnYdfFY0zLw",
  authDomain: "sportify-4db02.firebaseapp.com",
  projectId: "sportify-4db02",
  storageBucket: "sportify-4db02.appspot.com",
  messagingSenderId: "277406883789",
  appId: "1:277406883789:web:79a487667de98877806e84",
  measurementId: "G-7WL79797CV",
});

// Initialize Firebase
const storage = getStorage(app);
export default storage;
