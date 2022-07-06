import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC91Ev_h1iXVC0X0kB-uQPrVT8Dmg71l00",
  authDomain: "gamerstore-ecommerce.firebaseapp.com",
  projectId: "gamerstore-ecommerce",
  storageBucket: "gamerstore-ecommerce.appspot.com",
  messagingSenderId: "51413641332",
  appId: "1:51413641332:web:34a5c5f42f1d35703e8921"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app
}
