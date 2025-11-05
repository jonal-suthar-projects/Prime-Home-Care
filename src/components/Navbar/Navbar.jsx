import black from '../../assets/BlackLogo2.png'
import white from '../../assets/WhiteLogo3.png'


import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes, FaPhone } from 'react-icons/fa'; // Import FaPhone
import {
  Nav,
  NavContainer,
  NavLogo,
  NavRightWrapper, // Import new wrapper
  NavCallButton, // Import new button
  MobileIcon,
  NavMenu,
  NavItem,
  StyledNavLink,
  ThemeToggleWrapper,
  ThemeToggleButton,
} from './Navbar.styles';

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  return (
    <Nav $scrollNav={scroll}>
      <NavContainer>

        <NavLogo to="/" onClick={closeMobileMenu}>
          {/* --- MODIFIED: Dynamic Logo Based on Theme --- */}
          {currentTheme === 'light' ? (
            <img
              src={white} // Path to your black/dark logo for light theme
              alt="Prime Home Care"
              style={{ height: '160px', marginBottom: '8px' }} // Adjust size as needed
            />
          ) : (
            <img
              src={black} // Path to your white/light logo for dark theme
              alt="Prime Home Care"
              style={{ height: '160px', marginBottom: '8px' }} // Adjust size as needed
            />
          )}

        </NavLogo>

        {/* --- NEW WRAPPER (Right Side) --- */}
        <NavRightWrapper>

          {/* --- NEW CALL BUTTON --- */}
          {/* This 'a' tag opens the phone's dialer */}
          <NavCallButton href="tel:+1234567890">
            <FaPhone />
            {/* This text will be hidden on mobile */}
            <span className="call-text">Call Now</span>
          </NavCallButton>

          {/* --- MOBILE HAMBURGER ICON --- */}
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          {/* --- NAVIGATION MENU --- */}
          <NavMenu $click={click}>
            <NavItem>
              <StyledNavLink to="/" onClick={closeMobileMenu}>
                Home
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/services" onClick={closeMobileMenu}>
                Services
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/careers" onClick={closeMobileMenu}>
                Careers
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/contact" onClick={closeMobileMenu}>
                Contact
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/about" onClick={closeMobileMenu}>
                About Us
              </StyledNavLink>
            </NavItem>
            {/* <NavItem>
              <StyledNavLink to="/gallery" onClick={closeMobileMenu}>
                Gallery
              </StyledNavLink>
            </NavItem> */}

            {/* Theme Toggle remains at the end */}
            <NavItem>
              <ThemeToggleWrapper>
                <ThemeToggleButton onClick={toggleTheme}>
                  {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
                </ThemeToggleButton>
              </ThemeToggleWrapper>
            </NavItem>
          </NavMenu>
        </NavRightWrapper>

      </NavContainer>
    </Nav >
  );
};

export default Navbar;