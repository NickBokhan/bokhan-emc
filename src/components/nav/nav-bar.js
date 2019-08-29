import React, { useState } from 'react';

import NavItem from './nav-item';

import menu from '../grounding-app/grounding-menu';

menu.forEach( item => {
  item.className = 'nav-link';
} );
menu[0].className = 'nav-link active';

const NavBar = () => {

  const [ activeTab, setActiveTab ] = useState('soil');

  const onLinkClick = (e) => {

    menu.forEach((item) => {
      if (item.link === activeTab) {
        item.className = 'nav-link';
      };
      if (item.link === e.target.name) {
        item.className = 'nav-link active';
      }
    });

    setActiveTab(e.target.name);
  }

  return (
    <div>
      <NavItem items={menu}
        //  section='grounding'
        linkClick={onLinkClick}
      />
    </div>
  )
}

export default NavBar;