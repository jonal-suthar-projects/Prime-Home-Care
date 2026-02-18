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
                <h2>Prime Home Care Agency</h2>
                <p>
                  Prime Home Care Agency is dedicated to providing the highest quality home care in New Jersey. We understand that there’s no place like home, which is why our trained and compassionate caregivers are committed to delivering exceptional in-home care that helps you or your loved ones maintain independence and dignity in a familiar, comfortable setting.
                </p>
                <p>
                  Our personalized care plans are designed to meet the unique needs of each individual, ensuring safety, well-being, and peace of mind for the whole family through trusted home care in New Jersey.
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
