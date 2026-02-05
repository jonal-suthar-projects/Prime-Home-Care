import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// Import Logos
import black from '../../assets/BlackLogo2.png';
import white from '../../assets/WhiteLogo3.png';

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './Footer.styles';

const Footer = ({ currentTheme }) => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            {/* UPDATED LINKS TO NEW PAGES */}
            <FooterLinkItems>
              <FooterLinkTitle>Our Services</FooterLinkTitle>
              <FooterLink to="/services/personal-care">Personal Care</FooterLink>
              <FooterLink to="/services/companion-care">Companion Care</FooterLink>
              <FooterLink to="/services/specialty-care">Specialty Care</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Company</FooterLinkTitle>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Connect With Us</FooterLinkTitle>
              <FooterLink to="#">Facebook</FooterLink>
              <FooterLink to="https://www.instagram.com/primehomecarenj?igsh=OXFmemZqYTA4dmxn">Instagram</FooterLink>
              <FooterLink to="#">Twitter</FooterLink>
              <FooterLink to="#">LinkedIn</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              {/* LOGIC: Light Theme = Black Logo, Dark Theme = White Logo */}
              <img 
                src={currentTheme === 'light' ? white : black} 
                alt="Prime Home Care" 
              />
            </SocialLogo>

            <WebsiteRights>
              Prime Home Care © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/primehomecarenj?igsh=OXFmemZqYTA4dmxn" target="_blank" aria-label="Instagram" >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;