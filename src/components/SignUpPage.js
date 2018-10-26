import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import './LoginPage.css';
import {required, nonEmpty, email} from '../validators';
import { signUp } from '../actions/hands.actions';
import logo from '../images/studPokerFull.png';


export function SignUpPage (props) {
    return(
      <div>
        <img className="logo" alt="Stud Poker" src={logo}/>
        <form className="signUpForm" onSubmit={props.handleSubmit}>
        <h2 className="message">Sign Up</h2>
        <Field 
          className="formField username" 
          name="username" 
          type="text"
          id="username" 
          placeholder="username" 
          component="input"
          validate={[required, nonEmpty]}
          />
        <Field 
          className="formField email" 
          name="email" 
          type="text"
          id="email" 
          placeholder="email" 
          component="input" 
          validate={[required, nonEmpty, email]}
          />
        <Field 
          className="formField newPassword" 
          name="password" 
          type="password"
          id="password" 
          placeholder="password" 
          component="input" 
          validate={[required, nonEmpty]}
          />
        {/* <Field className="formField" name="password" id="password" placeholder="password" component="input" /> */}
        <button className="signupBtn" type="submit">SignUp</button>
        <Link className="loginLink" to='/'>login</Link>
        </form>
      </div>
    )
}

export default reduxForm({
  form: 'SignUp',
  onSubmit: (values, dispatch) => { return dispatch(signUp(values))}
})(SignUpPage);