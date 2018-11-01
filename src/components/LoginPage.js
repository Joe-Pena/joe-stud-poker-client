import React from 'react';
import {reduxForm, Field} from 'redux-form';
import './LoginPage.css';
import {Link} from 'react-router-dom';
import {logIn} from '../actions/hands.actions';
import {required, nonEmpty} from '../validators';
import logo from '../images/studPokerFull.png';

export function LoginPage(props) {
  return (
    <div className="loginsignupContainer">
      <img className="logo" alt="Stud Poker" src={logo}/>
      <form className="loginForm" onSubmit={props.handleSubmit}>
        <h2 className="message">Welcome!</h2>
          <Field 
            className="formField username" 
            type="text" 
            name="username" 
            id="username" 
            placeholder="username" 
            component="input" 
            validate={[required, nonEmpty]}
            />
          <Field 
            className="formField password" 
            type="password" 
            name="password" 
            id="password" 
            placeholder="password" 
            component="input" 
            validate={[required, nonEmpty]}
            />
          <button type="submit" className="LloginBtn">Login</button>
        <Link className="signupLink" to='/signup'>sign up</Link>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'Login',
  onSubmit: (values, dispatch) => { return dispatch(logIn(values))}
})(LoginPage);