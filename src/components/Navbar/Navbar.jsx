import logo from '../../assets/logo.png';

import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes, FaPhone, FaChevronDown } from 'react-icons/fa';
import {
  Nav,
  NavContainer,
  NavLogo,
  NavRightWrapper,
  NavCallButton,
  MobileIcon,
  NavMenu,
  NavItem,
  StyledNavLink,
  ThemeToggleWrapper,
  ThemeToggleButton,
  DropdownMenu,
  DropdownLink
} from './Navbar.styles';

const services = [
  { name: 'Personal Care', path: '/services/personal-care' },
  { name: 'Companion Care', path: '/services/companion-care' },
  { name: 'Specialty Care', path: '/services/specialty-care' },
];

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setDropdown(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth >= 960) setDropdown(true);
  };

  const onMouseLeave = () => {
    if (window.innerWidth >= 960) setDropdown(false);
  };

  const toggleDropdownMobile = (e) => {
    if (window.innerWidth < 960) {
      e.preventDefault();
      setDropdown(!dropdown);
    } else {
      closeMobileMenu();
    }
  };

  const changeNav = () => {
    if (window.scrollY >= 80) setScroll(true);
    else setScroll(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  return (
    <Nav $scrollNav={scroll}>
      <NavContainer>

        {/* LOGO MOVED INSIDE RIGHT WRAPPER */}
        <NavRightWrapper>

          <NavLogo to="/" onClick={closeMobileMenu}>
            <img
              src={logo}
              alt="Prime Home Care"
              style={{ height: '60px', marginRight: '15px' }}
            />
          </NavLogo>

          <NavCallButton href="tel:+18482181140">
            <FaPhone />
            <span className="call-text">Call Now</span>
          </NavCallButton>

          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu $click={click}>
            <NavItem>
              <StyledNavLink to="/" onClick={closeMobileMenu}>Home</StyledNavLink>
            </NavItem>

            <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <StyledNavLink to="/services/personal-care" onClick={toggleDropdownMobile}>
                Services <FaChevronDown style={{ fontSize: '0.7em', marginLeft: '5px' }} />
              </StyledNavLink>

              <DropdownMenu $dropdown={dropdown}>
                {services.map((service) => (
                  <li key={service.name}>
                    <DropdownLink to={service.path} onClick={closeMobileMenu}>
                      {service.name}
                    </DropdownLink>
                  </li>
                ))}
              </DropdownMenu>
            </NavItem>

            <NavItem>
              <StyledNavLink to="/careers" onClick={closeMobileMenu}>Careers</StyledNavLink>
            </NavItem>

            <NavItem>
              <StyledNavLink to="/contact" onClick={closeMobileMenu}>Contact</StyledNavLink>
            </NavItem>

            <NavItem>
              <StyledNavLink to="/about" onClick={closeMobileMenu}>About Us</StyledNavLink>
            </NavItem>

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
    </Nav>
  );
};

export default Navbar;
