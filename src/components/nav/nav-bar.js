import React, { useState } from 'react';

import NavItem from './nav-item';

// const menu = [
//   {
//     label: 'Soil',
//     link: 'soil',
//     className: 'nav-link'
//   },
//   {
//     label: 'Simple',
//     link: 'simple',
//     className: 'nav-link'
//   },
//   {
//     label: 'Raw',
//     link: 'raw',
//     className: 'nav-link'
//   },
//   {
//     label: 'Square',
//     link: 'square',
//     className: 'nav-link'
//   },
//   {
//     label: 'Custom',
//     link: 'custom',
//     className: 'nav-link'
//   },
//   {
//     label: 'Natural',
//     link: 'natural',
//     className: 'nav-link'
//   },
//   {
//     label: 'Cross section',
//     link: 'cross-section',
//     className: 'nav-link'
//   },
//   {
//     label: 'Mistakes',
//     link: 'mistakes',
//     className: 'nav-link'
//   }
// ]

const NavBar = (props) => {

  const [activeTab, setActiveTab] = useState('');

  const menu = props.menuSend.map(elem => {
    return Object.assign({}, elem);
  });

  menu[0].label = 'hush';

  const onLinkClick = (e) => {

    menu.forEach((item) => {
      if (item.link === activeTab) {
        item.className = 'nav-link';
        console.log(4, item.link, item.className);
      };
      if (item.link === e.target.name) {
        item.className = 'nav-link active';
        console.log(5, item.link, item.className);
      }
    });

    setActiveTab(e.target.name);
    console.log(1, menu);
  }
  console.log(2, menu);

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