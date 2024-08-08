import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlaceDetail = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/places/${id}`)
      .then(response => response.json())
      .then(data => setPlace(data))
      .catch(error => console.error('Error fetching place:', error));
  }, [id]);

  if (!place) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{place.name}</h2>
      <p>{place.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PlaceDetail;
