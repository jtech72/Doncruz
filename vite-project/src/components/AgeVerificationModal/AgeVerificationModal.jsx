import React, { useState, useEffect } from "react";
import logo from "../../assets/fav.svg";
import { color } from "framer-motion";

const AgeVerificationModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isVerified = localStorage.getItem("ageVerified");
    if (isVerified === "true") {
      setIsVisible(true);
    }
  }, []);

  const handleVerification = (isOver21) => {
    if (isOver21) {
      localStorage.setItem("ageVerified", "true");
      setIsVisible(true);
    } else {
      window.location.href = "https://www.responsibility.org/";
    }
  };

  if (!isVisible) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button style={closeButtonStyle} onClick={() => setIsVisible(false)} aria-label="Close">
          ×
        </button>

        {/* Logo Circle */}
        <div style={logoWrapStyle}>
          <img src={logo} alt="Logo" style={logoStyle} />
        </div>

        <h2 style={headingStyle}>Welcome</h2>
        <p style={textStyle}>You must be 21 to view and use this website</p>
        <button style={under21ButtonStyle} onClick={() => handleVerification(false)}>
          I am under 21
        </button>
        <button style={over21ButtonStyle} onClick={() => handleVerification(true)}>
          I am over 21
        </button>
      </div>
    </div>
  );
};

// Styles
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.7)",
//   backgroundImage: url('../src/assets/contactimg.svg'), 

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "4rem 2rem 2rem", // extra padding on top for the logo
  width: "90%",
  maxWidth: "400px",
  textAlign: "center",
  borderRadius: "12px",
  position: "relative",
  boxShadow: "0 0 30px rgba(0,0,0,0.5)",
};

const closeButtonStyle = {
  position: "absolute",
  top: "0rem",
  right: "0rem",
  width: "32px",
  height: "32px",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "50%",
  fontSize: "2.25rem",
  fontWeight: "bold",
  lineHeight: "1",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color:"black",
//   boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
};

const logoWrapStyle = {
  backgroundColor: "#fff",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  position: "absolute",
  top: "-40px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2,
};

const logoStyle = {
  width: "60%",
  height: "auto",
};

const headingStyle = {
    fontWeight: "bold",
    marginBottom: "0.5rem",
    marginTop: "1rem",
    fontSize: "1.5rem",
    fontFamily: "'Quikly-Rar', sans-serif"
  };
  

const textStyle = {
  color: "#555",
  marginBottom: "1.5rem",
};

const under21ButtonStyle = {
  width: "100%",
  padding: "0.75rem",
  marginBottom: "0.5rem",
  borderRadius: "8px",
  border: "2px solid #272326",
  backgroundColor: "#fff",
  color: "#272326",
  fontWeight: "bold",
  cursor: "pointer",
};

const over21ButtonStyle = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#f1c40f",
  color: "#000",
  fontWeight: "bold",
  cursor: "pointer",
};

export default AgeVerificationModal;
