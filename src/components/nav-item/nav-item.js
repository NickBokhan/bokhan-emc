import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavItem extends Component {

  // state = {
  //   active: false
  // }

  render() {
    
    return (



      <ul className="nav nav-tabs">
        {
          this.props.items.map((item, index) => 
            <li className="nav-item" key={index}>
              <Link className={`${item.className}`}
                // onClick={this.props.linkClick}
                data-toggle="tab"
                key={index}
                to={`/grounding${item.link}`}
              >
                {item.label}
              </Link>
            </li >
          )
        }
      </ul>





    )
  }
};