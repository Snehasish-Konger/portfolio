import React, { useState } from "react";
import "./Nav.css";
import logo from "./logo.svg";
const Nav = () => {
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active", window.scrollY > 100);
  });
  const [Mobile, setMobile] = useState(false);
  return (
    <div>
      <nav className="nav">
        <div className="container d_flex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="navlink">
            {/* <ul className="link f_flex uppercase"> */}
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="https://scientyficworld.org/author/snehasishkonger01/" target="blank">Blog</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <button className="home-btn">Hire Me</button>
              </li>
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
