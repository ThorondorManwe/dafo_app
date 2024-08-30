"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo-white.png";
import profileDefault from "@/assets/images/profile.png";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (index) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const ariaExpanded = () => {
    const csUL = document.querySelector("#cs-expanded");
    const csExpanded = csUL.getAttribute("aria-expanded");

    if (csExpanded === "false") {
      csUL.setAttribute("aria-expanded", "true");
    } else {
      csUL.setAttribute("aria-expanded", "false");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scroll = document.documentElement.scrollTop;
      setIsScrolled(scroll >= 100);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

    const handleHamburgerClick = () => {
      CShamburgerMenu.classList.toggle("cs-active");
      CSnavbarMenu.classList.toggle("cs-active");
      CSbody.classList.toggle("cs-open");
      ariaExpanded();
    };

    CShamburgerMenu.addEventListener("click", handleHamburgerClick);

    return () => {
      CShamburgerMenu.removeEventListener("click", handleHamburgerClick);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const dropDowns = Array.from(
      document.querySelectorAll("#cs-navigation .cs-dropdown")
    );

    const handleDropdownClick = (item) => {
      item.classList.toggle("cs-active");
    };

    dropDowns.forEach((item) => {
      item.addEventListener("click", () => handleDropdownClick(item));
    });

    return () => {
      dropDowns.forEach((item) => {
        item.removeEventListener("click", () => handleDropdownClick(item));
      });
    };
  }, []);

  return (
    <header id="cs-navigation" className={isScrolled ? "scroll" : ""}>
      <div className="cs-container">
        <a href="/" className="cs-logo" aria-label="back to home">
          <img
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/day-care.svg"
            alt="logo"
            width="210"
            height="29"
            aria-hidden="true"
            decoding="async"
          />
        </a>
        <nav className="cs-nav" role="navigation">
          <button
            className={`cs-toggle ${isMenuOpen ? "cs-active" : ""}`}
            aria-label="mobile menu toggle"
            onClick={handleToggle}
          >
            <div className="cs-box" aria-hidden="true">
              <span className="cs-line cs-line1" aria-hidden="true"></span>
              <span className="cs-line cs-line2" aria-hidden="true"></span>
              <span className="cs-line cs-line3" aria-hidden="true"></span>
            </div>
          </button>
          <div className="cs-ul-wrapper">
            <ul id="cs-expanded" className="cs-ul" aria-expanded={isMenuOpen}>
              <li className="cs-li">
                <Link href="/" className="cs-li-link cs-active">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li className="cs-li">
                <Link href="/acerca-de" className="cs-li-link">
                  {" "}
                  Acerca De{" "}
                </Link>
              </li>
              <li
                className={`cs-li cs-dropdown ${
                  isDropdownOpen[0] ? "cs-active" : ""
                }`}
                tabIndex="0"
                onClick={() => handleDropdownToggle(0)}
              >
                <span className="cs-li-link">
                  Services
                  <img
                    className="cs-drop-icon"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/down-gold.svg"
                    alt="dropdown icon"
                    width="15"
                    height="15"
                    decoding="async"
                    aria-hidden="true"
                  />
                </span>
                <ul className="cs-drop-ul">
                  <li className="cs-drop-li">
                    <a href="/registration" className="cs-li-link cs-drop-link">
                      Registration
                    </a>
                  </li>
                  <li className="cs-drop-li">
                    <a href="/classes" className="cs-li-link cs-drop-link">
                      Our Classes
                    </a>
                  </li>
                </ul>
              </li>
              <li className="cs-li">
                <a href="/blog" className="cs-li-link">
                  {" "}
                  Blog{" "}
                </a>
              </li>
              <li className="cs-li">
                <a href="/contact" className="cs-li-link">
                  {" "}
                  Contact{" "}
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="cs-contact-group">
          <a href="tel:+84198533999" className="cs-phone">
            <img
              className="cs-phone-icon"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/phone-1a.svg"
              alt="logo"
              width="24"
              height="24"
              aria-hidden="true"
              decoding="async"
            />
            +84 1985 33 999
          </a>
          <div className="cs-social">
            <a href="/" className="cs-social-link">
              <img
                className="cs-social-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/facebook-1a.svg"
                alt="logo"
                width="12"
                height="12"
                aria-hidden="true"
                decoding="async"
              />
            </a>
            <a href="/" className="cs-social-link">
              <img
                className="cs-social-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/twitter-1a.svg"
                alt="logo"
                width="12"
                height="12"
                aria-hidden="true"
                decoding="async"
              />
            </a>
            <a href="/" className="cs-social-link">
              <img
                className="cs-social-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/instagram1a.svg"
                alt="logo"
                width="12"
                height="12"
                aria-hidden="true"
                decoding="async"
              />
            </a>
            <a href="/" className="cs-social-link">
              <img
                className="cs-social-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/youtube1a.svg"
                alt="logo"
                width="12"
                height="12"
                aria-hidden="true"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
