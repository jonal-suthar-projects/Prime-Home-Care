import styled from 'styled-components';

export const HeroContainer = styled.section`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 90vh;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.heroOverlay};
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const HeroH1 = styled.h1`
  /* color: ${({ theme }) => theme.textDark}; */
  color: white;
  font-size: 3.5rem;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 1.5rem;
  /* color: ${({ theme }) => theme.textSecondary}; */
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 2rem;
`;