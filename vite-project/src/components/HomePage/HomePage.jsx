import React, { useEffect, useState } from 'react'

import Cenetrlogo from '../../assets/centerlogo.svg'
import Menbottle from '../../assets/menbottleimg.png'
import Donlogo from '../../assets/donlogo.svg'
import Anejob from '../../assets/anejobottle.svg'
import Twoperson from '../../assets/twoperson.png'
import Bluebootle from '../../assets/bluebott.svg'
import Bootglass from '../../assets/bottglass.svg'
import Yellowbottle from '../../assets/yellobott.svg'
import Lightbott from '../../assets/lightbott.svg'
import youtube from '../../assets/toutube.png'
import instagram from '../../assets/insta.png'
import facebook from '../../assets/facebook.svg'
import { Modal } from 'react-bootstrap'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AnimateOnScroll from './AnimateOnScroll'
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const text = "From Agave to Excellence – Perfection in every pour.";
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.1,
    },
  },
};
const letterVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: 90,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 12,
    },
  },
};
const HomePage = ({ setOpenModal, openModal }) => {
  useEffect(() => {
    // Animation for the logo
    gsap.to('.add_logo_size', {
      scrollTrigger: {
        trigger: '.row[data-split]',
        scrub: 0.6,
        toggleActions: 'restart none none none',
      },
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power1.out',
    });
    // Animation for the color lines
    gsap.to('.add_color_line', {
      scrollTrigger: {
        trigger: '.row[data-split]',
        scrub: 0.6,
        toggleActions: 'restart none none none',
      },
      opacity: 1,
      scaleX: 1,
      duration: 1,
      ease: 'power1.out',
      stagger: 0.2,
    });
  }, []);
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      once: false, // Allow animations to trigger on scroll multiple times
      offset: 100, // Distance from the viewport when the animation starts
    });

    // Refresh AOS on every scroll to ensure it triggers again
    window.addEventListener("scroll", AOS.refresh);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", AOS.refresh);
    };
  }, []);
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      once: false,    // Allow animations to trigger on scroll multiple times
      offset: 100,    // Distance from the viewport when the animation starts
    });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // show 1 item on phone
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,  // phone view
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 992,  // tablet view
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  };
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false); // 👈 Reset when out of view
    }
  }, [inView]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  const typingVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.05, // Reduced delay for faster typing
        duration: 0.3, // Faster duration for each character
      },
    }),
  };
  return (
    <section>
      <div className="container-fluid">
        <section className="row add_top_banner_img pt-md-5 pt-0 position-relative">
          <div className="container pt-5">
            <div className="row pt-5">
              <div className="col-md-10 col-12 mx-auto pt-md-5 pt-0 position-absolute bottom-overlay">
                <div className="row mx-auto d-md-flex d-none">
                  <div className="col-md-4 ps-0 col-12 pt-5 pt-md-0 d-flex align-items-center flex-column justify-content-between">
                    <p className="description pb-md-5 pb-4 pt-md-0 pt-4 mb-0 text-md-start text-center">
                      {/* From the careful jima to the meticulous distillation, every step <br />in the creation of tequila is infused with passion and dedication. */}
                      From the heart of Mexico’s agave fields, Don Cruz Platinium isn’t just tequila, it’s a legacy you can taste.

                    </p>
                  </div>
                  <div className="col-md-4 col-12"></div>
                  <div className="col-md-4 col-12 d-flex align-items-center flex-column justify-content-between ps-md-5 ps-0">
                    <div className="social-icons pb-5">
                      <img src={facebook} className="add_logo_size_icon_twitter me-2" alt="facebook" />
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
          <div className="col-12 px-3 px-md-0 pt-md-5 pt-4 pb-4">
            <div className="row mx-auto mx-md-0">
              <div className="col my-auto ps-0">
                <hr className="add_color_line" />
              </div>
              <div className="col-1 d-flex align-items-center justify-content-center">
                <img
                  className="add_logo_size"
                  alt="center logo"
                  src={Cenetrlogo}
                />
              </div>
              <div className="col my-auto pe-0">
                <hr className="add_color_line" />
              </div>
            </div>
          </div>
          <div
            className="col-12 text-center mb-2 d-flex justify-content-center align-items-center"
            ref={ref}
          >
            <motion.h1
              className="text-white add_Font_heading"
              variants={containerVariants}
              initial="hidden"
              animate={shouldAnimate ? "visible" : "hidden"}
              style={{ overflow: "hidden" }} // Ensures smooth transition without overflowing
            >
              <motion.div
                className="inline-block"
                variants={typingVariants}
                custom={0} // Adjust index for delay calculation
                style={{
                  display: "block", // Make the element block-level to break into a new line
                  marginRight: "0.25em",
                  opacity: shouldAnimate ? 1 : 0,
                }}
                initial={{ y: 50, opacity: 0 }} // Start from below and invisible
                animate={{ y: 0, opacity: 1 }} // Slide up to the normal position and fade in
                transition={{
                  y: { type: "spring", stiffness: 200, damping: 25, delay: 0 * 0.05 },
                  opacity: { duration: 0.3 },
                }}
              >
                From Agave to Excellence - Perfection
              </motion.div>
              <motion.div
                className="inline-block"
                variants={typingVariants}
                custom={1} // Adjust index for delay calculation
                style={{
                  display: "block", // Make the element block-level to break into a new line
                  marginRight: "0.25em",
                  opacity: shouldAnimate ? 1 : 0,
                }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  y: { type: "spring", stiffness: 200, damping: 25, delay: 1 * 0.05 },
                  opacity: { duration: 0.3 },
                }}
              >
                in every pour.
              </motion.div>
            </motion.h1>
          </div>

          <div className="col-12 text-center pb-md-4 pb-0 mb-md-4 mb-2 mt-md-4 mt-3">
            <p className="text-white add_para_font">
              Don Cruz Platinium — The Legacy of Enric Ramon in Every Sip.
            </p>
          </div>
        </div>
        <section id='colletions'  >
          <div className="row">
            <section id='plata' className='px-0 d-md-flex d-block'>
              <div className="col-md-7 col-12 ps-0" data-aos="fade-up" data-aos-duration="1000">
                <img src={Menbottle} className="w-100 h-100" alt="Men Bottle" />
              </div>
              <div className="col-md-5 mt-4 mt-md-0 col-12 pe-md-5 pe-0 d-flex align-items-end justify-content-end mb-md-5 mb-0 pb-md-5 pb-4">
                <div className="row pe-md-5 pe-2 mx-auto">
                  <div className="col-12 mb-3 d-flex align-items-center justify-content-md-end justify-content-center pe-md-5 pe-0 ps-0" data-aos="fade-up" data-aos-duration="1000">
                    <img src={Donlogo} className="add_img_logo_size" alt="Don Logo" />
                  </div>

                  <div className="col-12 text-md-end text-center pe-md-5 pe-0 ps-0" data-aos="fade-up" data-aos-duration="1000">
                    <h3 className="add_second_heading">
                      {/* This is Don Cruz Platinium Plata-<br /> This is tequila, redefined. */}
                      Crisp. Vibrant. Pure.


                    </h3>
                  </div>

                  <div className="col-12 text-md-end text-center mt-3 pe-md-5" data-aos="fade-up" data-aos-duration="1000">
                    <p className="text-md-end text-justify add_font_para_second">
                      {/* Every drop of Doncruz Platinum tells a story—one of tradition, precision,
                  and passion. From the expert jima of the agave to the meticulous art of
                  distillation, this is more than just a spirit—it’s an experience. */}
                      Our Plata honors the true essence of agave — clean, lively, and full of natural energy.
                      With every sip, you taste the freshness of the fields and the craftsmanship that shaped it.
                    </p>
                    <h6 className='add_font_bold'>
  For those who want tequila in its purest, boldest form.
</h6>

                  </div>
                  <div className="col-12 mt-md-5 mt-0 d-md-flex d-none align-items-center justify-content-md-end justify-content-center pe-md-5 pe-0">
                    <div className="add_color_font d-flex align-items-center justify-content-end">
                      <AnimateOnScroll animationType="fade-up" delay={0.2}>
                        <hr className="me-3 add_line_width" />
                      </AnimateOnScroll>
                      <AnimateOnScroll animationType="fade-up" delay={0.1}>
                        <span className="add_color_font">Plata</span>
                      </AnimateOnScroll>
                    </div>
                  </div>
                  <div className="col-12 mt-md-5 mt-0 d-flex ps-0 d-md-none align-items-center justify-content-md-end justify-content-center ps-md-5 pe-0">
                    <div className="add_color_font d-flex align-items-center justify-content-end">
                      <AnimateOnScroll animationType="fade-up" delay={0.2}>
                        <hr className="me-2 add_line_width" />
                      </AnimateOnScroll>
                      <AnimateOnScroll animationType="fade-up" delay={0.1}>
                        <span className="add_color_font">Plata</span>
                      </AnimateOnScroll>
                      <AnimateOnScroll animationType="fade-up" delay={0.2}>
                        <hr className="ms-2 add_line_width" />
                      </AnimateOnScroll>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
          <div className="row">
            <section id='anjoi' className='px-0 d-md-flex d-block'>

              <div className="col-md-7 col-12 pe-0 order-1 order-md-2" data-aos="fade-up" data-aos-duration="1000">
                <img src={Anejob} className="w-100 h-100" alt="Añejo Bottle" />
              </div>
              <div className="col-md-5 col-12 ps-md-5 ps-0 d-flex align-items-end justify-content-end mb-md-5 mb-0 pt-4 pt-md-0 pb-5 order-2 order-md-1">
                <div className="row ps-md-5 ps-0 mx-auto">
                  <div className="col-12 mb-3 d-flex align-items-center justify-content-md-start justify-content-center ps-md-5 ps-5" data-aos="fade-up" data-aos-duration="1000">
                    <img src={Donlogo} className="add_img_logo_size" alt="Don Logo" />
                  </div>
                  <div className="col-12 text-md-start text-center ps-md-5 ps-4" data-aos="fade-up" data-aos-duration="1000">
                    <h3 className="add_second_heading">
                       The Pinnacle of Purity.

                    </h3>
                  </div>
                  <div className="col-12 text-md-start text-justify mt-3 ps-md-5 ps-4" data-aos="fade-up" data-aos-duration="1000">
                    <p className="add_font_para_second">
                      {/* At Tequila don cruz Platinum, every bottle is the perfect fusion of time-
                  honored tradition and cutting-edge innovation. While modern techniques
                  elevate the craft, the soul of this tequila lies in its unrivaled smoothness—
                  a testament to an exceptional recipe passed down with dedication. */}
                      Aged to deep perfection, our Añejo brings rich notes of the ingredients after being aged for years, yet layered with complexity, every glass is a tribute to patience — and crowned with real gold flakes, it's a reminder that true craftsmanship deserves to shine.
                    </p>
                    {/* <p className='add_font_bold'>For those who know greatness isn’t rushed. It’s crafted.</p> */}
                    <h6 className='add_font_bold'>
                    For those who know greatness isn’t rushed. It’s crafted.</h6>
                  </div>
                  <div className="col-12 mt-md-5 mt-0 d-md-flex d-none align-items-center justify-content-md-start justify-content-center ps-md-5 ps-4">
                    <div className="add_color_font d-flex align-items-center justify-content-start">
                      <AnimateOnScroll animationType="fade-up" delay={0.1}>
                        <span className="add_color_font">Añejo</span>
                      </AnimateOnScroll>
                      <AnimateOnScroll animationType="fade-up" delay={0.2}>
                        <hr className="ms-3 add_line_width" />
                      </AnimateOnScroll>
                    </div>
                  </div>
                  <div className="col-12 mt-md-5 mt-0 d-flex ps-0 d-md-none align-items-center justify-content-md-end justify-content-center ps-md-5 pe-0">
                    <div className="add_color_font d-flex align-items-center justify-content-end">
                      <AnimateOnScroll animationType="fade-up" delay={0.2}>
                        <hr className="me-2 add_line_width" />
                      </AnimateOnScroll>
                      <AnimateOnScroll animationType="fade-up" delay={0.1}>
                        <span className="add_color_font">Añejo</span>
                      </AnimateOnScroll>
                      <AnimateOnScroll animationType="fade-up" delay={0.2}>
                        <hr className="ms-2 add_line_width" />
                      </AnimateOnScroll>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section id='Experience'>
          <div className="row py-md-5 pt-5 pb-0 add_bg_img_design">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <p className="mb-0 pb-0 add_para_font_era pe-4">The new era of</p>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center">
              <h5 className="tequila_font_size mb-0">Tequila</h5>
            </div>
            <div className="col-md-10 col-12 mx-auto pb-5">
              <div className="row d-md-flex d-none align-items-center justify-content-center mt-4 mb-5">
                <div className="col-md-6 col-12 border-md-end border border-dark border-top-0 border-start-0 border-bottom-0 py-1">
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-once="false"
                  >
                    <p className="add_font_para_second text-end pe-3 mb-0">
                      {/* From the careful jima to the meticulous distillation, every step in the<br />
                      creation of tequila is infused with passion and dedication. This is why<br />
                      we believe tequila should be revered as a high-end spirit. */}
                      From the careful jima to the meticulous distillation, every step in the creation of <br/>
                      Don Cruz tequila is infused with passion, heritage, and unwavering dedication. <br/>
                      This is why we believe tequila deserves to be revered -
                       not just as <br/> a drink, but as a high-end spirit worthy of celebration.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6 col-12 py-1 pe-0"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-once="false"
                >
                  <p className="add_font_para_second text-start ps-3 mb-0">
                    {/* To create a truly exceptional tequila, it takes time, love, commitment, and an exquisite<br />
                    recipe. And when this is achieved, only a bottle of equal elegance will suffice — something <br />
                    that exudes strength, importance, and is worthy of the precious liquid it holds. */}
                    Crafting a truly exceptional tequila takes more than just time. It demands love,<br/>
                     patience, precision, and an uncompromising commitment to quality. When <br/>
                     this level of excellence is achieved, it deserves more than just<br/>
                      any bottle - it calls for a vessel that mirrors its elegance. 

                  </p>
                </div>
              </div>
              <div className="row mx-auto d-block d-md-none align-items-center justify-content-center mt-4 mb-5">
                <div
                  className="col-md-6 col-12 py-1"
                  data-aos="fade-up"  // Animation type
                  data-aos-duration="1000" // Duration (in milliseconds)
                  data-aos-once="false" // Allow animation to trigger on scroll multiple times
                >
                  <p className="add_font_para_second text-md-center text-justify pe-0 mb-0">
                  From the careful jima to the meticulous distillation, every step in the creation of Don 
                  Cruz tequila is infused with passion, heritage, and unwavering dedication.
                   This is why we believe tequila deserves to be revered - not just as a drink,
                    but as a high-end spirit worthy of celebration.
                  </p>
                </div>
                <div
                  className="col-md-6 col-12 py-1"
                  data-aos="fade-up"  // Animation type
                  data-aos-duration="1000" // Duration
                  data-aos-once="false" // Allow animation to trigger on scroll multiple times
                >
                  <p className="add_font_para_second text-md-center text-justify ps-0 mb-0">
                  Crafting a truly exceptional tequila takes more than just time. It demands love, 
                  patience, precision, and an uncompromising commitment to quality.
                   When this level of excellence is achieved, it deserves more than just any bottle - 
                   it calls for a vessel that mirrors its elegance.
                  </p>
                </div>
              </div>
              <div className="row g-3 d-md-flex d-none">
                {[
                  { src: Lightbott, alt: "Image 1", delay: 0, x: 0 },
                  { src: Yellowbottle, alt: "Image 2", delay: 0.1, x: 0 },
                  { src: Bluebootle, alt: "Image 3", delay: 0.2, x: 0 },
                  { src: Bootglass, alt: "Image 4", delay: 0.3, x: 0 },
                ].map((item, index) => (
                  <div key={index} className="col-12 col-md-3 d-flex align-items-center justify-content-center">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0, x: 0 }}
                      whileInView={{ scale: 1, opacity: 1, x: item.x }}
                      viewport={{ amount: 0.5 }}
                      transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 10,
                        delay: item.delay,
                        duration: 1.2,
                        ease: "easeOut"
                      }}
                    >
                      <img src={item.src} className="img-fluid add_height_all rounded" alt={item.alt} />
                    </motion.div>
                  </div>
                ))}
              </div>
              <div className="container d-block d-md-none">
                <Slider {...settings}>
                  <div className="d-flex justify-content-center">
                    <img src={Lightbott} className="img-fluid add_height_all rounded" alt="Image 1" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <img src={Yellowbottle} className="img-fluid add_height_all rounded" alt="Image 2" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <img src={Bluebootle} className="img-fluid add_height_all rounded" alt="Image 3" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <img src={Bootglass} className="img-fluid add_height_all rounded" alt="Image 4" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        <section id='aboutus'>
          <div className="row mx-auto mx-md-0 mt-md-5 pt-md-5 pt-0 mt-0">
            <div className="col-md-5 col-12 order-1 ps-0 order-md-2 pe-md-5 pe-0 d-flex align-items-center justify-content-center mb-md-5 mb-0 pb-md-5 pb-0">
              <div className="row px-md-5 px-0 mt-md-0 mt-5 mx-auto">
                <div className="col-12  text-justify" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                  <h3 className="add_second_heading">
                    {/* From Farm to Bottle – Crafting <br /> Perfection from the Finest Agave */}
                    Rooted in Mexico. 

                  </h3>
                </div>
                <div className="col-12  text-justify mt-md-3 mt-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  <p className="add_font_para_second  text-justify" style={{textAlign:"justify"}}>
                    {/* Hand-selected from the heart of the fields, only the best
                    Blue Weber Agave makes its way into Tequiladoncruz Platinum. Every plant is carefully nurtured, harvested at
                    peak maturity, and expertly trimmed to extract the richest flavors. */}
                    Don Cruz Platinium is more than a name — it’s a tribute. A tribute to 
                    the jimadores who cut each agave by hand. A tribute to the distillers who learned 
                    from their fathers and grandfathers. A tribute to the land itself — sunburnt, rich,
                     and alive with spirit. We don't cut corners.
                     We don't follow trends. We honor the old ways, blending them 
                     with just enough modern mastery to make something timeless—something extraordinary.
                  </p>
                </div>
                {/* <div className="col-12  text-justify mt-md-3 mt-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  <p className="add_font_para_second  text-justify">
                    With generations of expertise, our jimadores ensure that
                    only the purest, most flavorful piñas begin the journey to
                    becoming an exceptional tequila.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="col-md-7 col-12 order-2 order-md-1 ps-0 mb-md-5 mb-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <img src={Twoperson} className="w-100 h-100" alt="" />
            </div>
          </div>
        </section>
      </div>
      <Modal
        show={openModal}
        onHide={() => setOpenModal(false)}
        centered
        className="custom-modal" // 👈 custom class here
      >
        <div className="contact-section">
          <div className="form-container">
            <h2>Savor the Moment</h2>
            <p>Let's raise a glass to great tequila! Contact us to learn more or make an inquiry today.</p>
            <form>
              <div className="input-row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="input-row">
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone Number" />
              </div>
              <textarea placeholder="Write your message..." rows="3"></textarea>
              <button type="submit" className='mt-4'>Let’s Experience The Taste</button>
            </form>
          </div>
        </div>
      </Modal>
    </section>
  )
}
export default HomePage