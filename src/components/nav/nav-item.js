import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ( props ) => {

  return (

      <ul className="nav nav-tabs">
        {
          props.items.map((item, index) =>
            <li className="nav-item" key={index}>
              <Link className={item.className}
                //onClick={props.linkClick}
                data-toggle="tab"
                key={item.link}
                //name={item.link}
                to={`/grounding${item.link}`}
              >
                {item.label}
              </Link>
            </li >
          )
        }
      </ul>
    )
};

export default NavItem;