import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_95g1i6u',        // Replace with your actual Service ID
      'template_t52n4i9',       // Replace with your actual Template ID
      form.current,
      '3jFpbBhobIrI9qJDy'         // Replace with your Public Key (not secret key!)
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message. Try again.');
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
