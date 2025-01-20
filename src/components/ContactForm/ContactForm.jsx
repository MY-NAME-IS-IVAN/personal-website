import './ContactForm.css';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { IoClose } from 'react-icons/io5';
import { any } from 'prop-types';

const ContactForm = ({ isContactFormOpen, setIsContactFormOpen }) => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert('The message was sent successfully!');
        },
        (error) => {
          alert("Something went wrong... The message wasn't sent");
          console.log('FAILED...', error.text);
        }
      );

    setName('');
    setEmail('');
    setMessage('');
    setIsContactFormOpen(false);
  };
  return (
    <div
      className={`contact-overlay ${isContactFormOpen ? 'active' : 'hidden'}`}
    >
      <IoClose
        className='close-form'
        onClick={() => setIsContactFormOpen(false)}
      />
      <form ref={form} onSubmit={sendEmail}>
        <div className='form-row'>
          <label>Name</label>
          <input
            type='text'
            name='user_name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label>Email</label>
          <input
            type='email'
            name='user_email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label>Message</label>
          <textarea
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type='submit' className='submit-message'>
          Send
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  isContactFormOpen: any,
  setIsContactFormOpen: any,
};

export default ContactForm;
