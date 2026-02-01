import React from 'react';
import styled from 'styled-components';
import {
  PageHeaderContainer,
  PageTitle,
  PageSubtitle,
} from '../components/common/PageHeader';
import ScrollAnimation from '../components/common/ScrollAnimation';
import G1 from '../assets/G4.jpg'
import Photo from '../assets/Haritha.jpg'


const AboutPageContainer = styled.div`
  background: ${({ theme }) => theme.body};
`;

const Section = styled.section`
  background: ${({ theme }) => theme.body};
`;

// --- 1. "Our Story" Section ---
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

// --- 2. "Mission & Vision" Section ---
const MissionVisionSection = styled(Section)`
  background: ${({ theme }) => theme.background};
`;

const MissionContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

const VisionContent = styled.div`
  max-width: 800px;
  margin: 3rem auto 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

// --- 3. "Our Core Values" Section ---
const ValuesSection = styled(Section)`
  background: ${({ theme }) => theme.body};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.textDark};
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (min-width: 920px) and (max-width: 1239px) {
    grid-template-columns: repeat(3, 1fr);
    & > :nth-child(4) {
      grid-column: 1 / 2;
    }
    & > :nth-child(5) {
      grid-column: 2 / 3;
    }
  }
  
  @media (min-width: 1240px) {
     grid-template-columns: repeat(5, 1fr);
  }
`;

const ValueCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 2.5rem 2rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadowHover};
  }
`;

const ValueTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.textDark};
  margin-bottom: 0.75rem;
`;

const ValueText = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textSecondary};
`;

// --- 4. "Meet Our Leadership" Section ---
const TeamSection = styled(Section)`
  background: ${({ theme }) => theme.background};
  .container {
    text-align: center;
  }
`;

// --- UPDATED ---
// Changed to flex to center the single card(s)
const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* This will center the card(s) */
  gap: 2rem;
  margin-top: 2rem;
`;

// --- UPDATED ---
// Set a fixed width for the card
const TeamMember = styled.div`
  width: 250px; /* Each card will be 250px wide */
  p {
    margin-bottom: 0.25rem;
  }
`;

// --- UPDATED ---
// Made the height taller for a portrait/passport look
const TeamImagePlaceholder = styled.div`
  width: 100%;
  height: 300px; /* Taller, passport-style placeholder */
  background: ${({ theme }) => theme.neutralMedium};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 500;
  margin-bottom: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
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

// --- Data for Core Values ---
const coreValues = [
  { 
    title: ' Compassion', 
    text: 'We lead with kindness and empathy in every interaction.' 
  },
  { 
    title: ' Integrity', 
    text: 'We uphold honesty and transparency in everything we do.' 
  },
  { 
    title: ' Respect', 
    text: 'We honor each individual’s dignity, independence, and unique story.' 
  },
  { 
    title: ' Reliability', 
    text: 'We are committed to providing consistent, dependable care you can trust.' 
  },
  { 
    title: ' Family', 
    text: 'We treat every client and caregiver as part of our extended family because care begins with love.' 
  },
];

// --- NEW: Leadership Team Array ---
const leadershipTeam = [
  {
    name: 'Haritha Chilappa',
    title: 'Founder & CEO',
    imgSrc:Photo

    // You can add an 'imgSrc' property here later
  },
  // {
  //   name: 'John R. Smith',
  //   title: 'Director of Nursing',
  // },
  // {
  //   name: 'Emily White',
  //   title: 'Client Care Coordinator',
  // },
];

const About = () => {
  return (
    <AboutPageContainer>
      <PageHeaderContainer>
        <PageTitle>About Prime Home Care</PageTitle>
        <PageSubtitle>
          Inspired by the care once given to our own loved ones, we strive to
          treat every client like family.
        </PageSubtitle>
      </PageHeaderContainer>

      {/* --- "Our Story" Section --- */}
      <ScrollAnimation>
        <StorySection>
          <div className="container">
            <Image
              src={G1}
              alt="Caring hands holding an older person's hands"
            />
            <Content>
              <h2>Our Story</h2>
              <p>
                Growing up, I was deeply attached to my grandmother. She was the
                heart of our family full of love, wisdom, and gentle
                strength. As she grew older, I watched her world become smaller,
                and I realized how much care, patience, and compassion it takes
                to make our loved ones feel truly supported.
              </p>
              <p>
                Her journey taught me that quality care isn’t just about
                assistance it’s about dignity, respect, and companionship.
                That experience planted the seed for Prime Home Care a place
                built from love, where every client is treated like family.
              </p>
              <p>
                At Prime Home Care, we understand the emotions behind choosing
                care for someone you love. Our mission is simple: to bring
                comfort, safety, and joy to the people who once cared for us.
              </p>
            </Content>
          </div>
        </StorySection>
      </ScrollAnimation>

      {/* --- "Mission & Vision" Section --- */}
      <ScrollAnimation>
        <MissionVisionSection>
          <div className="container">
            <MissionContent>
              <h2>Our Mission</h2>
              <p>
                At Prime Home Care, our mission is to provide compassionate,
                reliable, and personalized care that allows every client to
                live safely and comfortably in the place they call home.
              </p>
              <p>
                We are driven by love, respect, and the belief that every senior
                deserves dignity, independence, and a sense of belonging.
              </p>
              <p>
                Inspired by the care once given to our own loved ones, we strive
                to treat every client like family with warmth, patience, and
                genuine compassion in every moment of care.
              </p>
            </MissionContent>

            <VisionContent>
              <h2>Our Vision</h2>
              <p>
                To redefine home care by creating a community where seniors and
                families feel supported, valued, and empowered where every
                home becomes a place of comfort, connection, and dignity.
              </p>
              <p>
                We envision a world where aging is embraced with grace and
                families find peace knowing their loved ones are in caring
                hands.
              </p>
            </VisionContent>
          </div>
        </MissionVisionSection>
      </ScrollAnimation>

      {/* --- "Our Core Values" Section --- */}
      <ScrollAnimation>
        <ValuesSection>
          <div className="container">
            <SectionTitle>Our Core Values</SectionTitle>
            <ValuesGrid>
              {coreValues.map((value) => (
                <ValueCard key={value.title}>
                  <ValueTitle>{value.title}</ValueTitle>
                  <ValueText>{value.text}</ValueText>
                </ValueCard>
              ))}
            </ValuesGrid>
          </div>
        </ValuesSection>
      </ScrollAnimation>

      {/* --- "Meet Our Leadership" Sections (UPDATED) --- */}
      <ScrollAnimation>
        <TeamSection>
          <div className="container">
            <SectionTitle>Meet Our Leadership</SectionTitle>
            <p>
              Our dedicated leadership team ensures our mission is at the
              heart of everything we do.
            </p>
            
            {/* --- UPDATED: Now maps over the array --- */}
            <TeamGrid>
              {leadershipTeam.map((member) => (
                <TeamMember key={member.name}>
                  <img src={member.imgSrc} alt={member.name} style={{ width: '100%', height: '70%', objectFit: 'cover', borderRadius: '10px' }} />
                  {/* <TeamImagePlaceholder> */}
                    {/* When you have an image, replace this div with:
                    <img src={member.imgSrc} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                    And add 'imgSrc: "/path/to/image.jpg"' to the array object.
                    */}
                  {/* </TeamImagePlaceholder> */}
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