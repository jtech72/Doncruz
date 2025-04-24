import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.png'
import vector1 from '../../assets/Vector1.png'
import vector2 from '../../assets/Vector2.png'
import vector3 from '../../assets/Vector3.png'
import vector4 from '../../assets/Vector4.png'
import { motion } from "framer-motion";
import { gsap } from 'gsap';
import tequila from '../../assets/tequila.png'


import { Link } from 'react-router-dom';

const Logo = () => {


    
  return (
  <>
     <Link className="nav-link text-dark active" to="/">{/* <div className="navbar-brand mx-auto">                    <img src={logo} alt="Logo" className="add_logo_size " />                  </div> */}                  {/* <section class="cubecontainer" >                      <div id="cube">                      <figure class="front"></figure>                      <figure class="back"></figure>                      <figure class="right"></figure>                      <figure class="left"></figure>                      <div class="acvtive"></div>                       </div>                  </section>  */}                  {/* <div class="animated-image">                  <img src={vector1} alt="Logo" className="add_logo_size" />                  <img src={vector2} alt="Logo" className="add_logo_size" />                  <img src={vector3} alt="Logo" className="add_logo_size" />                  <img src={vector4} alt="Logo" className="add_logo_size" />                   </div> */}                  {/* <div className="relative w-[160px] h-[160px] mx-auto mt-20">                    <motion.img src={vector1} alt="Top Left"                    {...commonProps} initial={{ x: -100, y: -100, opacity: 0 }}/>                    <motion.img src={vector2} alt="Top Right"                    {...commonProps} initial={{ x: 100, y: -100, opacity: 0 }}/>                   <motion.img src={vector3} alt="Bottom Left"                    {...commonProps} initial={{ x: -100, y: 100, opacity: 0 }}/>                   <motion.img src={vector4} alt="Bottom Right"                    {...commonProps} initial={{ x: 100, y: 100, opacity: 0 }}/>  </div> */}
                  <div className='position-relative d-flex justify-content-center'>
                    <div className='position-relative'><div className="animate__animated animate__fadeInDown rotate-360">
                      <img src={vector1} className='img_logo' alt="" /> </div><div className="animate__animated animate__fadeInDown animate__delay-1s rotate-360">
                        <img src={vector2} className='img_logo' alt="" /></div></div> <div className='d-flex justify-content-center position-absolute mt-2'>
                      <div className="animate__animated animate__fadeInUp animate__delay-2s rotate-360"><img src={vector3} className='img_logo' alt="" /></div>
                      <div className="animate__animated animate__fadeInUp animate__delay-3s rotate-360"><img src={vector4} className='img_logo' alt="" /></div></div></div>

                  <div className='mt-2'>
                    <img src={tequila} className='' alt="" />
                  </div>
                </Link>
  </>
  )
}

export default Logo