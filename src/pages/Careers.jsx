import React from 'react';
import styled from 'styled-components';
import {
  PageHeaderContainer,
  PageTitle,
  PageSubtitle,
} from '../components/common/PageHeader';
import ScrollAnimation from '../components/common/ScrollAnimation';
import { motion } from 'framer-motion';

// Icons for the new sections
import { 
  FaClock, 
  FaDollarSign, 
  FaUsers, 
  FaHeart, 
  FaShieldAlt, 
  FaChartLine,
  FaCheckCircle,
  FaCheck
} from 'react-icons/fa';

// --- 1. Career Hero Section ---
const CareerHeroContainer = styled.section`
  padding: 0;
  height: 60vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #0c0c0c;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.heroOverlay};
    z-index: 2;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 900px;
  padding: 8px 24px;
`;

const HeroH1 = styled(motion.h1)`
  /* color: ${({ theme }) => theme.textDark}; */
  color: white;
  font-size: 3rem;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroP = styled(motion.p)`
  margin-top: 1.5rem;
  /* color: ${({ theme }) => theme.textDark}; */
  color: white;
  font-size: 1.25rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

// --- 2. "Why Work With Us" Section ---
const WhyUsSection = styled.section`
  background: ${({ theme }) => theme.background};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.textDark};
`;

const FeaturesGrid = styled.div`
  display: grid;
  /* --- FIXED: Changed 300px to 280px --- */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 2.5rem 2rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadowHover};
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
`;

const FeatureH3 = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textDark};
`;

const FeatureP = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
`;


// --- 3. "Current Openings" Section ---
const OpeningsSection = styled.section`
  background: ${({ theme }) => theme.body};
`;

const RolesGrid = styled.div`
  display: grid;
  /* --- FIXED: Changed 320px to 280px --- */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 900px;
  margin: 0 auto;
`;

const RoleCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 2.5rem;
  border-top: 5px solid ${({ theme }) => theme.primary};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadowHover};
  }
`;

const RoleTitle = styled.h3`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.textDark};
  margin-bottom: 0.25rem;
`;

const RoleSubtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
`;

const RoleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const RoleListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1rem;
  margin-bottom: 0.75rem;

  svg {
    color: ${({ theme }) => theme.primary};
    font-size: 1.1rem;
    margin-top: 0.2rem;
    flex-shrink: 0;
  }
`;


// --- 4. "Requirements" Section ---
const RequirementsSection = styled.section`
  background: ${({ theme }) => theme.background};
`;

const RequirementsContainer = styled.div`
  display: grid;
  /* --- FIXED: Changed 300px to 280px --- */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const RequirementsColumn = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const RequirementsTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textDark};
  margin-bottom: 1.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  padding-bottom: 0.5rem;
`;

const RequirementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const RequirementsListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1rem;
  margin-bottom: 1rem;

  svg {
    color: ${({ theme }) => theme.primary};
    font-size: 1.1rem;
    margin-top: 0.2rem;
    flex-shrink: 0;
  }
`;

// --- Data ---
const whyUsFeatures = [
  {
    icon: <FaClock />,
    title: 'Flexible Scheduling',
    desc: 'Choose shifts that fit your lifestyle—part-time, full-time, weekdays, weekends, or overnights.',
  },
  {
    icon: <FaDollarSign />,
    title: 'Competitive Pay',
    desc: 'Earn fair wages with opportunities for growth and recognition for your hard work and dedication.',
  },
  {
    icon: <FaUsers />,
    title: 'Supportive Team',
    desc: 'We value our caregivers, offering supervision, guidance, and ongoing feedback in a respectful environment.',
  },
  {
    icon: <FaHeart />,
    title: 'Meaningful Work',
    desc: 'Make a real, tangible impact in the lives of clients and their families every single day.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Trusted Reputation',
    desc: 'Work for an ACHC-accredited agency, recognized for professionalism, quality, and compassion.',
  },
  {
    icon: <FaChartLine />,
    title: 'Professional Development',
    desc: 'We offer ongoing training opportunities and clear career advancement pathways to help you grow.',
  },
];

const jobRoles = [
  {
    title: 'CHHAs',
    subtitle: 'Certified Home Health Aides',
    responsibilities: [
      'Personal care assistance',
      'Companionship services',
      'Light housekeeping',
      'Meal preparation and support',
    ]
  },
  {
    title: 'RNs',
    subtitle: 'Registered Nurses',
    responsibilities: [
      'Complex care coordination',
      'Clinical assessments and monitoring',
      'Supervision and training of CHHAs',
      'Medication management',
    ]
  }
];

const basicRequirements = [
  'Valid New Jersey certification/license (CHHA or RN)',
  'Proof of eligibility to work in the U.S.',
  'Reliable transportation preferred',
  'Clean background check and references',
];

const personalQualities = [
  'Compassionate, dependable, and professional attitude',
  'Strong communication and interpersonal skills',
  'Ability to work independently and as part of a team',
  'Commitment to client dignity and quality care',
];


const Careers = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <CareerHeroContainer>
        <HeroBg>
          <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Join our team" />
        </HeroBg>
        <HeroContent>
          <HeroH1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join Our Caring Team
          </HeroH1>
          <HeroP
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At Prime Home Care Agency, we’re always looking for dedicated caregivers and healthcare professionals who share our passion for compassionate service.
          </HeroP>
        </HeroContent>
      </CareerHeroContainer>

      {/* 2. Why Work With Us Section */}
      <ScrollAnimation>
        <WhyUsSection>
          <div className="container">
            <SectionTitle>Why Work With Us?</SectionTitle>
            <FeaturesGrid>
              {whyUsFeatures.map((feature, index) => (
                <FeatureCard key={index}>
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureH3>{feature.title}</FeatureH3>
                  <FeatureP>{feature.desc}</FeatureP>
                </FeatureCard>
              ))}
            </FeaturesGrid>
          </div>
        </WhyUsSection>
      </ScrollAnimation>

      {/* 3. Current Openings Section */}
      <ScrollAnimation>
        <OpeningsSection>
          <div className="container">
            <SectionTitle>Available Roles</SectionTitle>
            <RolesGrid>
              {jobRoles.map((role) => (
                <RoleCard key={role.title}>
                  <RoleTitle>{role.title}</RoleTitle>
                  <RoleSubtitle>{role.subtitle}</RoleSubtitle>
                  <RoleList>
                    {role.responsibilities.map((item, index) => (
                      <RoleListItem key={index}>
                        <FaCheckCircle />
                        <span>{item}</span>
                      </RoleListItem>
                    ))}
                  </RoleList>
                </RoleCard>
              ))}
            </RolesGrid>
          </div>
        </OpeningsSection>
      </ScrollAnimation>

      {/* 4. Requirements Section */}
      <ScrollAnimation>
        <RequirementsSection>
          <div className="container">
            <SectionTitle>Our Requirements</SectionTitle>
            <RequirementsContainer>
              
              <RequirementsColumn>
                <RequirementsTitle>Basic Requirements</RequirementsTitle>
                <RequirementsList>
                  {basicRequirements.map((item, index) => (
                    <RequirementsListItem key={index}>
                      <FaCheck />
                      <span>{item}</span>
                    </RequirementsListItem>
                  ))}
                </RequirementsList>
              </RequirementsColumn>

              <RequirementsColumn>
                <RequirementsTitle>Personal Qualities</RequirementsTitle>
                <RequirementsList>
                  {personalQualities.map((item, index) => (
                    <RequirementsListItem key={index}>
                      <FaCheck />
                      <span>{item}</span>
                    </RequirementsListItem>
                  ))}
S
                </RequirementsList>
              </RequirementsColumn>

            </RequirementsContainer>
          </div>
        </RequirementsSection>
      </ScrollAnimation>
    </>
  );
};

export default Careers;