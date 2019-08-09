import React from 'react';

import './grounding-app.css';

const GroundingApp = () => {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link disabled" data-toggle="tab" href="#ro">Soil</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#simple">Simple</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" data-toggle="tab" href="#profile">Raw</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Square</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Custom</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Mistakes</a>
        </li>
      </ul>
      <div id="myTabContent" className="tab-content">
        <div  className="tab-pane fade active show" id="simple">
          <div className='calculation-area d-flex'>
            <div className='calculation-container'>
              vertical
            </div>
            <div className='calculation-container'>
              horizontal
            </div>
          </div>
        </div>

      </div>
    </div>


  );
};


export default GroundingApp;