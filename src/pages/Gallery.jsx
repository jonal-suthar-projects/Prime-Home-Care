import React from 'react';
import styled from 'styled-components';
import {
  PageHeaderContainer,
  PageTitle,
  PageSubtitle,
} from '../components/common/PageHeader';
import { motion } from 'framer-motion';
import g1 from '../assets/G1.jpg'
import g2 from '../assets/G2.jpg'
import g3 from '../assets/G3.jpg'
import g4 from '../assets/G4.jpg'
import s1 from '../assets/S1.png'
import s2 from '../assets/S2.png'
import s3 from '../assets/S3.png'
import s4 from '../assets/S4.png'
import s5 from '../assets/S5.png'
import s6 from '../assets/S6.png'
import ScrollAnimation from '../components/common/ScrollAnimation';

const GalleryPageContainer = styled.div`
  background: ${({ theme }) => theme.body};
  min-height: 100vh;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 5rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const GalleryItem = styled(motion.div)`
  width: 100%;
  height: 250px;
  background: ${({ theme }) => theme.neutralMedium};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

// Placeholder image URLs from Unsplash
const placeholderImages = [
  g1,g2,g3,g4,s1,s2,s3,s4,s5,s6
];

const Gallery = () => {
  return (
    <GalleryPageContainer>
      <PageHeaderContainer>
        <PageTitle>Our Gallery</PageTitle>
        <PageSubtitle>
          A glimpse into our compassionate care and the families we serve.
        </PageSubtitle>
      </PageHeaderContainer>

      <div className="container">
        <GalleryGrid>
          {placeholderImages.map((src, index) => (
            <ScrollAnimation key={index} delay={index * 0.05}>
              <GalleryItem
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={src} alt={`Gallery item ${index + 1}`} />
              </GalleryItem>
            </ScrollAnimation>
          ))}
        </GalleryGrid>
      </div>
    </GalleryPageContainer>
  );
};

export default Gallery;