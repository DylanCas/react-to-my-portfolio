import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    margin: 20,
    
  },
  formBox: {
    display: 'flex',
    flexDirection: 'column',
  }
};

// Form captures data. Validates content. Bonus TODO: sends data to server/email.
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
    <div style={styles.content}>
      <h1 style={styles.header}>Contact Me</h1>
      <form id='contact-form' style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.formBox}>
          Name*:
          <input type="text" name="Name" onBlur={handleChange} />
        </label>
        <label style={styles.formBox}>
          Email*:
          <input type="text" name="Email" required="true" onBlur={handleChange} />
        </label>
        <label style={styles.formBox}>
          Message*:
          <textarea name="Message" rows="5" onBlur={handleChange}/>
        </label>
        <p>{errorMessage}</p>
        <button type='submit'>Submit</button>
      </form>
      <div style={styles.form}>
        <ul>
          <li>Email: <a href='mailto:djcasabona12@gmail.com'>djcasabona12@gmail.com</a></li>
          <li>GitHub: <a href='https://github.com/DylanCas' target={'_blank'} rel="noreferrer">DylanCas</a></li>
        </ul>
      </div>
    </div>
  );
}
