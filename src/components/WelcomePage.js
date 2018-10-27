import React from 'react';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
// import LandingPage from './LandingPage';
import {Route} from 'react-router-dom';

export default function WelcomePage() {
  return (
    <div>
      {/* <Route exact path='/' component={LandingPage} /> */}
      <Route exact path='/' component={LoginPage} />
      <Route exact path='/signup' component={SignUpPage} />
    </div>
  )
};