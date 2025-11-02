import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'; // For global icon styling
import black from '../../assets/BlackLogo2.png'
import white from '../../assets/WhiteLogo3.png'
import {
  Nav,
  NavContainer,
  NavLogo,
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
    <IconContext.Provider value={{ color: '#00BFA5' }}> {/* Using primary color for icons globally */}
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
            {/* You can keep "Prime Home Care" text here if the image is just an icon, 
                or remove it if the image is the full logo with text. */}

          </NavLogo>

          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

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
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;