import React from 'react';
import styled from 'styled-components';
import { FaPhone } from 'react-icons/fa';
import {
  PageHeaderContainer,
  PageTitle,
  PageSubtitle,
} from '../components/common/PageHeader';
import ScrollAnimation from '../components/common/ScrollAnimation';

// --- Assets (Update these paths to where you saved your .webp files) ---
import MiddlesexMapImg from '../assets/Middlesex_County_Map.svg.webp';
import MercerMapImg from '../assets/Mercer_County_Map.svg.webp';
import AboutUsOverview  from '../components/AboutUsOverview/AboutUsOverview';

const AboutPageContainer = styled.div`
  background: ${({ theme }) => theme.body};
  padding-bottom: 5rem;
`;

const StorySection = styled.section`
  padding: 4rem 0 2rem 0;
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

const Content = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.textDark};
    text-align: center;
  }
`;

const MapGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MapCard = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow};
  text-align: center;
  border: 1px solid #eee;
`;

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;
  border-radius: 8px;
  overflow: hidden;
`;

const MapImg = styled.img`
  width: 100%;
  display: block;
  opacity: 0.9;
`;

const Pin = styled.div`
  position: absolute;
  font-size: 1.8rem;
  transform: translate(-50%, -100%);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translate(-50%, -110%) scale(1.2);
  }
  
  &:hover::after {
    content: attr(data-label);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 0.7rem;
    white-space: nowrap;
    z-index: 10;
  }
`;

const HighlightBox = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 2.5rem 1.5rem;
  border-top: 4px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  margin: 3rem auto;
  max-width: 600px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  p {
    font-weight: 600;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.textDark};
    margin: 0;
  }
`;

const NavCallButton = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 15px ${({ theme }) => theme.primary}44;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${({ theme }) => theme.primary}66;
    color: white;
  }
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  .county-card {
    background: #fff;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    border-top: 3px solid transparent;
    transition: border-color 0.3s;

    &:hover {
      border-top: 3px solid ${({ theme }) => theme.primary};
    }
  }

  h3 {
    color: ${({ theme }) => theme.textDark};
    font-size: 1.4rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .pin-icon { color: ${({ theme }) => theme.primary}; }

  .towns {
    font-size: 1rem;
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.7;
    text-align: left;
  }
`;

const About = () => {
  return (
    <AboutPageContainer>
      <PageHeaderContainer>
        <PageTitle>Prime Homecare</PageTitle>
        <PageSubtitle>High-quality, non-medical home care for seniors in Middlesex and Mercer Counties.</PageSubtitle>
      </PageHeaderContainer>
      <ScrollAnimation>
        <AboutUsOverview />
      </ScrollAnimation>
      <ScrollAnimation>
        <StorySection>
          <div className="container">
            <Content>
              <h2>Areas We Serve</h2>
              <p>
                Prime Home Care proudly provides personalized, non-medical home care services throughout
                Middlesex and Mercer Counties, NJ.
              </p>

              <LocationGrid>
                <div className="county-card">
                  <h3><span className="pin-icon">📍</span> Middlesex County, NJ</h3>
                  <p className="towns">
                    Cranbury • East Brunswick • Edison • Monroe • North Brunswick • Old Bridge •
                    Piscataway • Plainsboro • South Brunswick • South Plainfield • Woodbridge •
                    Carteret • Dunellen • Helmetta • Highland Park • Jamesburg • Metuchen •
                    Middlesex • Milltown • Sayreville • South River • South Amboy • Spotswood •
                    New Brunswick • Perth Amboy
                  </p>
                </div>

                <div className="county-card">
                  <h3><span className="pin-icon">📍</span> Mercer County, NJ</h3>
                  <p className="towns">
                    East Windsor • Ewing • Hamilton • Hopewell Township • Lawrence Township •
                    West Windsor • Hightstown • Hopewell Borough • Pennington • Rocky Hill •
                    Trenton • Princeton
                  </p>
                </div>
              </LocationGrid>

              <HighlightBox>
                <p>Ready to discuss your care needs?</p>
                <NavCallButton href="tel:+18482181140">
                  <FaPhone />
                  <span className="call-text">Call Now</span>
                </NavCallButton>
              </HighlightBox>

              <MapGrid>
                {/* MIDDLESEX COUNTY */}
                <MapCard>
                  <h3 style={{ fontSize: '1.2rem', margin: '0' }}>Middlesex County</h3>
                  <MapContainer>
                    <MapImg src={MiddlesexMapImg} alt="Middlesex County Map" />
                    <Pin style={{ top: '72%', left: '32%' }} data-label="South Brunswick">📍</Pin>
                    <Pin style={{ top: '82%', left: '22%' }} data-label="Plainsboro">📍</Pin>
                    <Pin style={{ top: '35%', left: '60%' }} data-label="Edison">📍</Pin>
                  </MapContainer>
                </MapCard>

                {/* MERCER COUNTY */}
                <MapCard>
                  <h3 style={{ fontSize: '1.2rem', margin: '0' }}>Mercer County</h3>
                  <MapContainer>
                    <MapImg src={MercerMapImg} alt="Mercer County Map" />
                    <Pin style={{ top: '35%', left: '75%' }} data-label="Princeton">📍</Pin>
                    <Pin style={{ top: '80%', left: '55%' }} data-label="Hamilton">📍</Pin>
                  </MapContainer>
                </MapCard>
              </MapGrid>


            </Content>
          </div>
        </StorySection>
      </ScrollAnimation>
    </AboutPageContainer>
  );
};

export default About;