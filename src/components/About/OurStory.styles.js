import styled from 'styled-components';

export const StorySection = styled.section`
  padding: 4rem 0 2rem 0;
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

export const StoryImage = styled.img`
  width: 100%;
  max-width: 320px;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow};
  display: block;
  margin: 0 auto;
`;

export const StoryContent = styled.div`
  h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.textDark};
  }

  p {
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.7;
    margin-bottom: 1rem;
  }
`;

export const PhotoCaption = styled.div`
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.textDark};
  font-weight: 700;
  line-height: 1.1;

  > div:last-child {
    font-weight: 500;
    color: ${({ theme }) => theme.textSecondary};
    font-size: 0.95rem;
  }
`;
