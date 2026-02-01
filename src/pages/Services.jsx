import React from 'react';
import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { PageHeaderContainer, PageTitle, PageSubtitle } from '../components/common/PageHeader';
import ScrollAnimation from '../components/common/ScrollAnimation';
import g1 from '../assets/G1.jpg'
import g2 from '../assets/G2.jpg'
import g3 from '../assets/G3.jpg'
import g4 from '../assets/G4.jpg'
import s1 from '../assets/S1.png'
import s2 from '../assets/S2.png'
import s3 from '../assets/S3.png'
import s4 from '../assets/S4.png'
import s5 from '../assets/S5.png'
import s6 from '../assets/S6.png'
// --- STYLED COMPONENTS ---

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
  position: relative;
  
  /* Responsive Breakpoint */
  @media (max-width: 960px) {
    flex-direction: column; /* Stack sidebar on top of content */
    padding: 3rem 20px;
    gap: 40px;
  }
`;

const Sidebar = styled.aside`
  flex: 0 0 280px;
  position: sticky;
  top: 110px; 
  height: fit-content;
  background: ${({ theme }) => theme.cardBg};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.neutralLight || 'rgba(0,0,0,0.05)'};
  z-index: 10; /* Keep it below navbar but above background */

  h4 {
    color: ${({ theme }) => theme.textDark};
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid ${({ theme }) => theme.textSecondary}20;
  }

  @media (max-width: 960px) {
    position: relative; /* No longer sticky on mobile */
    top: 0;
    flex: none;
    width: 100%; /* Full width */
    padding: 1.5rem;
  }
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.primary}15; 
    color: ${({ theme }) => theme.primary};
    transform: translateX(5px);
  }

  svg {
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
  }

  &:hover svg {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ContentArea = styled.div`
  flex: 1;
`;

const ServiceSection = styled.section`
  padding: 0 !important; 
  margin-bottom: 80px;
  scroll-margin-top: 120px;
  
  @media (max-width: 960px) {
    margin-bottom: 50px;
    scroll-margin-top: 100px;
  }
`;

const ServiceDetailCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;
`;

// Responsive Image styling
const CardImage = styled.img`
  height: 350px;
  width: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 200px; /* Smaller height for mobile */
  }
`;

const DetailBody = styled.div`
  padding: 3rem;
  
  h2 { 
    color: ${({ theme }) => theme.primary}; 
    margin-bottom: 1.2rem; 
    font-size: 2rem;
  }
  
  p.description { 
    font-size: 1.1rem; 
    margin-bottom: 2.5rem; 
    line-height: 1.8;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
    padding: 1.5rem; /* Less padding on mobile */
    
    h2 { font-size: 1.6rem; }
    
    p.description { 
      font-size: 1rem; 
      margin-bottom: 1.5rem; 
    }
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Stack features on small screens */
    gap: 1rem;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSecondary};
  background: ${({ theme }) => theme.body};
  padding: 12px 16px;
  border-radius: 8px;
  
  svg { 
    color: ${({ theme }) => theme.primary}; 
    font-size: 1.2rem;
    flex-shrink: 0;
  }
`;

// --- DATA ---
const servicesList = [
  {
    id: 'personal-care',
    title: 'Personal Care Assistance',
    desc: 'Maintaining independence while receiving dignified, professional support for your most essential daily needs. Our caregivers are trained to provide sensitive, respectful assistance that prioritizes your safety and comfort at all times.',
    features: ['Bathing & Grooming', 'Dressing Assistance', 'Incontinence Care', 'Mobility & Transfers'],
    image: g2
  },
  {
    id: 'companion-care',
    title: 'Companion Care',
    desc: 'Emotional well-being is just as vital as physical health. We provide the friendship and social interaction your loved ones deserve to combat loneliness, depression, and isolation.',
    features: ['Social Interaction', 'Light Housekeeping', 'Meal Preparation', 'Errands & Shopping'],
    image: g1
  },
  {
    id: 'health-aide',
    title: 'Home Health Aide',
    desc: 'Certified medical support that bridges the gap between basic care and clinical nursing. Our aides work under the direct supervision of registered nurses to monitor health conditions effectively.',
    features: ['Vital Signs Monitoring', 'Wound Care Support', 'Exercise Assistance', 'Nurse Supervision'],
    image: s2
  },
  {
    id: 'medication',
    title: 'Medication Management',
    desc: 'Providing peace of mind through strict adherence to medical schedules. We ensure the right medication is taken at the right time, preventing dangerous interactions or missed doses.',
    features: ['Dose Reminders', 'Pharmacy Coordination', 'Prescription Logging', 'Safety Monitoring'],
    image: g4
  },
  {
    id: 'live-in',
    title: '24/7 Live-In Care',
    desc: 'Comprehensive, round-the-clock care for those requiring constant supervision. This allows clients to remain in their own homes rather than moving to an assisted living facility.',
    features: ['Continuous Monitoring', 'Overnight Support', 'Household Management', 'Emergency Response'],
    image: s1
  }
];

const Services = () => {
  return (
    <Container>
      <PageHeaderContainer>
        <PageTitle>Comprehensive Care</PageTitle>
        <PageSubtitle>Professional home care solutions tailored to your unique lifestyle and health needs.</PageSubtitle>
      </PageHeaderContainer>

      <Layout>
        {/* STICKY SIDEBAR (Static on mobile) */}
        <Sidebar>
          <h4>Our Services</h4>
          <SidebarNav>
            {servicesList.map(s => (
              <SidebarItem 
                key={s.id} 
                smooth 
                to={`/services#${s.id}`} 
              >
                {s.title}
                <FaArrowRight size={12} />
              </SidebarItem>
            ))}
          </SidebarNav>
        </Sidebar>

        {/* MAIN CONTENT AREA */}
        <ContentArea>
          {servicesList.map((service) => (
            <ScrollAnimation key={service.id} delay={0.1}>
              <ServiceSection id={service.id}>
                <ServiceDetailCard>
                  <CardImage 
                    src={service.image} 
                    alt={service.title} 
                  />
                  <DetailBody>
                    <h2>{service.title}</h2>
                    <p className="description">{service.desc}</p>
                    <FeatureGrid>
                      {service.features.map(f => (
                        <FeatureItem key={f}><FaCheckCircle /> {f}</FeatureItem>
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