import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import './LoginPage.css';
import {required, nonEmpty, email} from '../validators';


export class SignUpPage extends React.Component {

  onSubmit(values) {
    return fetch('/api/messages', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    }) 
    
  }

  render() {
    return(
      <div>
        <form className="loginForm">
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
}

export default reduxForm({
  form: 'SignUp',
})(SignUpPage);