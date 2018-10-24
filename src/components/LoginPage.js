import React from 'react';
import {reduxForm, Field} from 'redux-form';
import './LoginPage.css';
import {Link} from 'react-router-dom';
import {logIn} from '../actions/hands.actions';
import {required, nonEmpty} from '../validators';

export function LoginPage(props) {
  return (
    <div>
      <form className="loginForm" onSubmit={props.handleSubmit}>
      <h1>Login</h1>
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
      <Link to='/signup'>sign up</Link>
      <button type="submit" className="button">Login</button>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'Login',
  onSubmit: (values, dispatch) => { return dispatch(logIn(values))}
})(LoginPage);