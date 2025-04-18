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
    <footer className="bg-black text-white py-5 overflow-x-hidden mt-5">
      <div className="container-fluid px-0">
        <div className="row d-flex align-items-center">
          <div className="col-5 pe-5 px-0">
            <hr style={{
              height: '1px',
              borderColor: '#EBB713',
              opacity: '1'
            }} />
          </div>
          <div className="col-2 text-center">
            <img src={Logo} alt="" className='add_size_bottom_logo' />
          </div>
          <div className="col-5 ps-5 px-0">
            <hr style={{
              height: '1px',
              borderColor: '#EBB713',
              opacity: '1',

            }} />
          </div>
        </div>


        <div className="row  py-5 ps-5">
          <div className="col-4 ps-5 pe-5 ">
            <h4 style={{ fontSize: '24px',color:"#EBB713" }}>About us</h4>
            <p className='pe-4 ' style={{
              fontSize: '16px',

            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <h4 className="mb-4"style={{ fontSize: '24px',color:"#EBB713" }}>Follow us on</h4>
            <div className='d-flex'>
            <img src={FB} className='pe-3 fav_icon' alt="" />

              <img src={Inst} className='pe-3 fav_icon' alt="" />
              <img src={IG} className='fav_icon' alt="" />


            </div>

          </div>
          <div className="col-2 ps-5">
            <h4 style={{ fontSize: '24px',color:"#EBB713"  }} className='pb-2'>Quick Links</h4>
            <ul className='ps-0'>
              <li className='pb-3'>Home</li>
              <li className='pb-3'>About Us</li>
              <li className='pb-3'>Collections</li>
              <li>Experience</li>
            </ul>
          </div>
          <div className="col-2 ps-5">
            <h4 style={{ fontSize: '24px',color:"#EBB713"  }} className='pb-2'>Our Collections</h4>
            <ul className='ps-0'>
              <li className='pb-3'>Plata</li>
              <li>Anejo</li>
            </ul>
          </div>
          <div className="col-4 ps-5 ">
            <h4 style={{ fontSize: '24px' ,color:"#EBB713" }} className='pb-2'>Contact Us</h4>
            <ul className='ps-0'>
              <li className='pb-3'><img src={Map} className='pe-1 add_size_social_icon'></img>2972 Westheimer Rd. Santa Ana, <br/><p className='ps-4 mb-0'>Illinois 85486</p> </li>
              <li className='pb-3'><img src={Phone} className='pe-1 add_size_social_icon' />1800-267-4444</li>
              <li><img src={Mail} className='pe-1 add_size_social_icon' />alma.lawson@example.com</li>
            </ul>
          </div>
        </div>

        <hr style={{
          height: '1px',
          borderColor: '#EBB713',
          opacity: '1',

        }} />

        <div className='text-center'>
          <p className='mb-0 pt-4'>Powered By RowthTech © 2025 Don Cruz Platinium | All Rights Reserved.</p>
        </div>

      </div>

    </footer>
  )
}

export default Footer;
