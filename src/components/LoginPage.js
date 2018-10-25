import React from 'react';
import {reduxForm, Field} from 'redux-form';
import './LoginPage.css';
import {Link} from 'react-router-dom';
import {logIn} from '../actions/hands.actions';
import {required, nonEmpty} from '../validators';

export function LoginPage(props) {
  return (
    <div>
      <h1 className="logo">Stud Poker</h1>
      <form className="loginForm" onSubmit={props.handleSubmit}>
      <h2>Login</h2>
      <Field 
        className="formField" 
        type="text" 
        name="username" 
        id="username" 
        placeholder="username" 
        component="input" 
        validate={[required, nonEmpty]}
        />
      <Field 
        className="formField" 
        type="password" 
        name="password" 
        id="password" 
        placeholder="password" 
        component="input" 
        validate={[required, nonEmpty]}
        />
      <button type="submit" className="button">Login</button>
      <Link to='/signup'>sign up</Link>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'Login',
  onSubmit: (values, dispatch) => { return dispatch(logIn(values))}
})(LoginPage);