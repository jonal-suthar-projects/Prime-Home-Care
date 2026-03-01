import styled from 'styled-components';

export const MapSection = styled.section`
  padding: 1.5rem 0 3rem 0;
  .container { max-width: 1000px; margin: 0 auto; padding: 0 20px; }
`;

export const MapFrame = styled.iframe`
  width: 100%;
  height: 420px;
  border: 0;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow};

  @media (max-width: 768px) {
    height: 320px;
  }
`;
