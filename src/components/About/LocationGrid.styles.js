import styled from 'styled-components';

export const LocationsSection = styled.section`
  padding: 2rem 0;
  .container { max-width: 1000px; margin: 0 auto; padding: 0 20px; }

  h2 { text-align: center; font-size: 2.2rem; color: ${({ theme }) => theme.textDark}; }
  .intro-text { text-align: center; color: ${({ theme }) => theme.textSecondary}; margin-top: 0.5rem; }
`;

export const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LocationCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);

  h3 { font-size: 1.15rem; margin-bottom: 0.5rem; color: ${({ theme }) => theme.textDark}; display:flex; align-items:center; gap:8px; }
  .pin-icon { color: ${({ theme }) => theme.primary}; }
  .towns { color: ${({ theme }) => theme.textSecondary}; line-height: 1.7; }
  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.75rem;
  }

  a.pill {
    display: inline-block;
    background: ${({ theme }) => theme.primary};
    color: #fff;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    font-size: 0.95rem;
    text-decoration: none;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  }
`;
