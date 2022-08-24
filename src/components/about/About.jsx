import React from 'react';
import image from '../../assets/image.jpg';

import './about.css';

const About = () => {
  // const { i18n, t } = useTranslation(["about"]);

  // useEffect(() => {
  //   if (localStorage.getItem("i18nextLng")?.length > 2) {
  //     i18next.changeLanguage("en");
  //   }

  //   Aos.init({ duration: 1000 });
  // }, []);

  return (
    <section id='about' >
      <div className='space1'></div>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={image} alt="About-Gaston-Gimenez"/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            {
              /*
            <article className='about__card'>
              <FaAward/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article> 
              */
            }
            
            <p>
              Hi there!!! My name is Gastón Gimenez and I'm a Full Stack Developer, passionate about technology, economy and continuous learning. In my free time I enjoy listening to music, exercising outdoors and learning some new technology and/or skill.
              <br/>
              <br/>
              I discovered my passion for coding several years ago but it wasn't until 2020 that I decided to dedicate most of my time to learn and improve my skills as a developer. Without a doubt, this is the field in which I want to develop professionally.
           </p>

            <a href='#contact' className='btn btn-primary'>Let´s talk</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;