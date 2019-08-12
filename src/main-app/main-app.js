import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './main-app.css';

import Header from '../header';
import GroundingApp from '../grounding-app';



const MainApp = () => {


  return (
    <Router>
      <div className="main-app">
        < Header/>
        <Route path='/' 
               render={() => <h3>My name is Nick Bokhan</h3>} 
               exact/>
        <Route path='/grounding' component={GroundingApp} />
        
        
      </div>
    </Router>
    

  )

};

export default MainApp;