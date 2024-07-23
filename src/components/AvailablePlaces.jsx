import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isfetchingData, setisFetchingData] = useState(false)
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(()=>{

    async function fetchPlaces (){
      setisFetchingData(true)
      const response = await fetch('http://localhost:3000/places');
      const resData = await response.json()
      setAvailablePlaces(resData.places)
      setisFetchingData(false)
    }

    fetchPlaces()

  },[])

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isfetchingData}
      loadingText={"Fetching place data..."}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
