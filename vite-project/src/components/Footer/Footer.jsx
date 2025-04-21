import React from 'react'
import Line from '../../../src/assets/Line.png'
import Logo from '../../../src/assets/Logo.png'
import Inst from '../../../src/assets/inst.png'
import FB from '../../assets/fb.png'
import IG  from '../../assets/you.png'
import Map from '../../../src/assets/Map.png'
import Phone from '../../../src/assets/Phone.png'
import Mail from '../../../src/assets/Mail.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5 pb-3 overflow-x-hidden mt-5">
    <div className="container-fluid px-3 px-md-0">
      {/* Divider and Logo Section */}
      <div className="row align-items-center text-center text-md-start">
        <div className="col-12 col-md-5 px-0 pe-md-5">
          <hr
            className="d-none d-md-block"
            style={{ height: '1px', borderColor: '#EBB713', opacity: '1' }}
          />
        </div>
        <div className="col-12 col-md-2 text-center my-3 my-md-0">
          <img src={Logo} alt="Logo" className="img-fluid add_size_bottom_logo" />
        </div>
        <div className="col-12 col-md-5 px-0 ps-md-5">
          <hr
            className="d-none d-md-block"
            style={{ height: '1px', borderColor: '#EBB713', opacity: '1' }}
          />
        </div>
      </div>
  
      {/* Footer Main Content */}
      <div className="row py-md-5 pb-0 pt-5 px-md-5 px-0">
        <div className="col-12 col-md-4 px-4 mb-4 mb-md-0 ps-md-5 ps-3">
          <h4 className="text-warning ps-md-5 ps-0" style={{ fontSize: '24px' }}>About us</h4>
          <p className="ps-md-5 ps-0"style={{ fontSize: '16px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
          </p>
          <h4 className="text-warning mb-3 ps-md-5 ps-0" style={{ fontSize: '24px' }}>Follow us on</h4>
          <div className="d-flex ps-md-5 ps-0">
            <img src={FB} className="pe-3 fav_icon" alt="Facebook" />
            <img src={Inst} className="pe-3 fav_icon" alt="Instagram" />
            <img src={IG} className="fav_icon" alt="IG" />
          </div>
        </div>
  
        <div className="col-6 col-md-2 mb-4 mb-md-0 ps-md-5">
          <h4 className="text-warning pb-2" style={{ fontSize: '24px' }}>Quick Links</h4>
          <ul className="list-unstyled">
            <li className="pb-2">Home</li>
            <li className="pb-2">About Us</li>
            <li className="pb-2">Collections</li>
            <li>Experience</li>
          </ul>
        </div>
  
        <div className="col-6 col-md-2 mb-4 mb-md-0 ps-md-5">
          <h4 className="text-warning pb-2" style={{ fontSize: '24px' }}>Our Collections</h4>
          <ul className="list-unstyled">
            <li className="pb-2">Plata</li>
            <li>Anejo</li>
          </ul>
        </div>
  
        <div className="col-12 col-md-4 ps-md-5">
          <h4 className="text-warning pb-2" style={{ fontSize: '24px' }}>Contact Us</h4>
          <ul className="list-unstyled">
            <li className="pb-3 d-flex align-items-start">
              <img src={Map} className="me-2 add_size_social_icon" alt="Map" />
              <div>2972 Westheimer Rd. Santa Ana, <br /><span>Illinois 85486</span></div>
            </li>
            <li className="pb-3 d-flex align-items-center">
              <img src={Phone} className="me-2 add_size_social_icon" alt="Phone" />1800-267-4444
            </li>
            <li className="d-flex align-items-center">
              <img src={Mail} className="me-2 add_size_social_icon" alt="Email" />alma.lawson@example.com
            </li>
          </ul>
        </div>
      </div>
  
      <hr style={{ height: '1px', borderColor: '#EBB713', opacity: '1' }} />
  
      <div className="text-center pt-0">
        <p className="mb-0">Powered By RowthTech © 2025 Don Cruz Platinium | All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer;
