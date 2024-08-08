
import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = ({ items }) => {
  return (
    <div className="dropdown">
      {items.map((item, index) => (
        <Link key={index} to={item.path} className="dropdown-item">
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
