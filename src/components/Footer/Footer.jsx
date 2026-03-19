import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import logo from '../../assets/logo.png';

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
          <FooterLinksWrapper>
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
              <FooterLinkTitle>Contact</FooterLinkTitle>
              <p>Prime Home Care LLC</p>
              <p>13 Point Of Woods Dr</p>
              <p>Monmouth Junction NJ 08852</p>
              <p>License# HP0424500</p>
              <p>Phone: (848) 218-1140</p>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              {/* Single logo now */}
              <img src={logo} alt="Prime Home Care" />
            </SocialLogo>

            <WebsiteRights>
              <p>Prime Home Care © {new Date().getFullYear()} All rights reserved.
                <br/>NJ Licensed Home Care Agency | License #HP0424500
                </p>
            </WebsiteRights>

            <SocialIcons>
              <SocialIconLink href="https://www.facebook.com/primehomecarenj" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/primehomecarenj" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              {/* <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink> */}
              <SocialIconLink href="https://www.linkedin.com/company/primehomecarenj/" target="_blank" aria-label="LinkedIn">
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
