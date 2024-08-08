
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Activities from './pages/Activities';
import Places from './pages/Places';
import Login from './pages/Login';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/activities" element={<Activities />} />
      <Route path="/places" element={<Places />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default AppRouter;
