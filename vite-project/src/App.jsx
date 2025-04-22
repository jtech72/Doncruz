import React, { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import TermsofUse from './components/TermsofUse/TermsofUse'
import CookiesPolicy from './components/CookiesPolicy/CookiesPolicy'
import TermsandConditions from './components/TermsandConditions/TermsandConditions'

function App() {
  const [openModal, setOpenModal] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup
  }, []);
  return (
    <>
      <Navbar />
     <Routes>

      <Route path='/' element={<HomePage setOpenModal={setOpenModal} openModal={openModal}/>}/>
      <Route path='/privacy' element={<PrivacyPolicy />}/>
      <Route path='/termsOfUse' element={<TermsofUse />}/>
      <Route path='/cookies' element={<CookiesPolicy />}/>
      <Route path='/termsAndConditions' element={<TermsandConditions />}/>

     </Routes>
      <Footer />
    </>
  )
}

export default App
