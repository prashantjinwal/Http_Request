import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isfetchingData, setisFetchingData] = useState(false)
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState()

  useEffect(()=>{

    async function fetchPlaces (){

    try {
      setisFetchingData(true)
      const response = await fetch('http://localhost:3000/places');
      const resData = await response.json()

      if(!response.ok){
        throw new Error("failed to fetch places")
      }
      setAvailablePlaces(resData.places) 

    } catch (error) {
        setError({
          message : error.message || 'Could not fetch places, Please try again later'
        })
    }
 

      setisFetchingData(false)
    }

    fetchPlaces()

  },[])

  if(error){
    return <Error title={"An Error occurred!"} message={error.message} />
  }

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
