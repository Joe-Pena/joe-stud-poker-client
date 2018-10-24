import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import './LoginPage.css';
import {required, nonEmpty, email} from '../validators';
import { signUp } from '../actions/hands.actions';


export function SignUpPage (props) {
    return(
      <div>
        <form className="loginForm" onSubmit={props.handleSubmit}>
        <h1>Sign Up</h1>
        <Field 
          className="formField" 
          name="username" 
          type="text"
          id="username" 
          placeholder="username" 
          component="input"
          validate={[required, nonEmpty]}
          />
        <Field 
          className="formField" 
          name="email" 
          type="text"
          id="email" 
          placeholder="email" 
          component="input" 
          validate={[required, nonEmpty, email]}
          />
        <Field 
          className="formField" 
          name="password" 
          type="password"
          id="password" 
          placeholder="password" 
          component="input" 
          validate={[required, nonEmpty]}
          />
        {/* <Field className="formField" name="password" id="password" placeholder="password" component="input" /> */}
        <Link to='/'>login</Link>
        <button type="submit" className="button">SignUp</button>
        </form>
      </div>
    )
}

export default reduxForm({
  form: 'SignUp',
  onSubmit: (values, dispatch) => { return dispatch(signUp(values))}
})(SignUpPage);