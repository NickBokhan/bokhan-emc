import React, { Component } from 'react';

import NavItem from './nav-item';

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

export default class NavBar extends Component {

  // state = {
  //   activeTab: ''
  // }

  // onLinkClick = (e) => {

  //   groundingMenu.forEach( (item) => {
  //     if (item.link === this.state.activeTab) {
  //       item.className = 'nav-link';
  //     } else if (item.link === e.target.name) {
  //       item.className = 'nav-link active';
  //     } 
  //   });

  //   this.setState({
  //     activeTab: e.target.name
  //   });
  // }

  render() {

    return (

      <div>
        <NavItem items={groundingMenu}
        //  section='grounding'
        //linkClick={this.onLinkClick}
        />
      </div>
    )
  }
}