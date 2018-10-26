import React from 'react';
import './LoginPage.css';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import {Route} from 'react-router-dom';
// import { LandingPage } from './LandingPage';

export default function welcomePage() {
  return (
    <div>
      {/* <Route exact path='/' component={LandingPage} /> */}
      <Route exact path='/' component={LoginPage} />
      <Route exact path='/signup' component={SignUpPage} />
    </div>
  )
};