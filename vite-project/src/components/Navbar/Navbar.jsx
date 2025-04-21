import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'


import { Link } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
  className={`navbar navbar-expand-md navbar-light text-dark py-md-3 py-2 position-fixed w-100 navbar-custom ${scrolled ? 'scrolled' : ''}`}
  style={{ zIndex: 9999 }}
>
<div className="container">
      {/* Navbar brand and toggler for mobile */}
      <div className="d-flex w-100 justify-content-between align-items-center d-md-none position-relative">
  <a
    className="navbar-brand pt-4 position-absolute start-50 translate-middle-x"
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
              <li className="nav-item ps-md-5 pe-0">
                <a className="nav-link add_font_size_nav text-dark active ps-md-4 ps-0" href="#">Home</a>
              </li>
              <li className="nav-item ps-md-4 ps-0">
                <a className="nav-link add_font_size_nav text-dark active" href="#">About Us</a>
              </li>
            </ul>
          </div>

          {/* Center logo (hidden in mobile and shown above) */}
          <div className="col-md-4 text-center ps-md-0 ps-0 d-none d-md-block">
            <a className="nav-link text-dark active" href="#">
              <div className="navbar-brand mx-auto">
                <img src={logo} alt="Logo" className="add_logo_size" />
              </div>
            </a>
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