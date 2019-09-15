import React from 'react';
import { Route } from 'react-router-dom';

import GroundingApp from '../grounding-app';
import Simple from '../grounding-app/simple';
import EmcApp from '../emc-app/emc-app';
import Raw from '../grounding-app/raw';
import Soil from '../grounding-app/soil';

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
      <Route path='/emc'
        component={EmcApp}
      />

      <Route path='/grounding/soil'
        component={Soil}
      />
      <Route path='/grounding/simple'
        component={Simple}
      />
      <Route path='/grounding/raw'
        component={Raw}
      />
    </div>
  )
};

export default Router;