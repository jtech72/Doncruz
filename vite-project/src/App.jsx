import React from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

import Danimg from './assets/danimg.png'
import Cenetrbanner from './assets/centerbannerimg.png'
import Cryzimg from './assets/cryzimg.png'
import Cenetrlogo from './assets/centerlogo.png'
import Menbottle from './assets/menbottleimg.png'
import Donlogo from './assets/donlogo.png'
import Anejob from './assets/anejobottle.png'
import Twoperson from './assets/twoperson.png'
import Bluebootle from './assets/bluebott.png'
import Bootglass from './assets/bottglass.png'
import Yellowbottle from './assets/yellobott.png'
import Lightbott from './assets/lightbott.png'
import youtube from './assets/toutube.png'
import instagram from './assets/insta.png'
import facebook from './assets/facebook.png'

function App() {
  return (
    <>
      <Navbar />
      <section>
        <div className="container-fluid">
          <section className="row add_top_banner_img pt-md-5 pt-0">
            <div className="container pt-5">
              <div className="row pt-5">
                <div className="col-10 mx-auto pt-5">
                  <div className="row mx-auto">
                    <div className="col-md-4 col-12 d-flex align-items-center flex-column justify-content-between">
                      <img src={Danimg} className="top_img_dan add_right_margin" alt="" />
                      <p className="description pb-md-5 pb-4 pt-md-0 pt-4 mb-0 text-start">
                        From the careful jima to the meticulous distillation, every step in the creation of tequila is infused with passion and dedication.
                      </p>
                    </div>
                    <div className="col-md-4 col-12">
                      <img src={Cenetrbanner} className="add_center_banner_img" alt="" />
                    </div>
                    <div className="col-md-4  col-12 d-flex align-items-center flex-column justify-content-between ">
                      <img src={Cryzimg} className="top_img_dan add_left_margin" alt="" />
                      <div className="social-icons pb-5">
                        <img src={facebook} className="add_logo_size_icon me-3" alt="facebook" />
                        <img src={instagram} className="add_logo_size_icon me-3" alt="instagram" />
                        <img src={youtube} className="add_logo_size_icon" alt="youtube" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="row add_bg_img">
            <div className="col-12 pt-5 pb-4">
              <div className="row">
                <div className="col-5 my-auto ps-0">
                  <hr className="add_color_line" />
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center">
                  <img src={Cenetrlogo} className="add_logo_size" alt="center logo" />
                </div>
                <div className="col-5 my-auto pe-0">
                  <hr className="add_color_line" />
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <h1 className="text-white add_Font_heading">
                From Agave to Excellence - Perfection<br /> in every pour.
              </h1>
            </div>
            <div className="col-12 text-center pb-md-5 pb-0 mb-4 mt-3">
              <p className="text-white add_para_font">
                Don Cruz Platinium — The Legacy of Enric Ramon in Every Sip
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-7 col-12 ps-0">
              <img src={Menbottle} className="w-100 h-100" alt="" />
            </div>
            <div className="col-md-5 mt-4 mt-md-0 col-12 pe-md-5 pe-0 d-flex align-items-end justify-content-end mb-md-5 mb-0 pb-5">
              <div className="row pe-md-5 pe-0 mx-auto">
                <div className="col-12 mb-3 d-flex align-items-center justify-content-end pe-md-5 pe-0">
                  <img src={Donlogo} className="add_img_logo_size" alt="" />
                </div>
                <div className="col-12 text-end pe-md-5 pe-0">
                  <h3 className="add_second_heading">
                    This is Don Cruz Platinium Plata-<br /> This is tequila, redefined.
                  </h3>
                </div>
                <div className="col-12 text-end mt-3 pe-md-5 pe-0">
                  <p className="text-end add_font_para_second">
                    Every drop of Doncruz Platinum tells a story—one of tradition, precision,
                    and passion. From the expert jima of the agave to the meticulous art of
                    distillation, this is more than just a spirit—it’s an experience.
                  </p>
                </div>
                <div className="col-12 mt-md-5 mt-0 d-flex align-items-center justify-content-end pe-md-5 pe-0">
                  <span className="add_color_font d-flex align-items-center justify-content-end">
                    <hr className="me-3 add_line_width" /> Plata
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 col-12 ps-5 d-flex align-items-end justify-content-end mb-5 pb-5">
              <div className="row ps-5">
                <div className="col-12 mb-3 d-flex align-items-center justify-content-start ps-5">
                  <img src={Donlogo} className="add_img_logo_size" alt="" />
                </div>
                <div className="col-12 text-start ps-5">
                  <h3 className="add_second_heading">This is Don Cruz Platinum Añejo –<br />  The Pinnacle of Purity.</h3>
                </div>
                <div className="col-12 text-start mt-3 ps-5">
                  <p className="add_font_para_second">
                    At Tequila don cruz Platinum, every bottle is the perfect fusion of time-
                    honored tradition and cutting-edge innovation. While modern techniques
                    elevate the craft, the soul of this tequila lies in its unrivaled smoothness—
                    a testament to an exceptional recipe passed down with dedication.
                  </p>
                </div>
                <div className="col-12 mt-5 d-flex align-items-center justify-content-start ps-5">
                  <span className="add_color_font d-flex align-items-center justify-content-start">
                    Plata <hr className="ms-3 add_line_width" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12 pe-0">
              <img src={Anejob} className="w-100 h-100" alt="" />
            </div>
          </div>

          <div className="row py-5 add_bg_img_design">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <p className="mb-0 pb-0 add_para_font pe-4">The new era of</p>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center">
              <h5 className="tequila_font_size mb-0">Tequila</h5>
            </div>
            <div className="col-9 mx-auto">
              <div className="row d-flex align-items-center justify-content-center mt-4 mb-5">
                <div className="col-6 border-end py-1 border border-dark border-top-0 border-start-0 border-bottom-0">
                  <p className="add_font_para_second text-end pe-3 mb-0">
                    From the careful jima to the meticulous distillation, every step in the creation of tequila is infused with passion and dedication. This is why we believe tequila should be revered as a high-end spirit.
                  </p>
                </div>
                <div className="col-6 py-1">
                  <p className="add_font_para_second text-start ps-3 mb-0">
                    To create a truly exceptional tequila, it takes time, love, commitment, and an exquisite recipe. And when this is achieved, only a bottle of equal elegance will suffice — something that exudes strength, importance, and is worthy of the precious liquid it holds.
                  </p>
                </div>
              </div>
              <div className="row g-3">
                <div className="col-6 col-md-3 d-flex align-items-center justify-content-center">
                  <img src={Lightbott} className="img-fluid add_height_all rounded" alt="Image 1" />
                </div>
                <div className="col-6 col-md-3 d-flex align-items-center justify-content-center">
                  <img src={Yellowbottle} className="img-fluid add_height_all rounded" alt="Image 2" />
                </div>
                <div className="col-6 col-md-3 d-flex align-items-center justify-content-center">
                  <img src={Bluebootle} className="img-fluid add_height_all rounded" alt="Image 3" />
                </div>
                <div className="col-6 col-md-3 d-flex align-items-center justify-content-center">
                  <img src={Bootglass} className="img-fluid add_height_all rounded" alt="Image 4" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-7 col-12 ps-0">
              <img src={Twoperson} className="w-100 h-100" alt="" />
            </div>
            <div className="col-md-5 col-12 pe-5 d-flex align-items-center justify-content-center mb-5 pb-5">
              <div className="row px-5">
                <div className="col-12 text-start">
                  <h3 className="add_second_heading">
                    From Farm to Bottle – Crafting <br /> Perfection from the Finest Agave
                  </h3>
                </div>
                <div className="col-12 text-start mt-3">
                  <p className="add_font_para_second">
                    Hand-selected from the heart of the fields, only the best
                    Blue Weber Agave makes its way into Tequiladoncruz Platinum. Every plant is carefully nurtured, harvested at
                    peak maturity, and expertly trimmed to extract the richest flavors.
                  </p>
                </div>
                <div className="col-12 text-start mt-3">
                  <p className="add_font_para_second">
                    With generations of expertise, our jimadores ensure that
                    only the purest, most flavorful piñas begin the journey to
                    becoming an exceptional tequila.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
