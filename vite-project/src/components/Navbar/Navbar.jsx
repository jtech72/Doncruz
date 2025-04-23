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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const overlayRef = useRef(null);
  const introLogoRef = useRef(null);
  const navbarLogoRef = useRef(null);

  const [showOverlay, setShowOverlay] = useState(true);

  // const overlayRef = useRef(null);
  // const introLogoRef = useRef(null);
  // const navbarLogoRef = useRef(null);

  // const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const runAnimation = () => {
      if (!introLogoRef.current || !navbarLogoRef.current || !overlayRef.current) return;

      const targetRect = navbarLogoRef.current.getBoundingClientRect();

      const tl = gsap.timeline({
        onComplete: () => {
          setShowOverlay(false);
          document.body.classList.add('intro-done');
        },
      });

      tl.fromTo(
        introLogoRef.current,
        {
          scale: 0,
          opacity: 0,
          filter: 'blur(10px)',
          rotation: 0,
        },
        {
          scale: 1.2,
          opacity: 1,
          duration: 1.5,
          ease: 'power4.out',
          filter: 'blur(0px)',
          rotation: 360, // 👈 ROTATION ADDED HERE
        }
      )
        .to(introLogoRef.current, {
          scale: 0.3,
          x: targetRect.left + targetRect.width / 2 - window.innerWidth / 2,
          y: targetRect.top + targetRect.height / 2 - window.innerHeight / 2,
          duration: 1,
          ease: 'power2.inOut',
        })
        .to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              document.body.style.overflow = 'auto';
            },
          },
          '-=0.4'
        );
    };

    const timeout = setTimeout(runAnimation, 100);

    return () => clearTimeout(timeout);
  }, []);


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [animate, setAnimate] = useState(false); useEffect(() => { const timeout = setTimeout(() => setAnimate(true), 100); return () => clearTimeout(timeout); }, []); const duration = 1.2; const commonProps = { initial: { opacity: 0 }, animate: animate ? { x: 0, y: 0, opacity: 1 } : {}, transition: { duration }, className: "absolute w-[80px] h-[80px]", }; return (
    <>
      <nav
        className={`navbar navbar-expand-md navbar-light text-dark py-md-3 py-md-4 py-4 position-fixed w-100 navbar-custom ${scrolled ? 'scrolled' : ''}`}
        style={{ zIndex: 9999 }}
      >
        <div className="container">
          {/* Navbar brand and toggler for mobile */}
          <div className="d-flex w-100 justify-content-between align-items-center d-md-none position-relative">
            <a
              className="navbar-brand pt-0 position-absolute start-50 translate-middle-x"
              href="#"
            >
              <img src={logo} alt="Logo" className="add_logo_size" />
            </a>
            <button
              className="navbar-toggler border-0 shadow-none ms-auto"
              type="button"
              onClick={toggleNavbar}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>


          {/* Collapse div controlled by state */}
          <div className={`collapse navbar-collapse d-md-block ${isOpen ? 'show' : ''}`} id="navbarContent">
            <div className="row mx-auto w-100 align-items-center ps-md-5 ps-0">
              {/* Left links */}
              <div className="col-md-4 ps-md-5 ps-0">
                <ul className="navbar-nav d-flex flex-md-row flex-column justify-content-start ps-md-5 ps-0">
                  <li className="nav-item ps-md-5 pe-0 ps-md-4 ps-0 pe-md-5 pe-0">
                    <Link className="nav-link add_font_size_nav text-dark active " to="/">Home</Link>
                  </li>
                  <li className="nav-item ps-md-4 ps-0">
                    <a className="nav-link add_font_size_nav text-dark active" href="#">About Us</a>
                  </li>
                </ul>
              </div>

              {/* Center logo (hidden in mobile and shown above) */}
              <div className="col-md-4 text-center ps-md-0 ps-0 d-none d-md-block">
                <Link className="nav-link text-dark active" to="/">{/* <div className="navbar-brand mx-auto">                    <img src={logo} alt="Logo" className="add_logo_size " />                  </div> */}                  {/* <section class="cubecontainer" >                      <div id="cube">                      <figure class="front"></figure>                      <figure class="back"></figure>                      <figure class="right"></figure>                      <figure class="left"></figure>                      <div class="acvtive"></div>                       </div>                  </section>  */}                  {/* <div class="animated-image">                  <img src={vector1} alt="Logo" className="add_logo_size" />                  <img src={vector2} alt="Logo" className="add_logo_size" />                  <img src={vector3} alt="Logo" className="add_logo_size" />                  <img src={vector4} alt="Logo" className="add_logo_size" />                   </div> */}                  {/* <div className="relative w-[160px] h-[160px] mx-auto mt-20">                    <motion.img src={vector1} alt="Top Left"                    {...commonProps} initial={{ x: -100, y: -100, opacity: 0 }}/>                    <motion.img src={vector2} alt="Top Right"                    {...commonProps} initial={{ x: 100, y: -100, opacity: 0 }}/>                   <motion.img src={vector3} alt="Bottom Left"                    {...commonProps} initial={{ x: -100, y: 100, opacity: 0 }}/>                   <motion.img src={vector4} alt="Bottom Right"                    {...commonProps} initial={{ x: 100, y: 100, opacity: 0 }}/>  </div> */}  
                <div className='position-relative d-flex justify-content-center'>
                   <div className='position-relative'><div className="animate__animated animate__fadeInDown rotate-360">
                    <img src={vector1} alt="" /> </div><div className="animate__animated animate__fadeInDown animate__delay-1s rotate-360">
                       <img src={vector2} alt="" /></div></div> <div className='d-flex justify-content-center position-absolute mt-2'>
                        <div className="animate__animated animate__fadeInUp animate__delay-2s rotate-360"><img src={vector3} alt="" /></div>
                        <div className="animate__animated animate__fadeInUp animate__delay-3s rotate-360"><img src={vector4} alt="" /></div></div></div>

                        <div className='mt-2'>
                          <img src={tequila } alt="" />
                        </div>
                      </Link>
              </div>

              {/* Right links */}
              <div className="col-md-4">
                <ul className="navbar-nav d-flex flex-md-row flex-column justify-content-end pe-md-5 pe-0">
                  <li className="nav-item ps-md-3 pe-md-5 pe-0">
                    <a className="nav-link add_font_size_nav text-dark active" href="#">Collections</a>
                  </li>
                  <li className="nav-item ps-md-4 ps-0">
                    <a className="nav-link add_font_size_nav text-dark active pe-md-5 pe-0" href="#">Experience</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>


    </>



  )
}

export default Navbar