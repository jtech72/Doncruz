import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import Line from '../../../src/assets/Line.png';
import Logo from '../../../src/assets/Logo.svg';
import Inst from '../../../src/assets/inst.svg';
import FB from '../../assets/fb.svg';
import IG from '../../assets/you.svg';
import Map from '../../../src/assets/Map.png';
import Phone from '../../../src/assets/Phone.png';
import Mail from '../../../src/assets/Mail.png';
import './Footer.css';
import AnimateOnScroll from '../HomePage/AnimateOnScroll';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [openSections, setOpenSections] = useState({
    about: !isMobile,
    quickLinks: !isMobile,
    collections: !isMobile,
    contact: !isMobile,
  });

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setOpenSections({
        about: !mobile,
        quickLinks: !mobile,
        collections: !mobile,
        contact: !mobile,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section) => {
    if (isMobile) {
      setOpenSections((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    }
  };

  return (
    <footer className="bg-black text-white py-md-5 pb-md-3 pt-3 pb-3 overflow-x-hidden mt-5">
      <div className="container-fluid px-3 px-md-0">
        <div className="row mx-auto mx-md-0 align-items-center text-center text-md-start">
          <div className="col-4 col-md-5 px-0 pe-md-5">
            <AnimateOnScroll animationType="fade-left" delay={0.1}>
              <hr className="d-block d-md-block" style={{ height: '1px', borderColor: '#EBB713', opacity: '1' }} />
            </AnimateOnScroll>
          </div>
          <div className="col-4 col-md-2 text-center my-3 my-md-0">
            <img src={Logo} alt="Logo" className="img-fluid add_size_bottom_logo" />
          </div>
          <div className="col-4 col-md-5 px-0 ps-md-5">
            <AnimateOnScroll animationType="fade-right" delay={0.2}>
              <hr className="d-block d-md-block" style={{ height: '1px', borderColor: '#EBB713', opacity: '1' }} />
            </AnimateOnScroll>
          </div>
        </div>

        <div className="row py-md-5 pb-0 pt-3 px-md-5 px-0">
          {/* About Us */}
          <div className="col-12 col-md-4  mb-0 mb-md-0 ps-md-5">
            <h4
              className="text-warning d-flex align-items-center justify-content-between ps-md-5 ps-0 pb-2 add_heading_font_footer"
              onClick={() => toggleSection("about")}
              style={{ cursor: isMobile ? "pointer" : "default" }}
            >
              <span>About Us</span>
              {isMobile && (
                <FaChevronDown className={`dropdown-icon ${openSections.about ? 'rotate' : ''}`} style={{ color: "#EBB713" }} />
              )}
            </h4>

            {openSections.about && (
              <>
                <p className="ps-md-5 ps-0 add_text_font_footer d-md-block d-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
                </p>
                <ul className="list-unstyled ps-md-5 ps-0 d-block d-md-none">
                  <li><Link to="/privacy" className="text-white text-decoration-none add_text_font_footer">Privacy Policy</Link></li>
                  <li><Link to="/termsOfUse" className="text-white text-decoration-none add_text_font_footer">Terms of Use</Link></li>
                  <li><Link to="/termsAndConditions" className="text-white text-decoration-none add_text_font_footer">Terms & Conditions</Link></li>
                  <li><Link to="/cookies" className="text-white text-decoration-none add_text_font_footer">Cookies Policy</Link></li>
                </ul>
                <h4 className="text-warning mb-3 ps-md-5 ps-0 add_heading_font_footer d-md-flex d-none">Follow us on</h4>
                <div className="d-md-flex d-none ps-md-5 ps-0">
                  <img src={FB} className="pe-2 fav_icon_twitter" alt="Facebook" />
                  <img src={Inst} className="pe-3 mt-1 fav_icon" alt="Instagram" />
                  <img src={IG} className="fav_icon mt-1" alt="IG" />
                </div>
              </>
            )}
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-2 mb-0 mb-md-0 ps-md-5">
            <h4
              className="text-warning d-flex align-items-center justify-content-between pb-2 add_heading_font_footer"
              onClick={() => toggleSection("quickLinks")}
              style={{ cursor: isMobile ? "pointer" : "default" }}
            >
              <span>Quick Links</span>
              {isMobile && (
                <FaChevronDown className={`dropdown-icon ${openSections.quickLinks ? 'rotate' : ''}`} style={{ color: "#EBB713" }} />
              )}
            </h4>
            {openSections.quickLinks && (
              <ul className="list-unstyled">
                <li className="pb-2 add_text_font_footer">Home</li>
                <li className="pb-2 add_text_font_footer">About Us</li>
                <li className="pb-2 add_text_font_footer">Collections</li>
                <li className="add_text_font_footer">Experience</li>
              </ul>
            )}
          </div>

          {/* Our Collections */}
          <div className="col-12 col-md-2 mb-0 mb-md-0 ps-md-5">
            <h4
              className="text-warning d-flex align-items-center justify-content-between pb-2 add_heading_font_footer"
              onClick={() => toggleSection("collections")}
              style={{ cursor: isMobile ? "pointer" : "default" }}
            >
              <span>Our Collections</span>
              {isMobile && (
                <FaChevronDown className={`dropdown-icon ${openSections.collections ? 'rotate' : ''}`} style={{ color: "#EBB713" }} />
              )}
            </h4>
            {openSections.collections && (
              <ul className="list-unstyled">
                <li className="pb-2 add_text_font_footer">Plata</li>
                <li className="add_text_font_footer">Añejo</li>
              </ul>
            )}
          </div>

          {/* Contact Us */}
          <div className="col-12 col-md-4 ps-md-5">
            <h4
              className="text-warning d-flex align-items-center justify-content-between pb-md-2 pb-0 add_heading_font_footer"
              onClick={() => toggleSection("contact")}
              style={{ cursor: isMobile ? "pointer" : "default" }}
            >
              <span>Contact Us</span>
              {isMobile && (
                <FaChevronDown className={`dropdown-icon ${openSections.contact ? 'rotate' : ''}`} style={{ color: "#EBB713" }} />
              )}
            </h4>
            {openSections.contact && (
              <ul className="list-unstyled">
                {/* <li className="pb-3 d-flex align-items-start">
                  <img src={Map} className="me-2 add_size_social_icon" alt="Map" />
                  <div className='add_text_font_footer'>2972 Westheimer Rd. Santa Ana, <br /><span>Illinois 85486</span></div>
                </li> */}
                {/* <li className="pb-3 d-flex align-items-center add_text_font_footer">
                  <img src={Phone} className="me-2 add_size_social_icon" alt="Phone" />1800-267-4444
                </li> */}
               <li className="d-flex align-items-center add_text_font_footer">
  {/* <img src={Mail} className="me-2 add_size_social_icon" alt="Email" /> */}
  <form className="d-flex flex-grow-1" onSubmit={(e) => e.preventDefault()}>
    <input
      type="email"
      className="form-control me-2 w-50"
      placeholder="Enter your email"
      required
    />
    <button type="submit" className="btn btn-warning">
      Submit
    </button>
  </form>
</li>

              </ul>
            )}
          </div>
        </div>
        <div className="d-md-none d-flex align-items-center ps-md-5 ps-0 mb-3 mt-2">
          <div className='col-6'>
            <h4 className="text-warning me-3 mb-0 add_heading_font_footer">Follow us on</h4>

          </div>
          <div className='col-6 d-flex align-items-center justify-content-end'>
            <img src={FB} className="pe-2  fav_icon_twitter" alt="Facebook" />
            <img src={Inst} className="pe-3 fav_icon" alt="Instagram" />
            <img src={IG} className="fav_icon" alt="IG" />
          </div>

        </div>


        <div className="col-12 ps-xl-7 d-md-flex d-none col-xl-12 justify-content-md-end">
          <div className="row mx-auto">
            <div className="col-md-auto col-6 mb-md-0 mb-3 px-0 px-xl-4">
              <Link className="text-decoration-none" to="/privacy">
                <p className="m-0 copy_link text-white">Privacy Policy</p>
              </Link>
            </div>
            <div className="col-md-auto col-6 mb-md-0 mb-3 px-0 px-xl-4">
              <Link className="text-decoration-none" to="/termsOfUse">
                <p className="m-0 copy_link text-white">Terms of Use</p>
              </Link>
            </div>
            <div className="col-md-auto col-6 mb-md-0 mb-3 px-0 px-xl-4">
              <Link className="text-decoration-none" to="/cookies">
                <p className="m-0 copy_link text-white">Cookies Policy</p>
              </Link>
            </div>
            <div className="col-md-auto col-6 mb-md-0 mb-3 m-0 p-0">
              <Link className="text-decoration-none" to="/termsAndConditions">
                <p className="m-0 copy_link text-white">Terms and Conditions</p>
              </Link>
            </div>
          </div>
        </div>

        <hr style={{ height: '1px', borderColor: '#EBB713', opacity: '1' }} />
        <div className="text-center pt-0">
  <p className="mb-0 copy_link">
    Powered By <a href="https://rowthtech.com" className="text-warning">RowthTech</a> © 2025 Don Cruz Platinium | All Rights Reserved.
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
