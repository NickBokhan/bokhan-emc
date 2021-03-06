import React from 'react';

import './simple.css';
import Vertical from './vertical';
import Horizontal from './horizontal';

const Simple = () => {


    return (
        <div id="myTabContent" className="tab-content">
          <div  className="tab-pane fade active show" id="simple">
            <div className='calculation-area d-flex'>
              <div className='calculation-container'>
                <Vertical/>
              </div>
              <div className='calculation-container'>
                <Horizontal/>
              </div>
            </div>
          </div>
        </div>         
    )
};



export default Simple;