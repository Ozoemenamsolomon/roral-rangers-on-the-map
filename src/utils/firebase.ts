import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { LocationProps } from '../pages/AddLocation';

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
const locationCol = collection(db, 'Location');

export const getLocation = async () => {
	const outpostSnapshot = await getDocs(locationCol);
	const outpostList = outpostSnapshot.docs.map((doc) => doc.data());
	return outpostList;
};
export const addLocation = async (data: LocationProps) => {
	const citySnapshot = await addDoc(locationCol, data);
	const cityID = citySnapshot.id;
	return cityID;
};
