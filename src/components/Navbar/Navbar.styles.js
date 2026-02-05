import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// Removed NavHashLink as we are now using separate pages

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
  justify-content: space-between;
  align-items: center;
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
  z-index: 1001;
`;

export const NavRightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 1001;
`;

export const NavCallButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 8px 16px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    transform: translateY(-2px);
  }

  @media screen and (max-width: 960px) {
    padding: 8px 12px;
    .call-text {
      @media (max-width: 400px) { display: none; }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    margin-left: 10px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  gap: 1.5rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: ${({ $click }) => ($click ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.4s ease;
    background: ${({ theme }) => theme.cardBg};
    padding-top: 100px;
    overflow-y: auto;
    z-index: 999;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    justify-content: flex-start;
    gap: 0;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (max-width: 960px) {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.neutralLight || '#eee'}30;
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
    bottom: 25px;
    left: 1rem;
    right: 1rem;
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    &::after { transform: scaleX(1); }
  }

  &:hover { color: ${({ theme }) => theme.primary}; }
  
  @media screen and (max-width: 960px) {
    width: 100%;
    justify-content: center;
    padding: 20px;
    font-size: 1.2rem;
    
    &::after { display: none; }
    &:hover { background: ${({ theme }) => theme.primary}10; }
  }
`;

// --- DROPDOWN STYLES ---
export const DropdownMenu = styled.ul`
  display: ${({ $dropdown }) => ($dropdown ? 'block' : 'none')};
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.cardBg};
  width: 260px;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 0 0 10px 10px;
  padding: 10px 0;
  text-align: left;
  z-index: 1100;

  @media screen and (max-width: 960px) {
    position: static;
    transform: none;
    display: ${({ $dropdown }) => ($dropdown ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    background: ${({ theme }) => theme.neutralLight || '#f9f9f9'}30;
    box-shadow: inset 0 4px 8px -4px rgba(0,0,0,0.1);
    padding: 0;
    text-align: center;
    border-radius: 0;
  }
`;

// UPDATED: Now styling NavLink instead of NavHashLink
export const DropdownLink = styled(NavLink)`
  display: block;
  padding: 12px 20px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;

  &:hover, &.active {
    background: ${({ theme }) => theme.primary}15;
    color: ${({ theme }) => theme.primary};
    border-left: 3px solid ${({ theme }) => theme.primary};
  }

  @media screen and (max-width: 960px) {
    font-size: 1.1rem;
    padding: 18px 0;
    border-left: none;
    color: ${({ theme }) => theme.textSecondary};
    
    &:hover {
      background: rgba(0,0,0,0.05);
      color: ${({ theme }) => theme.primary};
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
    padding: 2rem 0;
  }
`;

export const ThemeToggleButton = styled.button`
  background: ${({ theme }) => theme.primary};
  border: 1px solid transparent;
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
    transform: scale(1.1);
  }
`;