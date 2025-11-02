import styled from 'styled-components';

export const TestimonialSection = styled.section`
  background: ${({ theme }) => theme.background};
`;

export const TestimonialH2 = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.textDark};
`;

export const TestimonialSlide = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  padding: 3rem;
  box-shadow: ${({ theme }) => theme.shadow};
  max-width: 800px;
  margin: 1rem auto 4rem auto; // Bottom margin for pagination
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const QuoteIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

export const TestimonialText = styled.p`
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.7;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 2rem;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.primary};
`;

export const AuthorInfo = styled.div`
  text-align: left;
  
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.textDark};
    margin: 0;
  }
  
  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.textSecondary};
    margin: 0;
  }
`;