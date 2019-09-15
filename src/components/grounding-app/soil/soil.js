import React from 'react';

import SoilData from './soil-data';

const Soil = () => {


    return (
        <div id="myTabContent" className="tab-content">
          <div  className="tab-pane fade active show" id="simple">
            <div className='calculation-area d-flex'>
              <div className='calculation-container'>
                <SoilData/>
              </div>
            </div>
          </div>
        </div>         
    )
};



export default Soil;