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
import Logo from './Logo';

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const introLogoRef = useRef(null);
  const navbarLogoRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [animate, setAnimate] = useState(false); useEffect(() => { const timeout = setTimeout(() => setAnimate(true), 100); return () => clearTimeout(timeout); }, []); const duration = 1.2; const commonProps = { initial: { opacity: 0 }, animate: animate ? { x: 0, y: 0, opacity: 1 } : {}, transition: { duration }, className: "absolute w-[80px] h-[80px]", };

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

  return (
    <>
      <nav
        // className={`navbar navbar-expand-md navbar-light text-dark py-md-3 py-md-4 py-4 position-fixed w-100 navbar-custom ${scrolled ? 'scrolled' : ''}`}
        style={{ zIndex: 9999 }}>
        <div className="container">
          <div className="d-flex w-100 justify-content-between align-items-center d-md-none position-relative">
          </div>
          <div className={`collapse navbar-collapse d-md-block ${isOpen ? 'show' : ''}`} id="navbarContent">
            <div className="row mx-auto w-100 align-items-center ps-md-5 ps-0">
              <div className="col-md-4 ps-md-5 ps-0">
                <ul className="navbar-nav d-flex flex-md-row flex-column justify-content-start ps-md-5 ps-0">
                  <li className="nav-item ps-md-5 pe-0 ps-md-4 ps-0 pe-md-5 pe-0">
                    {/* <Link className="nav-link add_font_size_nav text-dark active " to="/">Home</Link> */}
                    <li><a href="#">Home</a></li>

                  </li>
                  {/* <li className="nav-item ps-md-4 ps-0">
                    <a className="nav-link add_font_size_nav text-dark active" href="#">Collections </a>
                  </li> */}
                  <li><a href="#colletions">Collections</a></li>

                </ul>
              </div>
              <div className="col-md-4 text-center ps-md-0 ps-0 d-none d-md-block ">
              </div>
              <div className="col-md-4">
                <ul className="navbar-nav d-flex flex-md-row flex-column justify-content-end pe-md-5 pe-0">
                  {/* <li className="nav-item ps-md-3 pe-md-5 pe-0">
                    <a className="nav-link add_font_size_nav text-dark active" href="#">Experience</a>
                  </li> */}
                  <li><a href="#Experience">Experience</a></li>

                  {/* <li className="nav-item ps-md-4 ps-0">
                    <a className="nav-link add_font_size_nav text-dark active pe-md-5 pe-0" href="#"> About Us</a>
                  </li> */}
                  <li><a href="#aboutus">About us</a></li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#colletions">Collections</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#aboutus">About us</a></li>
        </ul> */}
      </nav>

      <nav>

      </nav>

    </>
  )
}
export default Navbar
