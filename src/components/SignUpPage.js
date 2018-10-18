import React from 'react';
import {reduxForm, Field} from 'redux-form';
import './LoginPage.css';

export function SignUpPage() {
  return(
    <div>
      <form className="loginForm">
      <Field className="formField" name="username" id="username" placeholder="username" component="input" />
      <Field className="formField" name="email" id="email" placeholder="email" component="input" />
      <Field className="formField" name="password" id="password" placeholder="password" component="input" />
      <Field className="formField" name="password" id="password" placeholder="password" component="input" />
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'SignUp',
})(SignUpPage);