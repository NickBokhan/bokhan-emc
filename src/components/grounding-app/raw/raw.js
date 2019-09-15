import React from 'react';

import RawData from './raw-data';

const Raw = () => {


    return (
        <div id="myTabContent" className="tab-content">
          <div  className="tab-pane fade active show" id="simple">
            <div className='calculation-area d-flex'>
              <div className='calculation-container'>
                <RawData/>
              </div>
            </div>
          </div>
        </div>         
    )
};



export default Raw;