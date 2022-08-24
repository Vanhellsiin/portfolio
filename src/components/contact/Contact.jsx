import React, { useRef, useEffect } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';





import './contact.css';

const Contact = () => {
  
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')

    // Find User ID in "Integration" ----> "API KEYS" 

    emailjs.sendForm('service_f9vkx4o', 'template_82ym7fl', form.current, 'UWMwv31JPsl_8WPl2')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      e.target.reset();
      alert("Your message has been sent")
  };


  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options' >
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>gimemezgaston@gmail.com</h5>
            <a href='mailto:gimemezgaston@gmail.com' target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+54 221 3643110</h5>
            <a href='https://api.whatsapp.com/send/?phone=2213643110&text&app_absent=0' target='_blank' rel='noreferrer'>Contact me</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder="Your Full Name" required/>   
          <input type='email' name='email' placeholder="You Email" required/> 
          <textarea name='message' rows='7' placeholder="Your message" required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      
    </section>
    
  );
};

export default Contact;