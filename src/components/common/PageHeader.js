import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
  padding: 4rem 0;
  background: ${({ theme }) => theme.background};
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.neutralMedium};
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.textDark};
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const PageSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 600px;
  margin: 0 auto;
`;