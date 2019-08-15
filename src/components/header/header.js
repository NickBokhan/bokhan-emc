import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to='/'>
          Bokhan-EMC
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to='/grounding'>Grounding</Link>
        </li>
        <li>
          <Link to='/emc'>EMC</Link>
        </li>
        <li>
          <Link to='/opgw'>OPGW</Link>
        </li>
        <li>
          <span className="badge badge-danger">En</span>
          <span className="badge badge-info">Ru</span>
        </li>
      </ul>
    </div>
  );
};

export default Header;