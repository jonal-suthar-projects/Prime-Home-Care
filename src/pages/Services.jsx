import React from 'react';
import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { PageHeaderContainer, PageTitle, PageSubtitle } from '../components/common/PageHeader';
import ScrollAnimation from '../components/common/ScrollAnimation';
import g1 from '../assets/G1.jpg';
import g2 from '../assets/G2.jpg';
import g4 from '../assets/G4.jpg';
import s1 from '../assets/S1.png';
import s2 from '../assets/S2.png';

const Container = styled.div`
  background: ${({ theme }) => theme.body};
  min-height: 100vh;
`;

const Layout = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 60px;
  padding: 5rem 24px;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 3rem 20px;
  }
`;

const Sidebar = styled.aside`
  flex: 0 0 280px;
  position: sticky;
  top: 110px;
  background: ${({ theme }) => theme.cardBg};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SidebarItem = styled(NavHashLink)`
  padding: 14px 18px;
  border-radius: 10px;
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentArea = styled.div`
  flex: 1;
`;

const ServiceSection = styled.section`
  margin-bottom: 80px;
`;

const ServiceDetailCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const CardImage = styled.img`
  height: 350px;
  width: 100%;
  object-fit: cover;
`;

const DetailBody = styled.div`
  padding: 3rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const servicesList = [
  {
    id: 'personal-care',
    title: 'Personal Care Assistance',
    desc: 'Get trusted home health care services in New Jersey including personal care assistance, daily support, and compassionate in-home senior care.',
    features: ['Bathing & Grooming','Dressing Assistance','Mobility Support','Personal Hygiene'],
    image: g2
  },
  {
    id: 'companion-care',
    title: 'Companion Home Care',
    desc: 'Companion home care services designed to improve emotional wellbeing, social interaction, and safe independent living.',
    features: ['Conversation & Companionship','Light Housekeeping','Meal Preparation','Errands'],
    image: g1
  },
  {
    id: 'health-aide',
    title: 'Home Health Aide',
    desc: 'Professional home health aide services supporting seniors with medical and daily living needs under supervision.',
    features: ['Vital Signs Monitoring','Exercise Support','Health Observation','Care Coordination'],
    image: s2
  },
  {
    id: 'medication',
    title: 'Medication Management',
    desc: 'Medication management services ensuring correct dosage, timing, and safe medication routines.',
    features: ['Medication Reminders','Schedule Tracking','Pharmacy Coordination','Safety Checks'],
    image: g4
  },
  {
    id: 'live-in',
    title: '24 Hour Home Care',
    desc: '24 hour home care NJ services ensuring continuous supervision, comfort, and safety for seniors.',
    features: ['24/7 Monitoring','Emergency Assistance','Daily Living Support','Overnight Care'],
    image: s1
  }
];

const Services = () => {
  return (
    <Container>
      <PageHeaderContainer>
        <PageTitle>Comprehensive Home Care Services</PageTitle>
        <PageSubtitle>
          Get trusted home health care services in New Jersey, including medication management, companion care, post hospitalization care and senior home care in NJ.
        </PageSubtitle>
      </PageHeaderContainer>

      <Layout>
        <Sidebar>
          <h4>Our Services</h4>
          <SidebarNav>
            {servicesList.map(s => (
              <SidebarItem key={s.id} smooth to={`/services#${s.id}`}>
                {s.title}
                <FaArrowRight size={12}/>
              </SidebarItem>
            ))}
          </SidebarNav>
        </Sidebar>

        <ContentArea>
          {servicesList.map(service => (
            <ScrollAnimation key={service.id}>
              <ServiceSection id={service.id}>
                <ServiceDetailCard>
                  <CardImage
                    src={service.image}
                    alt="home health care services New Jersey, medication management services, companion home care services"
                  />
                  <DetailBody>
                    <h2>{service.title}</h2>
                    <p>{service.desc}</p>
                    <FeatureGrid>
                      {service.features.map(f => (
                        <FeatureItem key={f}>
                          <FaCheckCircle/> {f}
                        </FeatureItem>
                      ))}
                    </FeatureGrid>
                  </DetailBody>
                </ServiceDetailCard>
              </ServiceSection>
            </ScrollAnimation>
          ))}
        </ContentArea>
      </Layout>
    </Container>
  );
};

export default Services;
