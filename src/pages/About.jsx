import React from 'react';
import styled from 'styled-components';
import { FaPhone } from 'react-icons/fa';

// Common Components
import {
  PageHeaderContainer,
  PageTitle,
  PageSubtitle,
} from '../components/common/PageHeader';
import ScrollAnimation from '../components/common/ScrollAnimation';

// Modular Components
import AboutUsOverview from '../components/AboutUsOverview/AboutUsOverview';

// Page components (refactored)
import OurStory from '../components/About/OurStory';
import LocationGrid from '../components/About/LocationGrid';
import MapWrapper from '../components/About/MapWrapper';

// Assets
import Photo from '../assets/Haritha.jpg';

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
  
  p.intro-text {
    text-align: center;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 3rem;
  }
`;

// Story/Location/Map components moved to `src/pages/About/*`

const TeamSection = styled.section`
  background: ${({ theme }) => theme.background};
  padding: 5rem 0;
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.textDark};
  }
`;

const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const TeamMember = styled.div`
  width: 280px;
  background: #fff;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const TeamName = styled.h4`
  font-size: 1.3rem;
  margin: 1rem 0 0.25rem 0;
  color: ${({ theme }) => theme.textDark};
`;

const TeamTitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  margin-bottom: 1rem;
`;

const leadershipTeam = [
  {
    name: 'Haritha Chilappa',
    title: 'Founder & CEO',
    imgSrc: Photo
  }
];

const About = () => {
  return (
    <AboutPageContainer>
      <PageHeaderContainer>
        <PageTitle>Prime Homecare</PageTitle>
        <PageSubtitle>Located in South Brunswick</PageSubtitle>
        <PageSubtitle>High-quality, non-medical home care for seniors</PageSubtitle>
        <PageSubtitle>Serving Middlesex and Mercer Counties, NJ</PageSubtitle>
      </PageHeaderContainer>

      <ScrollAnimation>
        <AboutUsOverview />
      </ScrollAnimation>

      <ScrollAnimation>
        <StorySection>
          <div className="container">
            <Content>
        
              <LocationGrid />

              <MapWrapper src={'https://www.google.com/maps/d/u/1/embed?mid=1P4-NNjSNTsF2Mn1jcF-eTghtGawDCBU&ehbc=2E312F'} />
            </Content>
          </div>
        </StorySection>
      </ScrollAnimation>

      <ScrollAnimation>
        <OurStory photo={Photo} name="Haritha Chilappa" role="Founder & CEO">
          <h2>Our Story</h2>
          <p>
            Growing up, I was deeply attached to my grandmother. She was the
            heart of our family — full of love, wisdom, and gentle strength.
            As she grew older, I watched her world become smaller, and I
            realized how much care, patience, and compassion it takes to make
            our loved ones feel truly supported.
          </p>
          <p>
            Her journey taught me that quality care isn’t just about
            assistance — it’s about dignity, respect, and companionship. That
            experience planted the seed for Prime Home Care — a place built
            from love, where every client is treated like family.
          </p>
          <p>
            At Prime Home Care, we understand the emotions behind choosing
            care for someone you love. Our mission is simple: to bring
            comfort, safety, and joy to the people who once cared for us.
          </p>
        </OurStory>
      </ScrollAnimation>
    </AboutPageContainer>
  );
};

export default About;