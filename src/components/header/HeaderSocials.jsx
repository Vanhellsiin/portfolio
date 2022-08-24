import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ggimenez-tag" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Vanhellsiin" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/gas.gimenez" target="_blank" rel="noreferrer"><FaInstagramSquare/></a>
    </div>
  )
}

export default HeaderSocials