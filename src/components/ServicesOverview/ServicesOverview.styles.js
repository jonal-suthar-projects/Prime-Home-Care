import styled from 'styled-components';
import { motion } from 'framer-motion';

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

export const ServicesCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s ease-in-out;
  text-align: center;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadowHover};
    transform: translateY(-5px);
  }
`;

export const ServicesIcon = styled.div`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
`;

export const ServicesH2 = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textDark};
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;