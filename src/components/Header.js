import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [activities, setActivities] = useState([]);
  const [places, setPlaces] = useState([]);
  const [activitiesDropdown, setActivitiesDropdown] = useState(false);
  const [placesDropdown, setPlacesDropdown] = useState(false);
  const [bookNowDropdown, setBookNowDropdown] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    userType: 'BASIC',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    activityId: ''
  });

  useEffect(() => {
    fetch('http://localhost:8080/api/activities')
      .then(response => response.json())
      .then(data => {
        const uniqueActivities = Array.from(new Set(data.map(activity => activity.name)))
          .map(name => data.find(activity => activity.name === name));
        setActivities(uniqueActivities);
      })
      .catch(error => console.error('Error fetching activities:', error));

    fetch('http://localhost:8080/api/places')
      .then(response => response.json())
      .then(data => {
        const uniquePlaces = Array.from(new Set(data.map(place => place.name)))
          .map(name => data.find(place => place.name === name));
        setPlaces(uniquePlaces);
      })
      .catch(error => console.error('Error fetching places:', error));
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userPayload = {
      ...formData,
      address: {
        street: formData.street,
        city: formData.city,
        state: formData.state,
        postalCode: formData.postalCode
      }
    };
    fetch('http://localhost:8080/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userPayload)
    })
    .then(response => response.json())
    .then(data => {
      console.log('User registered:', data);
      setBookNowDropdown(false); 
    })
    .catch(error => console.error('Error registering user:', error));
  };

  const toggleDropdown = (setter) => {
    setter(prev => !prev);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Welcome to the HolidayMaker</h1>
      </div>
      <nav className="nav">
        <div
          className="nav-item"
          onClick={() => toggleDropdown(setActivitiesDropdown)}
        >
          <span className="nav-link">ACTIVITIES</span>
          {activitiesDropdown && (
            <div className="dropdown">
              {activities.map(activity => (
                <Link key={activity.id} to={`/activities/${activity.id}`} className="dropdown-link">
                  {activity.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div
          className="nav-item"
          onClick={() => toggleDropdown(setPlacesDropdown)}
        >
          <span className="nav-link">PLACES</span>
          {placesDropdown && (
            <div className="dropdown">
              {places.map(place => (
                <Link key={place.id} to={`/places/${place.id}`} className="dropdown-link">
                  {place.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div
          className="nav-item"
          onClick={() => toggleDropdown(setBookNowDropdown)}
        >
          <span className="nav-link book-now">BOOK NOW</span>
          {bookNowDropdown && (
            <div className="dropdown">
              <form className="dropdown-form" onSubmit={handleFormSubmit}>
                <div>
                  <label>First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                </div>
                <div>
                  <label>Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div>
                  <label>Username</label>
                  <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
                </div>
                <div>
                  <label>Password</label>
                  <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                </div>
                <div>
                  <label>User Type</label>
                  <select name="userType" value={formData.userType} onChange={handleInputChange}>
                    <option value="BASIC">BASIC</option>
                    <option value="PREMIUM">PREMIUM</option>
                  </select>
                </div>
                <div>
                  <label>Street</label>
                  <input type="text" name="street" value={formData.street} onChange={handleInputChange} />
                </div>
                <div>
                  <label>City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
                </div>
                <div>
                  <label>State</label>
                  <input type="text" name="state" value={formData.state} onChange={handleInputChange} />
                </div>
                <div>
                  <label>Postal Code</label>
                  <input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />
                </div>
                <div>
                  <label>Activity</label>
                  <select name="activityId" value={formData.activityId} onChange={handleInputChange}>
                    <option value="">Select an activity</option>
                    {activities.map(activity => (
                      <option key={activity.id} value={activity.id}>{activity.name}</option>
                    ))}
                  </select>
                </div>
                <button type="submit">Register</button>
              </form>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
