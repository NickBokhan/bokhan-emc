import React, { useState } from 'react';

import NavItem from './nav-item';

import groundingMenu from '../grounding-app/grounding-menu';
import emcMenu from '../emc-app/emc-menu';

const addStyles = ( menuList ) => {
  menuList.forEach( item => {
    item.className = 'nav-link';
  } );
  menuList[0].className = 'nav-link active';
  return menuList;
}

const menu = {
  grounding: addStyles(groundingMenu),
  emc: addStyles(emcMenu)
}

const NavBar = ( {page} ) => {

  const [ activeTab, setActiveTab ] = useState('soil');

  const onLinkClick = (e) => {

    menu[`${page}`].forEach((item) => {
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
      <NavItem items={menu[`${page}`]}
        section={page}
        linkClick={onLinkClick}
      />
    </div>
  )
}

export default NavBar;