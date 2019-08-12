import React from 'react';
import { Link } from 'react-router-dom';

import './grounding-app-nav.css';



const GroundingAppNav = () => {
  return (
        
    <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" 
                  data-toggle="tab" 
                  to='/grounding/soil'>Soil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" 
                  data-toggle="tab" 
                  to='/grounding/simple'>Simple</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" 
                  data-toggle="tab" 
                  to='/grounding/raw'>Raw</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" 
                  to='/grounding/square'>Square</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" 
                  to='/grounding/custom'>Custom</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" 
                  to='/grounding/mistakes'>Mistakes</Link>
          </li>
        </ul>
      </div>
    
  )
}
        
export default GroundingAppNav;