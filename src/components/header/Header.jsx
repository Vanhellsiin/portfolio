import React from 'react'
import './header.css'
import CTA from './CTA'
// import image1 from '../../assets/image1.png'
import HeaderSocials from './HeaderSocials';
import code from '../../assets/code.mp4'

const Header = () => {
  return (
    <>
    <video className="background" muted autoPlay loop src={code} />
          {/* <div className='background'>
            <img src={image1} alt="img"/>
         </div> */}
    
      <header>
        <div className="container header__container">
         <h5>Hello I´m</h5>
          <h1>Gaston Gimenez</h1>
          <h5 className="text-ligth"> Fullstack Developer</h5>
         <CTA />
         
         

         <a href='#contact'>
           <div className='scroll__down' Scroll Down></div>
         </a>
         <HeaderSocials/>
       </div>
     </header>

     </>
  )
}

export default Header