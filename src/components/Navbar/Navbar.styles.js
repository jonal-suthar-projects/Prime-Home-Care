import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  background: ${({ $scrollNav, theme }) =>
    $scrollNav ? theme.body : 'transparent'};
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
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: 700;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ $click }) => ($click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${({ theme }) => theme.body};
  }
`;

export const NavItem = styled.li`
  height: 80px;
  
  @media screen and (max-width: 960px) {
    height: 60px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.textSecondary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;
  position: relative;

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
`;

export const ThemeToggleButton = styled.button`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.neutralMedium};
  /* color: ${({ theme }) => theme.text}; */
  /* color: ${({ theme }) => theme.textLight}; */
  color: #ADB5BD;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.neutralMedium};
  }
`;