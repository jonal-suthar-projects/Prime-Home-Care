import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Card = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 0.3s ease;
  border-left: 5px solid ${({ theme }) => theme.primary};

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

export const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JobTitle = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textDark};
  margin-bottom: 0.5rem;
`;

export const JobDetails = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const JobLocation = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const JobType = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const ApplyButton = styled(Link)`
  border-radius: 50px;
  background: ${({ theme }) => theme.primary};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${({ theme }) => theme.textLight};
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;