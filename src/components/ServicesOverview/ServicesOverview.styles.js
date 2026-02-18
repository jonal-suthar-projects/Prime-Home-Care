import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ServicesContainer = styled.section`
  background: ${({ theme }) => theme.body};
`;

export const ServicesH1 = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.textDark};
  margin-bottom: 4rem;
  text-align: center;
`;

export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

// UPDATED: Now wraps 'Link' so the whole card is clickable
export const ServicesCard = styled(motion(Link))`
  background: ${({ theme }) => theme.cardBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadowHover};
    border-color: ${({ theme }) => theme.primary}30;
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }
`;


export const ServicesIcon = styled.div`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
  transition: 0.3s ease;

  ${ServicesCard}:hover & {
    transform: scale(1.1);
    color: ${({ theme }) => theme.primary};
  }
`;


export const ServicesH2 = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textDark};
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -6px;
    width: 0%;
    height: 3px;
    background: ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  ${ServicesCard}:hover &::after {
    width: 80%;
  }
`;


export const ServicesP = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.5;
`;