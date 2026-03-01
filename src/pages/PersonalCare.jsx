import React from 'react';
import styled from 'styled-components';
import { PageHeaderContainer, PageTitle, PageSubtitle } from '../components/common/PageHeader';
import QuickContactForm from '../components/common/QuickContactForm';
import { FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import g2 from '../assets/G2.jpg';
import { FaShower, FaTshirt, FaShieldAlt, FaWalking, FaUtensils } from "react-icons/fa";
import { SubServiceGrid, SubServiceCard } from '../components/common/SubService.styles';

const PageLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const ContentArea = styled.div`
  h2 { color: ${({ theme }) => theme.primary}; margin-bottom: 1.5rem; font-size: 2rem; }
  p {text-align: justify; margin-bottom: 1.5rem; line-height: 1.8; color: ${({ theme }) => theme.textSecondary}; font-size: 1.05rem; }
  img { width: 100%; border-radius: 10px; margin-bottom: 2rem; box-shadow: ${({ theme }) => theme.shadow}; }
`;

const Sidebar = styled.div`
  position: sticky;
  top: 100px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PhoneCard = styled.div`
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow};

  h4 { font-size: 1.25rem; margin-bottom: 0.5rem; }
  a { color: white; font-size: 1.5rem; font-weight: 700; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 10px; }
  a:hover { text-decoration: underline; }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
 
  li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.textDark};
   
    svg { color: ${({ theme }) => theme.primary}; margin-top: 4px; }
  }
`;

// Reuse shared SubServiceGrid/SubServiceCard from components/common/SubService.styles

const PersonalCare = () => {
  return (
    <>
      {/* <PageHeaderContainer>
        <PageTitle style={{
          fontSize: "36px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}>
          Senior Home Care & Medication Management Services New Jersey
        </PageTitle>
      </PageHeaderContainer> */}

      <PageLayout>
        {/* LEFT CONTENT */}
        <ContentArea>
          <img src={g2} alt="Personal Care Assistance" />
          <h2>Personal Care Services</h2>
          <p>
            Our personal care services are designed to support seniors in maintaining their independence and dignity while receiving the care they need.
          </p>
          <SubServiceGrid>
            <SubServiceCard>
              <h3><FaShower /> Bathing & Showering</h3>
              <p>
                Safe, respectful assistance that reduces fall risk while maintaining hygiene,
                comfort, and personal dignity.
              </p>
            </SubServiceCard>

            <SubServiceCard>
              <h3><FaTshirt /> Grooming & Dressing</h3>
              <p>
                Support with clothing, buttons, shaving, and daily personal appearance
                to promote confidence and independence.
              </p>
            </SubServiceCard>

            <SubServiceCard>
              <h3><FaShieldAlt /> Incontinence Care</h3>
              <p>
                Discreet and compassionate care focused on protecting skin health,
                comfort, and dignity at all times.
              </p>
            </SubServiceCard>

            <SubServiceCard>
              <h3><FaWalking /> Mobility Assistance</h3>
              <p>
                Secure transfers, walking support, and fall prevention to ensure safety
                and confidence throughout the home.
              </p>
            </SubServiceCard>

            <SubServiceCard>
              <h3><FaUtensils /> Feeding Assistance</h3>
              <p>
                Assistance with meals and nutrition to promote strength, well-being,
                and healthy daily routines.
              </p>
            </SubServiceCard>
          </SubServiceGrid>
        </ContentArea>

        {/* RIGHT SIDEBAR */}
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

export default PersonalCare;