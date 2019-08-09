import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Bokhan-EMC
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">Grounding</a>
        </li>
        <li>
          <a href="#">EMC</a>
        </li>
        <li>
          <a href="#">OPGW</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;