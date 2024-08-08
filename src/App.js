import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Activities from './pages/Activities';
import Places from './pages/Places';
import ActivityDetail from './pages/ActivityDetail';
import PlaceDetail from './pages/PlaceDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:id" element={<ActivityDetail />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/:id" element={<PlaceDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
