import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.textDark};
  }
  
  h1 { font-size: 2.75rem; }
  h2 { font-size: 2.25rem; }
  h3 { font-size: 1.75rem; }
  
  @media (max-width: 768px) {
    h1 { font-size: 2.25rem; }
    h2 { font-size: 1.75rem; }
  }

  p {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.textSecondary};
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  section {
    padding: 5rem 0;
    overflow: hidden; // For scroll animations
    
    @media (max-width: 768px) {
      padding: 3rem 0;
    }
  }

  /* Utility Class for Container */
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* Swiper Carousel Custom Styles */
  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.neutralMedium};
  }
  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.primary};
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.primary};
    &:after {
      font-size: 2rem !important;
    }
  }
`;