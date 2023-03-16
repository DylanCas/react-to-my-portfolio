import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const styles = {
  header: {
    textAlign: 'center',
  }
};

// TODO: Form captures data. Validates content. Bonus TODO: sends data to server/email.
export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' }); 

  const [errorMessage, setErrorMessage] = useState('');
  const {name, email, message } = formState;

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log("Form Submitted", formState);
  }

  const handleChange = (e) => { 
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  }

  return (
    <div>
      <h1 style={styles.header}>Contact Me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onBlur={handleChange} />
        </label>
        <label>
          Email*:
          <input type="text" name="email" required="true" onBlur={handleChange} />
        </label>
        <label>
          Message:
          <textarea name="message" rows="5" onBlur={handleChange}/>
        </label>
        <p>{errorMessage}</p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
