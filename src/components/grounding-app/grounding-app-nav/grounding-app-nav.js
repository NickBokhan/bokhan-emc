import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './grounding-app-nav.css';

import NavItem from '../../nav-item';

const groundingMenu = [
  {
    label: 'Soil',
    link: '/soil',
    className: 'nav-link'
  },
  {
    label: 'Simple',
    link: '/simple',
    className: 'nav-link'
  },
  {
    label: 'Raw',
    link: '/raw',
    className: 'nav-link'
  },
  {
    label: 'Square',
    link: '/square',
    className: 'nav-link'
  },
  {
    label: 'Custom',
    link: '/custom',
    className: 'nav-link'
  },
  {
    label: 'Natural',
    link: '/natural',
    className: 'nav-link'
  },
  {
    label: 'Cross section',
    link: '/cross-section',
    className: 'nav-link'
  },
  {
    label: 'Mistakes',
    link: '/mistakes',
    className: 'nav-link'
  }
]

export default class GroundingAppNav extends Component {

  // state = {
  //   className: 'nav-link',
  //   prevEvent: ''
  // }

  // onLinkClick = (e) => {
  //   console.log(2, this.state.className);
  //   this.setState({
  //     prevEvent: e
  //   });
  //   console.log(3, this.state.className);
  //   e.target.className = "nav-link active";

  // };

  render() {

    return (

      <div>
        

          <NavItem items={groundingMenu} />

        
      </div>

    )
  }
}

