import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.neutralMedium || '#ddd'};
  padding: 2rem 0 1rem 0;   /* reduced */
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 820px) {
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
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 8px 16px;   /* reduced */
  width: 160px;
  color: ${({ theme }) => theme.text};
`;

export const FooterLinkTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;   /* reduced */
  color: ${({ theme }) => theme.textDark};
`;

export const FooterLink = styled(Link)`
  position: relative;
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  margin-bottom: 6px;   /* reduced */
  font-size: 0.85rem;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0%;
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &:hover::after {
    width: 100%;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
  margin-top: 1.5rem;   /* reduced */
  border-top: 1px solid ${({ theme }) => theme.neutralMedium || '#eee'}50;
  padding-top: 1.2rem;  /* reduced */
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  align-items: center;

  img {
    height: 70px;   /* reduced from 120px */
    width: auto;
    object-fit: contain;
  }
`;

export const WebsiteRights = styled.small`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.8rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;   /* better than space-between */
`;

export const SocialIconLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.3rem;   /* slightly smaller */
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0%;
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }

  &:hover::after {
    width: 100%;
  }
`;
