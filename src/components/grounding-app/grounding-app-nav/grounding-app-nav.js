import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './grounding-app-nav.css';

import NavItem from '../../nav-item';



export default class GroundingAppNav extends Component {

  state = {
    activeTab: 1
  }

  onLinkClick = (e) => {
    console.log(e.target);
    e.target.className += " active";
    this.setState({
      activeTab: `${e.target.id}`
    });
  };
  render() {
    const { activeTab } = this.props;




    return (

      <div>
        <ul className="nav nav-tabs">
          <NavItem lebel='Soil'
            classNames='nav-link'
            linkClick={this.onLinkClick} />

          <NavItem lebel='Simple'
            classNames='nav-link'
            linkClick={this.onLinkClick} />

          <NavItem lebel='Raw'
            classNames='nav-link'
            linkClick={this.onLinkClick} />

          <NavItem lebel='Square'
            classNames='nav-link'
            linkClick={this.onLinkClick} />

          <NavItem lebel='Custom'
            classNames='nav-link'
            linkClick={this.onLinkClick} />

          <NavItem lebel='Cross Section'
            classNames='nav-link'
            linkClick={this.onLinkClick} />

          <NavItem lebel='Mistakes'
            classNames='nav-link'
            linkClick={this.onLinkClick} />
        </ul>
      </div>

    )
  }
}

