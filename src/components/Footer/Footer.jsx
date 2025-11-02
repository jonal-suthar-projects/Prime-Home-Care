import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
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

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          {/* --- FOOTER COLUMNS REORGANIZED --- */}
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Our Services</FooterLinkTitle>
              <FooterLink to="/services">Personal Care</FooterLink>
              <FooterLink to="/services">Companion Care</FooterLink>
              <FooterLink to="/services">Post-Hospitalization</FooterLink>
              <FooterLink to="/services">Live-in Care</FooterLink>
              {/* <FooterLink to="/gallery">Gallery</FooterLink> */}
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
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">LinkedIn</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          {/* --- END OF REORGANIZATION --- */}

        </FooterLinksContainer>
        
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              {/* Using text logo here for simplicity, but you could add the theme logic again */}
              Prime Home Care
            </SocialLogo>
            <WebsiteRights>
              Prime Home Care © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
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