import React from 'react';

import NavBar from '../nav/nav-bar';

const groundingMenu = [
  {
    label: 'Soil',
    link: 'soil',
    className: 'nav-link'
  },
  {
    label: 'Simple',
    link: 'simple',
    className: 'nav-link'
  },
  {
    label: 'Raw',
    link: 'raw',
    className: 'nav-link'
  },
  {
    label: 'Square',
    link: 'square',
    className: 'nav-link'
  },
  {
    label: 'Custom',
    link: 'custom',
    className: 'nav-link'
  },
  {
    label: 'Natural',
    link: 'natural',
    className: 'nav-link'
  },
  {
    label: 'Cross section',
    link: 'cross-section',
    className: 'nav-link'
  },
  {
    label: 'Mistakes',
    link: 'mistakes',
    className: 'nav-link'
  }
]

const GroundingApp = () => {

  return (
    <div>
      <NavBar menuSend={groundingMenu} />
    </div>
  )
}

export default GroundingApp;