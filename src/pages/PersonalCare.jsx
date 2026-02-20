import React from 'react';
import styled from 'styled-components';
import { PageHeaderContainer, PageTitle, PageSubtitle } from '../components/common/PageHeader';
import QuickContactForm from '../components/common/QuickContactForm';
import { FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import g2 from '../assets/G2.jpg';

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

const PersonalCare = () => {
  return (
    <>
     <PageHeaderContainer>
  <PageTitle style={{
    fontSize: "36px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }}>
    Senior Home Care & Medication Management Services New Jersey
  </PageTitle>
</PageHeaderContainer>

      <PageLayout>
        {/* LEFT CONTENT */}
        <ContentArea>
          <img src={g2} alt="Personal Care Assistance" />
          <h2>Preserving Independence & Dignity</h2>
          <p>
            For many seniors and individuals with disabilities, maintaining independence at home is a top priority. However, physical limitations can make daily tasks difficult or unsafe. Our Personal Care services are designed to provide the hands-on support needed to live safely and comfortably at home.
          </p>
          <p>
            Our caregivers are trained to assist with sensitive personal tasks with the utmost respect and professionalism. We understand that accepting help with personal hygiene can be difficult, which is why we focus on building trust and maintaining client dignity at all times.
          </p>

          <h3>Our Personal Care Services Include:</h3>
          <List>
            <li><FaCheckCircle /> <strong>Bathing & Showering:</strong> Ensuring safety and hygiene while preventing slips and falls.</li>
            <li><FaCheckCircle /> <strong>Grooming & Dressing:</strong> Assistance with buttons, zippers, shaving, and hair care.</li>
            <li><FaCheckCircle /> <strong>Incontinence Care:</strong> Maintaining skin health and comfort with discreet support.</li>
            <li><FaCheckCircle /> <strong>Mobility Assistance:</strong> Safe transfers from bed to chair, and walking support.</li>
            <li><FaCheckCircle /> <strong>Feeding Assistance:</strong> Helping with utensils and ensuring proper nutrition.</li>
          </List>
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