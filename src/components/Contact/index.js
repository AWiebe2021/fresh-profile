import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        console.log('Submit Form', formState);
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
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
    };

  return (
    <section class="contact" id="contact">
      <h1 class="heading"> <span>contact</span> me </h1>
      <div class="row">
        <div class="content">
          <h3 class="title">contact info</h3>
          <div class="info">
            <h3> <i class="fas fa-envelope"></i> awiebe2001@gmail.com </h3>
            <h3> <i class="fas fa-phone"></i> 623-980-5933 </h3>
            <h3> <i class="fas fa-map-marker-alt"></i> Gilbert, Arizona - 85295. </h3>
          </div>              
        </div>


      <form action="">
          <input type="text" placeholder="name" defaultValue={name} onBlur={handleChange} class="box"></input>
          <input type="email" placeholder="email" defaultValue={email} onBlur={handleChange} class="box"></input>
          {/* <input type="text" placeholder="project" class="box"> */}
          <textarea name="message" id="" cols="30" rows="10" class="box message" placeholder="message" defaultValue={message} onBlur={handleChange}></textarea>
          <button type="submit" class="btn"> send <i class="fas fa-paper-plane"></i> </button>
      </form>
      </div>
    </section>
  );
}

export default Contact;
