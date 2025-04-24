import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.png'
import vector1 from '../../assets/logocard1.png'
import vector2 from '../../assets/logocard2.png'
import vector3 from '../../assets/logocard3.png'
import vector4 from '../../assets/logocard4.png'
import { motion } from "framer-motion";
import { gsap } from 'gsap';
import tequila from '../../assets/tequila.png'


import { Link } from 'react-router-dom';

const Logo = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <Link className={`nav-link text-dark active logo_back position-fixed w-100 d-none d-md-block  ${scrolled ? 'scrolled' : ''}`}
                style={{ background: "transparent ", zIndex: "9999 " }} to="/">
                <div className='position-relative d-flex justify-content-center'>
                    <div className='position-relative'><div className="animate__animated animate__fadeInDown rotate-360">
                        <img src={vector1} className='img_logo' alt="" /> </div><div className="animate__animated animate__fadeInDown animate__delay-1s rotate-360">
                            <img src={vector2} className='img_logo' alt="" /></div></div> <div className='d-flex justify-content-center position-absolute mt-2'>
                        <div className="animate__animated animate__fadeInUp animate__delay-2s rotate-360"><img src={vector3} className='img_logo2' alt="" /></div>
                        <div className="animate__animated animate__fadeInUp animate__delay-3s rotate-360"><img src={vector4} className='img_logo2' alt="" /></div></div></div>

                <div className='mt-3 text-center '>
                    <img src={tequila} className='sub_tequila' alt="" />
                </div>
            </Link>
        </>
    )
}

export default Logo