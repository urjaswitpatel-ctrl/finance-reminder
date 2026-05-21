import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQoK09Z2OXJzhOvFR361_WNTuiz1Ry3Nw",
  authDomain: "finance-reminder-893f6.firebaseapp.com",
  projectId: "finance-reminder-893f6",
  storageBucket: "finance-reminder-893f6.firebasestorage.app",
  messagingSenderId: "902285544691",
  appId: "1:902285544691:web:49e85893272d346db77b86"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };