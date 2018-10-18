import React from 'react';
import {reduxForm, Field} from 'redux-form';
import './LoginPage.css';
import { SignUpPage } from './SignUpPage';

export function LoginPage() {
  return (
    <div>
      <form className="loginForm">
      <Field className="formField" name="username" id="username" placeholder="username" component="input" />
      <Field className="formField" name="password" id="password" placeholder="password" component="input" />
      <button className="button">Login</button>
      </form>
      <button onClick={() => <SignUpPage />}>sign up</button>
    </div>
  )
}

export default reduxForm({
  form: 'Login'
})(LoginPage);