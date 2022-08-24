import React from 'react';

import ritual from '../../assets/ritual.jpg'
import tech from '../../assets/tech.png'
import countries from '../../assets/countries.jpg'
import food from '../../assets/food.jpg'


import { BsGithub } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';

import './portfolio.css';

const Portfolio = () => {
  

  const data = [
    {
      id: 1,
      image: ritual,
      title: 'E-Commerce Ritual',
      description: 'It is a cosmetics store where you can search, filter, create and buy products. It was made with HTML, CSS, React-Redux, Node and sequelize.',
      github: 'https://github.com/Vanhellsiin/e-commerce-Ritual',
      demo: 'https://pg-final3.vercel.app'
    },
    {
      id: 2,
      image: tech,
      title: 'E-Commerce unknowncoder',
      description: 'Online store of technological products in which one can search, filter, create and buy products. It was made with HTML, CSS, React-Redux, Node and sequelize. Authentication technologies such as Auth0 and Stripe were also used to manage the payment system.',
      github: 'https://github.com/Vanhellsiin/tech-ecommerce',
      demo: 'https://unknowncoder.vercel.app'
    },
    {
      id: 3,
      image: countries,
      title: 'Countries App',
      description: 'It is a SPA (Single Page Application) in which we can filter countries by population, size and we can also create tourist activities for each of them. It was made with HTML, CSS, React-Redux, Node and sequelize.', 
      github: 'https://github.com/Vanhellsiin/PI-countries',
      demo: 'https://client-demo12.vercel.app'
    },
    {
      id: 4,
      image: food,
      title: 'Food App',
      description: 'It is a SPA (Single Page Application) in which we can create recipes to our liking, we can also filter, sort and select a large number of existing recipes. It was made with HTML, CSS, React-Redux, Node and sequelize.',
      github: 'https://github.com/Vanhellsiin/PI-FOOD',
      demo: ''
    }
    
  ]

  console.log(data)
  return (
    <section id='portfolio' className='portfolio__section'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, description, github, demo}) => {
            
            return (
              <article className='portfolio__item' key={id}>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>
      
                <h3>{title}</h3>
                <p>{description}</p>
      
                <div className='portfolio__item-cta'>
                  {
                    /* !github ? console.log("no tiene github") : console.log("si tiene github") */
                  }
                  <a href={github} className='btn' target='_blank' rel="noreferrer"> <BsGithub/> </a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer"> <TbWorld/> </a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;