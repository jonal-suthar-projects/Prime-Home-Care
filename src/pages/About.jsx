import React from 'react';
import styled from 'styled-components';
import {
  PageHeaderContainer,
  PageTitle,
  PageSubtitle,
} from '../components/common/PageHeader';
import ScrollAnimation from '../components/common/ScrollAnimation';
import G1 from '../assets/G4.jpg';
import Photo from '../assets/Haritha.jpg';

const AboutPageContainer = styled.div`
  background: ${({ theme }) => theme.body};
`;

const Section = styled.section`
  background: ${({ theme }) => theme.body};
`;

const StorySection = styled(Section)`
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
    }
  }
`;

const Content = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.textDark};
  }

  p {
    font-size: 1.05rem;
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 1.5rem;
    text-align: justify;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const TeamSection = styled(Section)`
  background: ${({ theme }) => theme.background};
  .container {
    text-align: center;
  }
`;

const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  width: 250px;
`;

const TeamName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.textDark};
`;

const TeamTitle = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
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
        <PageTitle>About Prime Homecare</PageTitle>
        <PageSubtitle>
          We provide reliable senior home care in New Jersey with personalized assistance, daily living support, and compassionate caregivers you can trust.
        </PageSubtitle>
      </PageHeaderContainer>

      <ScrollAnimation>
        <StorySection>
          <div className="container">
            <Image
              src={G1}
              alt="senior care agency New Jersey, new jersey senior home care"
            />
            <Content>
              <h2>Caring Beyond Expectations</h2>
              <p>
                At Prime Home Care, we are a leading senior care agency in New Jersey dedicated to providing compassionate, reliable, and personalized senior home care services. Our senior home care allows older adults to live safely, comfortably, and independently in the place they call home.
              </p>
              <p>
                We are driven by love, respect, and the belief that every senior deserves dignity, independence, and a high quality of life through dependable, attentive care.
              </p>
              <p>
                Inspired by the care once given to our own loved ones, we provide professional senior home care with warmth, patience, and genuine compassion, treating every client like family in every moment of support.
              </p>
            </Content>
          </div>
        </StorySection>
      </ScrollAnimation>

      <ScrollAnimation>
        <TeamSection>
          <div className="container">
            <h2>Meet Our Leadership</h2>
            <TeamGrid>
              {leadershipTeam.map((member) => (
                <TeamMember key={member.name}>
                  <img
                    src={member.imgSrc}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '10px'
                    }}
                  />
                  <TeamName>{member.name}</TeamName>
                  <TeamTitle>{member.title}</TeamTitle>
                </TeamMember>
              ))}
            </TeamGrid>
          </div>
        </TeamSection>
      </ScrollAnimation>
    </AboutPageContainer>
  );
};

export default About;
