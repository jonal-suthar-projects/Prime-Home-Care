import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ServicesOverview from '../components/ServicesOverview/ServicesOverview';
import Testimonials from '../components/Testimonials/Testimonials';
import ScrollAnimation from '../components/common/ScrollAnimation';
import styled from 'styled-components';
import { Button } from '../components/common/Button';
import g1 from '../assets/G2.jpg';

const AboutSection = styled.section`
  background: ${({ theme }) => theme.background};
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  h2 {
    color: ${({ theme }) => theme.textDark};
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
    text-align: justify;
  }
`;

const AboutImage = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection />

      <ScrollAnimation>
        <AboutSection>
          <div className="container">
            <AboutContainer>
              <AboutContent>
                <h2>Redefining Care At Home</h2>
                <p>
  At Prime Homecare, we believe that quality care starts with compassion. Our mission is to provide dependable, respectful, and personalized in-home support that enhances comfort, dignity, and independence.
                </p>
                <p>
We understand that every family’s needs are different. That’s why we create customized care plans tailored to each individual. Our caregivers are carefully screened, trained, and committed to treating every client like family.
                </p>
                <Button to="/about" $big="false" $fontBig="false">
                  Learn More About Us
                </Button>
              </AboutContent>
              <AboutImage>
                <img src={g1} alt="Prime Home Care Agency, prime home health care, home care in New Jersey, Home Care NJ" />
              </AboutImage>
            </AboutContainer>
          </div>
        </AboutSection>
      </ScrollAnimation>

      <ScrollAnimation>
        <ServicesOverview />
      </ScrollAnimation>

      <ScrollAnimation>
        <Testimonials />
      </ScrollAnimation>
    </>
  );
};

export default Home;
