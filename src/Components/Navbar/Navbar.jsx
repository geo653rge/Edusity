import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useEffect } from "react";

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
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testomonials</li>
        <li>
          {" "}
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
