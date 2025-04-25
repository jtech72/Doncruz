import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

import logo from '../../assets/logo.png';
import vector1 from '../../assets/logocard1.png';
import vector2 from '../../assets/logocard2.png';
import vector3 from '../../assets/logocard3.png';
import vector4 from '../../assets/logocard4.png';
import tequila from '../../assets/tequila.png';

const Logo = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Link
        className={`nav-link text-dark active main_bg position-fixed mb-2 mb-md-0 w-100 ${scrolled ? 'scrolled' : ''}`}
        style={{ zIndex: '9999' }}
        to="/"
      >

        <div className="position-relative d-flex justify-content-center logo_back">
          <div className="position-relative">
            <div className="animate__animated animate__fadeInDown rotate-360">
              <img src={vector1} className="img_logo mt-2" alt="Vector 1" />
            </div>
            <div className="animate__animated animate__fadeInDown animate__delay-1s rotate-360 d-flex align-items-start">
              <img src={vector2} className="img_logo" alt="Vector 2" />
            </div>
          </div>

          <div className="d-flex justify-content-center position-absolute mt-2">
            <div className="animate__animated animate__fadeInUp animate__delay-2s rotate-360">
              <img src={vector3} className="img_logo2" alt="Vector 3" />
            </div>
            <div className="animate__animated animate__fadeInUp animate__delay-3s rotate-360">
              <img src={vector4} className="img_logo2" alt="Vector 4" />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Logo;
