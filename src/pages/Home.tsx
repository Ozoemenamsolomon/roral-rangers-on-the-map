import { DocumentData } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db, getCities } from '../utils/firebase';

export interface HomeProps {}

const Home: React.FC = () => {
  const data: DocumentData[] = [];
  const [Locations, setLocations] = useState(data);

  useEffect(() => {
    getCities(db).then((locations) => setLocations(locations));
  }, []);

  return (
    <div>
      <h1>Hello from Home Page</h1>
      Edit <code>src/App.js</code> and save to reload.
      {/* TODO use the data for the leaflet JS */}
      <pre>{JSON.stringify(Locations, null, 4)}</pre>
    </div>
  );
};

export default Home;
