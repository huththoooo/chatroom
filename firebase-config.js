// Import Firebase core and database
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Firebase config (your original config)
const firebaseConfig = {
  apiKey: "AIzaSyDbOqIJebNyev-eRXI2A9N9_vYEPXBY5YY",
  authDomain: "urlweb-2d2fd.firebaseapp.com",
  databaseURL: "https://urlweb-2d2fd-default-rtdb.firebaseio.com",
  projectId: "urlweb-2d2fd",
  storageBucket: "urlweb-2d2fd.appspot.com",
  messagingSenderId: "479423517882",
  appId: "1:479423517882:web:0e7744c369faedb0b39e83",
  measurementId: "G-NC5H9TQBR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Realtime Database
const database = getDatabase(app);

// Export the database to use in other files
export { database };
