import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavItem = ( { label, classNames, linkClick } ) => {

  return (
    <li className="nav-item">
      <Link className={`nav-link  + ${classNames}`}
        onClick={LinkClick}
        data-toggle="tab"
        to={`/grounding/${label.toLowerCase()}`}>{label}</Link>
    </li>
  )


};

export default NavItem;