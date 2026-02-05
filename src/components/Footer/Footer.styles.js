import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.neutralMedium || '#ddd'};
  padding: 4rem 0 2rem 0;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 90%;
  }
  
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 820px) {
    margin: 10px;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.textDark};
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
  margin-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.neutralMedium || '#eee'}50;
  padding-top: 2rem;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const SocialLogo = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-self: start;
  margin-bottom: 16px;

  /* Style for the image logo */
  img {
    height: 120px; /* Adjust as needed */
    width: auto;
    object-fit: contain;
  }

  @media screen and (min-width: 820px) {
    margin-bottom: 0;
  }
`;

export const WebsiteRights = styled.small`
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 16px;
  
  @media screen and (min-width: 820px) {
    margin-bottom: 0;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;