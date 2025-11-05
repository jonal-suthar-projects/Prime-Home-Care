import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  background: ${({ $scrollNav, theme }) =>
    $scrollNav ? theme.cardBg : 'transparent'};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  box-shadow: ${({ $scrollNav, theme }) =>
    $scrollNav ? theme.shadow : 'none'};
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between; /* This is key */
  align-items: center; /* Vertically center all items */
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(NavLink)`
  color: ${({ theme }) => theme.textDark};
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  /* Removed margin-left, padding handles it */
`;

// --- NEW ---
// This wrapper holds all items on the right side
export const NavRightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* Adds spacing between button, icon, and menu */
`;

// --- NEW ---
// The "Call Now" button
export const NavCallButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textLight};
  padding: 8px 16px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap; /* Prevents "Call Now" from wrapping */

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    transform: translateY(-2px);
  }

  /* On mobile, hide the text and shrink padding */
  @media screen and (max-width: 960px) {
    padding: 8px 9px; /* Make it more square-ish */
    font-size: 1.1rem; /* Make icon slightly bigger */
/* 
    .call-text {
      display: none; 
    } */
  }
`;

export const MobileIcon = styled.div`
  display: none; /* Hidden on desktop */

  @media screen and (max-width: 960px) {
    display: block; /* Shown on mobile */
    /* Position is no longer absolute, flexbox handles it */
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;

export const NavMenu = styled.ul`
  display: flex; /* This is for desktop */
  align-items: center;
  list-style: none;
  text-align: center;
  /* Removed margin-right, gap handles it */

  @media screen and (max-width: 960px) {
    /* This is for mobile */
    display: ${({ $click }) => ($click ? 'flex' : 'none')}; /* Show/hide */
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px; /* Position it below the navbar */
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    background: ${({ theme }) => theme.body};
    padding-top: 2rem;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  
  @media screen and (max-width: 960px) {
    height: 60px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: 20px;
    left: 1rem;
    right: 1rem;
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    &::after {
      transform: scaleX(1);
    }
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  
  @media screen and (max-width: 960px) {
    width: 100%;
    justify-content: center;
    font-size: 1.4rem;
    &::after {
      bottom: 10px;
    }
  }
`;

export const ThemeToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    justify-content: center;
    width: 100%;
  }
`;

export const ThemeToggleButton = styled.button`
  background: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.textLight};
  /* color: ${({ theme }) => theme.primary}; */
  color: white;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    border-color: ${({ theme }) => theme.primaryHover};
  }
`;