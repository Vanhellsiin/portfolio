import React, { useEffect } from 'react';

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';






import './footer.css';

const Footer = () => {

  return (
    <section className='footer' id='footer'>
      <a href='#' className='footer__logo'>GASTON GIMENEZ</a>

      <ul  className='pageLinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/ggimenez-tag' target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/Vanhellsiin' target='_blank' rel="noreferrer"><BsGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>"STAY HUNGRY. STAY FOOLISH"</small>
      </div>
    </section>
  );
};


export default Footer;