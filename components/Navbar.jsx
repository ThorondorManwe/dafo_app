import Image from "next/image";
import logo from "@/assets/images/logo-white.png";
import profileDefault from "@/assets/images/profile.png";
import Link from "next/link";


const Navbar = () => {
  return (
    <header id="cs-navigation">

      <div className="cs-container">
          {/* <!--Nav Logo--> */}
          {/* <!--Logo is turned white in the css with a filter on dark mode--> */}
          <a href="" className="cs-logo" aria-label="back to home">
              <Image src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/day-care.svg" alt="logo" width="210" height="29" aria-hidden="true" decoding="async" />
          </a>
          {/* <!--Navigation List--> */}
          <nav className="cs-nav" role="navigation">
              {/* <!--Mobile Nav Toggle--> */}
              <button className="cs-toggle" aria-label="mobile menu toggle">
                  <div className="cs-box" aria-hidden="true">
                      <span className="cs-line cs-line1" aria-hidden="true"></span>
                      <span className="cs-line cs-line2" aria-hidden="true"></span>
                      <span className="cs-line cs-line3" aria-hidden="true"></span>
                  </div>
              </button>
              {/* <!-- We need a wrapper div so we can set a fixed height on the cs-ul in case the nav list gets too long from too many dropdowns being opened and needs to have an overflow scroll. This wrapper acts as the background so it can go the full height of the screen and not cut off any overflowing nav items while the cs-ul stops short of the bottom of the screen, which keeps all nav items in view no matter how mnay there are--> */}
              <div className="cs-ul-wrapper">
                  <ul id="cs-expanded" className="cs-ul" aria-expanded="false">
                      <li className="cs-li">
                          <Link href="/" className="cs-li-link cs-active">Inicio</Link>
                      </li>
                      <li className="cs-li">
                          <Link href="/acerca-de" className="cs-li-link">Acerca de</Link>
                      </li>
                      {/* <!--Copy and paste this cs-dropdown list item and replace any .cs-li with this cs-dropdown group to make a new dropdown and it will work--> */}
                      <li className="cs-li cs-dropdown" tabindex="0">
                          <span className="cs-li-link">
                              Services
                              <Image className="cs-drop-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/down-gold.svg" alt="dropdown icon" width="15" height="15" decoding="async" aria-hidden="true" />
                          </span>
                          <ul className="cs-drop-ul">
                              <li className="cs-drop-li">
                                  <a href="" className="cs-li-link cs-drop-link">Registration</a>
                              </li>
                              <li className="cs-drop-li">
                                  <a href="" className="cs-li-link cs-drop-link">Our ClassNamees</a>
                              </li>
                          </ul>
                      </li>
                      <li className="cs-li">
                          <a href="" className="cs-li-link">
                              Blog
                          </a>
                      </li>
                      <li className="cs-li">
                          <a href="" className="cs-li-link">
                              Contact
                          </a>
                      </li>
                  </ul>
              </div>
          </nav>
          <div className="cs-contact-group">
              <a href="tel:+84 1985 33 999" className="cs-phone">
                  <Image className="cs-phone-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/phone-1a.svg" alt="logo" width="24" height="24" aria-hidden="true" decoding="async" />
                  +84 1985 33 999
              </a>
              <div className="cs-social">
                  <a href="" className="cs-social-link">
                      <Image className="cs-social-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/facebook-1a.svg" alt="logo" width="12" height="12" aria-hidden="true" decoding="async" />
                  </a>
                  <a href="" className="cs-social-link">
                      <Image className="cs-social-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/twitter-1a.svg" alt="logo" width="12" height="12" aria-hidden="true" decoding="async" />
                  </a>
                  <a href="" className="cs-social-link">
                      <Image className="cs-social-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/instagram1a.svg" alt="logo" width="12" height="12" aria-hidden="true" decoding="async" />
                  </a>
                  <a href="" className="cs-social-link">
                      <Image className="cs-social-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/youtube1a.svg" alt="logo" width="12" height="12" aria-hidden="true" decoding="async" />
                  </a>
              </div>
          </div>
          {/* <!--Dark Mode toggle, uncomment button code if you want to enable a dark mode toggle--> */}
          {/* <!-- <button id="dark-mode-toggle" aria-label="dark mode toggle">
              <svg className="cs-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480" xml:space="preserve"><path d="M459.782 347.328c-4.288-5.28-11.488-7.232-17.824-4.96-17.76 6.368-37.024 9.632-57.312 9.632-97.056 0-176-78.976-176-176 0-58.4 28.832-112.768 77.12-145.472 5.472-3.712 8.096-10.4 6.624-16.832S285.638 2.4 279.078 1.44C271.59.352 264.134 0 256.646 0c-132.352 0-240 107.648-240 240s107.648 240 240 240c84 0 160.416-42.688 204.352-114.176 3.552-5.792 3.04-13.184-1.216-18.496z"/></svg>
              <Image className="cs-sun" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fsun.svg" decoding="async" alt="moon" width="15" height="15">
          </button> --> */}
      </div>
    </header>
  );
};

export default Navbar;
