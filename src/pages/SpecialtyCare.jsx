import React from 'react';
import styled from 'styled-components';
import { PageHeaderContainer, PageTitle, PageSubtitle } from '../components/common/PageHeader';
import QuickContactForm from '../components/common/QuickContactForm';
import { FaPhoneAlt, FaNotesMedical, FaHeartbeat, FaBrain, FaWheelchair, FaSyringe, FaBed, FaUserNurse } from 'react-icons/fa';
import s1 from '../assets/G4.jpg'; 

const PageLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  @media (max-width: 960px) { grid-template-columns: 1fr; }
`;

const ContentArea = styled.div`
  h2 { color: ${({ theme }) => theme.primary}; margin-bottom: 1.5rem; font-size: 2rem; }
  p { text-align: justify;margin-bottom: 1.5rem; line-height: 1.8; color: ${({ theme }) => theme.textSecondary}; font-size: 1.05rem; }
  img { width: 100%; border-radius: 10px; margin-bottom: 2rem; box-shadow: ${({ theme }) => theme.shadow}; }
`;

const Sidebar = styled.div`
  position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 2rem;
`;

const PhoneCard = styled.div`
  background: ${({ theme }) => theme.primary}; color: white; padding: 2rem; border-radius: 10px; text-align: center; box-shadow: ${({ theme }) => theme.shadow};
  h4 { font-size: 1.25rem; margin-bottom: 0.5rem; }
  a { color: white; font-size: 1.5rem; font-weight: 700; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 10px; }
`;

const SubServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SubServiceCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  border-left: 4px solid ${({ theme }) => theme.primary};
  
  h3 { color: ${({ theme }) => theme.textDark}; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 10px; }
  p { font-size: 0.95rem; margin: 0; }
  svg { color: ${({ theme }) => theme.primary}; }
`;

const SpecialtyCare = () => {
  return (
    <>
      {/* <PageHeaderContainer>
        <PageTitle>Specialty Care Services</PageTitle>
        <PageSubtitle>Expert support for complex health conditions.</PageSubtitle>
      </PageHeaderContainer> */}

      <PageLayout>
        <ContentArea>
          <img src={s1} alt="Specialty Care" />
          <h2>Comprehensive Clinical & Specialized Support</h2>
          <p>
            When a loved one faces a chronic condition, recovering from surgery, or needs end-of-life support, standard care isn't enough. Our Specialty Care services are delivered by trained professionals who understand the nuances of specific medical challenges.
          </p>

          <SubServiceGrid>
            <SubServiceCard>
              <h3><FaHeartbeat /> Hospice Care Support</h3>
              <p>Compassionate supplemental care working alongside hospice agencies to provide comfort, hygiene, and emotional support during end-of-life stages.</p>
            </SubServiceCard>

            <SubServiceCard>
              <h3><FaNotesMedical /> Hospital to Home</h3>
              <p>Transitional care to reduce readmission rates. We assist with discharge instructions, medication pickup, and settling back into the home environment safely.</p>
            </SubServiceCard>

            <SubServiceCard>
              <h3><FaBrain /> Alzheimer’s & Dementia Care</h3>
              <p>Memory care specialized to manage behavioral changes, ensure safety (preventing wandering), and engage clients in cognitive stimulation.</p>
            </SubServiceCard>

            <SubServiceCard>
              <h3><FaWheelchair /> Adults With Disabilities</h3>
              <p>Empowering support for adults with physical or intellectual disabilities, focusing on maximizing independence and community integration.</p>
            </SubServiceCard>

            <SubServiceCard>
              <h3><FaSyringe /> Diabetes Care</h3>
              <p>Monitoring blood glucose, meal planning for dietary restrictions, and observing for signs of hypoglycemia or hyperglycemia.</p>
            </SubServiceCard>

            <SubServiceCard>
              <h3><FaUserNurse /> Parkinson's Disease Care</h3>
              <p>Assistance with mobility, tremors, and medication reminders to manage the progression of symptoms safely.</p>
            </SubServiceCard>

            <SubServiceCard>
              <h3><FaBed /> Palliative Care Support</h3>
              <p>Focusing on relief from symptoms and stress of serious illness, improving quality of life for both the patient and family.</p>
            </SubServiceCard>

            <SubServiceCard>
              <h3><FaUserNurse /> Respite Care</h3>
              <p>Short-term relief for primary family caregivers. Take a break, go on vacation, or attend to your own needs knowing your loved one is safe.</p>
            </SubServiceCard>

             <SubServiceCard>
              <h3><FaBed /> 24/7 Live-in Care</h3>
              <p>Round-the-clock supervision and support for clients who cannot be left alone, ensuring safety day and night.</p>
            </SubServiceCard>

          </SubServiceGrid>
        </ContentArea>

        <Sidebar>
          <PhoneCard>
            <h4>Inquiries? Call us anytime</h4>
            <a href="tel:8482181140"><FaPhoneAlt /> (848)-218-1140</a>
          </PhoneCard>
          <QuickContactForm title="Get Started Today" compact={true} />
        </Sidebar>
      </PageLayout>
    </>
  );
};

export default SpecialtyCare;