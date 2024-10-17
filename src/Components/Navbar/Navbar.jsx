import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useEffect } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar = () => {
  // const [sticky, setSticky] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', ()=> {
  //     window.scrollY > 100 ? setSticky(true) : setSticky(false);
  //   })
  // }, []);
  // return (
  //   <nav className={ "container ${sticky? 'dark-nav' : ''} "}>
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo of edusity" className="logo" />
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testomonials</Link></li>
        <li>
          {" "}
          <Link to='contact' smooth={true} offset={-260} duration={500}  className="btn">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
