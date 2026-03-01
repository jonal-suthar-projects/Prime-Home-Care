import styled from 'styled-components';

export const SubServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const SubServiceCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  border-left: 4px solid ${({ theme }) => theme.primary};
  
  h3 { color: ${({ theme }) => theme.textDark}; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 10px; }
  p { font-size: 0.95rem; margin: 0; }
  svg { color: ${({ theme }) => theme.primary}; }
`;
