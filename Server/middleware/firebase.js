import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIRE_API_KEY,
  authDomain: "period-slay.firebaseapp.com",
  projectId: "period-slay",
  storageBucket: "gs://period-slay.appspot.com",
  messagingSenderId: process.env.FIRE_MESSAGESENDER_I,
  appId: process.env.FIRE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
