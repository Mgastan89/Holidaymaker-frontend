import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ActivityDetail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/activities/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log("Activities:", data);
        
        setActivity(data)
      })
      .catch(error => console.error('Error fetching activity:', error));
  }, [id]);

  if (!activity) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{activity.name}</h2>
      <p>{activity.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ActivityDetail;
