import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import './LoginPage.css';
import {required, nonEmpty, email} from '../validators';
import { signUp } from '../actions/hands.actions';


export function SignUpPage (props) {
    return(
      <div>
        <h1 className="logo">Stud Poker</h1>
        <form className="loginForm" onSubmit={props.handleSubmit}>
        <h2>Sign Up</h2>
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
        <button type="submit" className="button">SignUp</button>
        <Link to='/'>login</Link>
        </form>
      </div>
    )
}

export default reduxForm({
  form: 'SignUp',
  onSubmit: (values, dispatch) => { return dispatch(signUp(values))}
})(SignUpPage);