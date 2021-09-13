import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC5XtMGne-bJh2IKwYlM0Yr_fXqXo0s5e0',
  authDomain: 'agc-rangers-directory.firebaseapp.com',
  projectId: 'agc-rangers-directory',
  storageBucket: 'agc-rangers-directory.appspot.com',
  messagingSenderId: '80080381123',
  appId: '1:80080381123:web:7a1cae78b224d20d96ee76',
  measurementId: 'G-5J5KYP3XD8',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Get a list of cities from your database
export async function getCities(db: Firestore) {
  const citiesCol = collection(db, 'Location');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
