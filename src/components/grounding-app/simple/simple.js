import React from 'react';

const Simple = () => {


    return (
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
    )
};



export default Simple;