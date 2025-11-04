import React from 'react';
import styled from 'styled-components';
import {
  FaUserMd,
  FaHeart,
  FaHandsHelping,
  FaStethoscope,
  FaPills,
  FaConciergeBell,
} from 'react-icons/fa';
import {
  PageHeaderContainer,
  PageTitle,
  PageSubtitle,
} from '../components/common/PageHeader';
import ScrollAnimation from '../components/common/ScrollAnimation';

const ServicesPageContainer = styled.div`
  background: ${({ theme }) => theme.body};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  padding: 5rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadowHover};
  }
`;

const CardImagePlaceholder = styled.div`
  height: 200px;
  background: ${({ theme }) => theme.neutralMedium};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  color: ${({ theme }) => theme.primary};
`;

const CardContent = styled.div`
  padding: 2rem;
  flex-grow: 1;

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.textDark};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 1rem;
  }
`;

// Dummy data for services
const servicesList = [
  // {
  //   icon: <FaUserMd />,
  //   title: 'Skilled Nursing',
  //   desc: 'Medically necessary care provided by RNs and LPNs, including wound care, medication management, and post-operative support.',
  // },
  {
    icon: <FaHeart />,
    title: 'Personal Care Assistance',
    desc: 'Support with daily activities such as bathing, dressing, grooming, and mobility to ensure safety and comfort.',
  },
  {
    icon: <FaHandsHelping />,
    title: 'Companion Care',
    desc: 'Providing social interaction, light housekeeping, meal preparation, and running errands to combat loneliness.',
  },
  {
    icon: <FaStethoscope />,
    title: 'Home Health Aide',
    desc: 'Assistance from certified aides under nurse supervision, monitoring vital signs and assisting with personal care.',
  },
  {
    icon: <FaPills />,
    title: 'Medication Management',
    desc: 'Ensuring correct dosages and timing for all medications, coordinating with pharmacists and doctors.',
  },
  {
    icon: <FaConciergeBell />,
    title: '24/7 Live-In Care',
    desc: 'Continuous, round-the-clock care for clients who require constant supervision and support.',
  },
];

const Services = () => {
  return (
    <ServicesPageContainer>
      <PageHeaderContainer>
        <PageTitle>Our Services</PageTitle>
        <PageSubtitle>
          Comprehensive care solutions designed to meet your unique needs, all
          in the comfort of your home.
        </PageSubtitle>
      </PageHeaderContainer>

      <div className="container">
        <ServicesGrid>
          {servicesList.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <ServiceCard>
                <CardImagePlaceholder>{service.icon}</CardImagePlaceholder>
                <CardContent>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </CardContent>
              </ServiceCard>
            </ScrollAnimation>
          ))}
        </ServicesGrid>
      </div>
    </ServicesPageContainer>
  );
};

export default Services;