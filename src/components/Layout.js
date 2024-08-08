import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import ImageSlider from './ImageSlider'; 
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <ImageSlider />
        {children}
        <LoginForm />
      </div>
    </div>
  );
};

export default Layout;
