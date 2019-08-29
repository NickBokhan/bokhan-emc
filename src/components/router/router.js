import React from 'react';
import { Route } from 'react-router-dom';

import GroundingApp from '../grounding-app';
import Simple from '../grounding-app/simple';

const Router = () => {

  return (
    <div>
      <Route exact
        path='/'
        render={() => <h3>My name is Nick Bokhan</h3>}
      />
      <Route path='/grounding'
        component={GroundingApp}
      />


      <Route path='/grounding/simple'
        component={Simple}
      />
    </div>
  )
};

export default Router;