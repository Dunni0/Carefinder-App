
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBNIpm-CbdFLNaRmgOJ2y4Xr6daA_AxiWY",
  authDomain: "carefinder-app-924d3.firebaseapp.com",
  projectId: "carefinder-app-924d3",
  storageBucket: "carefinder-app-924d3.appspot.com",
  messagingSenderId: "544447624403",
  appId: "1:544447624403:web:c0f039b5c69c24b5925026",
  measurementId: "G-3ZL2EP086Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const providers = new GithubAuthProvider();