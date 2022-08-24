import React, { useEffect } from 'react';

import { DiHtml5 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { DiSass } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiMaterialui } from 'react-icons/si';

import { DiNodejsSmall } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { SiJava } from 'react-icons/si';
import { SiSpring } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { SiSequelize } from 'react-icons/si';

import { SiGit } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';

import { BsLightbulbFill } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';
import { BiTimeFive } from 'react-icons/bi';
import { FaUserTie } from 'react-icons/fa';
import { BiBrain } from 'react-icons/bi';
import { MdComputer } from 'react-icons/md';



import './skills.css';

const Skills = () => {
  

  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container skills__container'>
        <div className='skills__frontend'>
          <h3>Frontend Development</h3>
          <article className='skills__details'>
            <DiHtml5 className='skills__details-icon'/>
            <h4>HTML</h4>
            <small className='text-light'>Intermediate</small>
          </article>

          <article className='skills__details'>
            <DiJavascript1 className='skills__details-icon'/>
            <h4>JavaScript</h4>
            <small className='text-light'>Advanced</small>
          </article>

          <article className='skills__details'>
            <DiCss3 className='skills__details-icon'/>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
          </article>

          <article className='skills__details'>
            <DiReact className='skills__details-icon'/>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
          </article>

          <article className='skills__details'>
            <SiRedux className='skills__details-icon'/>
            <h4>Redux</h4>
            <small className='text-light'>Intermediate</small>
          </article>

          <article className='skills__details'>
            <SiBootstrap className='skills__details-icon'/>
            <h4>Bootstrap</h4>
            <small className='text-light'>Intermediate</small>
          </article>

          <article className='skills__details'>
            <SiMaterialui className='skills__details-icon'/>
            <h4>Material UI</h4>
            <small className='text-light'>Basic</small>
          </article>
        </div>



        <div className='skills__backend'>
          <h3>Backend Development</h3>
          <article className='skills__details'>
            <DiNodejsSmall className='skills__details-icon'/>
            <h4>Node js</h4>
            <small className='text-light'>Intermediate</small>
          </article>

          <article className='skills__details'>
            <SiExpress className='skills__details-icon'/>
            <h4>Express js</h4>
            <small className='text-light'>Intermediate</small>
          </article>

          <article className='skills__details'>
            <FaDatabase className='skills__details-icon'/>
            <h4>SQL</h4>
            <small className='text-light'>Intermediate</small>
          </article>

          <article className='skills__details'>
            <SiPostgresql className='skills__details-icon'/>
            <h4>PostgreSQL</h4>
            <small className='text-light'>Intermediate</small>
          </article>

          <article className='skills__details'>
            <SiJava className='skills__details-icon'/>
            <h4>Java</h4>
            <small className='text-light'>Basic</small>
          </article>

          <article className='skills__details'>
            <SiSpring className='skills__details-icon'/>
            <h4>Spring Boot</h4>
            <small className='text-light'>Basic</small>
          </article>

          <article className='skills__details'>
            <SiSequelize className='skills__details-icon'/>
            <h4>Sequelize</h4>
            <small className='text-light'>Basic</small>
          </article>

          <article className='skills__details'>
            <SiPostman className='skills__details-icon'/>
            <h4>Postman</h4>
            <small className='text-light'>Intermediate</small>
          </article>

        </div>

      </div>
    </section>
  );
};

export default Skills;