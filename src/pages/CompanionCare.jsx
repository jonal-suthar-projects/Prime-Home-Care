import React from 'react';
import styled from 'styled-components';
import { PageHeaderContainer, PageTitle, PageSubtitle } from '../components/common/PageHeader';
import QuickContactForm from '../components/common/QuickContactForm';
import { FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import g1 from '../assets/G1.jpg'; 

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
  h2 {color: ${({ theme }) => theme.primary}; margin-bottom: 1.5rem; font-size: 2rem; }
  p {text-align: justify; margin-bottom: 1.5rem; line-height: 1.8; color: ${({ theme }) => theme.textSecondary}; font-size: 1.05rem; }
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

const List = styled.ul`
  list-style: none; padding: 0; margin-top: 1rem;
  li {display: flex; align-items: flex-start; gap: 10px; margin-bottom: 1rem; font-size: 1.1rem; color: ${({ theme }) => theme.textDark}; 
    svg { color: ${({ theme }) => theme.primary}; margin-top: 4px; } }
`;

const CompanionCare = () => {
  return (
    <>
      {/* <PageHeaderContainer>
        <PageTitle>Companion Care</PageTitle>
        <PageSubtitle>Friendship, support, and social interaction.</PageSubtitle>
      </PageHeaderContainer> */}

      <PageLayout>
        <ContentArea>
          <img src={g1} alt="Companion Care" />
          <h2>Caring Companionship</h2>
          <p>
            Social isolation is a significant health risk for seniors. Our Companion Care services focus on emotional well-being by providing a friendly face and a listening ear. We match caregivers based on personality and shared interests to foster genuine connections.
          </p>
          <p>
            Beyond socialization, our companions assist with household management, ensuring the home remains safe, clean, and organized, allowing your loved one to focus on enjoying their day.
          </p>

          <h3>Our Companion Services Include:</h3>
          <List>
            <li><FaCheckCircle /> <strong>Social Interaction:</strong> Conversation, games, reading, and hobbies.</li>
            <li><FaCheckCircle /> <strong>Light Housekeeping:</strong> Laundry, dusting, vacuuming, and trash removal.</li>
            <li><FaCheckCircle /> <strong>Meal Preparation:</strong> Planning and cooking nutritious meals.</li>
            <li><FaCheckCircle /> <strong>Errands & Shopping:</strong> Grocery shopping and pharmacy pick-ups.</li>
            <li><FaCheckCircle /> <strong>Transportation:</strong> Driving to doctor appointments or social events.</li>
          </List>
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

export default CompanionCare;