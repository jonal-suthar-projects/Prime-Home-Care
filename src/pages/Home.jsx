import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ServicesOverview  from '../components/ServicesOverview/ServicesOverview.jsx';
import Testimonials from '../components/Testimonials/Testimonials';
import ScrollAnimation from '../components/common/ScrollAnimation';
import styled from 'styled-components';
import { Button } from '../components/common/Button';
import g1 from '../assets/G2.jpg';
import { FaHeart, FaShieldAlt, FaUserMd, FaSearchPlus } from 'react-icons/fa';

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
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  .bullet-item {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
  }

  .bullet-header {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.textDark};
    margin-bottom: 0.5rem;
  }

  .bullet-icon {
    color: #ed872d; /* A nice heart red or your brand color */
    font-size: 1.4rem;
    display: flex;
    align-items: center;
  }

  p {
    margin-left: 35px; /* Aligns text under the header, skipping the icon space */
    font-size: 1.05rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.textSecondary || '#555'};
    text-align: left; /* Changed from justify for better readability with bullets */
  }

  @media (max-width: 480px) {
    p {
      margin-left: 0; /* Stack vertically on small mobile screens */
    }
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
        <ServicesOverview />
      </ScrollAnimation>
      <ScrollAnimation>
        <AboutSection>
          <div className="container">
            <AboutContainer>
              <AboutContent>
                <h2>Why Families Trust Us</h2>

                <div className="bullet-item">
                  <div className="bullet-header">
                    <span className="bullet-icon"><FaHeart /></span>
                    Caring Beyond Expectations
                  </div>
                  <p>
                    We go above and beyond to treat your loved ones with dignity, warmth, and respect — just like family.
                  </p>
                </div>

                <div className="bullet-item">
                  <div className="bullet-header">
                    <span className="bullet-icon"><FaShieldAlt /></span>
                    NJ Licensed & Fully Insured
                  </div>
                  <p>
                    State-compliant, professionally operated, and committed to the highest standards of care in New Jersey.
                  </p>
                </div>

                <div className="bullet-item">
                  <div className="bullet-header">
                    <span className="bullet-icon"><FaUserMd /></span>
                    CHHA-Certified Caregivers
                  </div>
                  <p>
                    Highly trained, certified home health aides dedicated to safe, attentive, and personalized support.
                  </p>
                </div>

                <div className="bullet-item">
                  <div className="bullet-header">
                    <span className="bullet-icon"><FaSearchPlus /></span>
                    Carefully Screened & Continuously Trained
                  </div>
                  <p>
                    Thorough background checks and ongoing senior care training to ensure consistent, high-quality care.
                  </p>
                </div>

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


      {/* 
      <ScrollAnimation>
        <Testimonials />
      </ScrollAnimation> */}
    </>
  );
};

export default Home;
