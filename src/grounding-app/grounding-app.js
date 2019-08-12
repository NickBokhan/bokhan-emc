import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GroundingAppNav from './grounding-app-nav';
import Simple from './simple/simple';


const GroundingApp = () => {


    return (
        
            <div>
                <GroundingAppNav/>

                <Route path='/grounding/simple' 
                    component={Simple} />

                
                
            </div>
        
    )
}