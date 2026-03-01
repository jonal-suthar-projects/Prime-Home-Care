import React from 'react';
import styled from 'styled-components';
import { PageHeaderContainer, PageTitle, PageSubtitle } from '../components/common/PageHeader';
import QuickContactForm from '../components/common/QuickContactForm';
import { FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import g1 from '../assets/G1.jpg';
import {
  FaComments,
  FaBroom,
  FaUtensils,
  FaShoppingCart,
  FaCar
} from "react-icons/fa";
import { SubServiceGrid, SubServiceCard } from '../components/common/SubService.styles';

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

// Reuse shared SubServiceGrid/SubServiceCard from components/common/SubService.styles

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
            Our companion care services provide meaningful friendship, emotional support, and social interaction to help seniors feel connected and valued.
          </p>
          <SubServiceGrid>
            <SubServiceCard>
              <h3 className="flex items-center gap-2">
                <FaComments size={18} className="text-teal-600" />
                Social Interaction
              </h3>
              <p>
                Meaningful companionship through conversation, games, reading,
                hobbies, and engaging activities that reduce loneliness.
              </p>
            </SubServiceCard>

            <SubServiceCard>
              <h3 className="flex items-center gap-2">
                <FaBroom size={18} className="text-teal-600" />
                Light Housekeeping
              </h3>
              <p>
                Assistance with laundry, dusting, vacuuming, and trash removal
                to maintain a clean and comfortable home.
              </p>
            </SubServiceCard>

            <SubServiceCard>
              <h3 className="flex items-center gap-2">
                <FaUtensils size={18} className="text-teal-600" />
                Meal Preparation
              </h3>
              <p>
                Planning and preparing nutritious meals that support
                health, energy, and overall well-being.
              </p>
            </SubServiceCard>

            <SubServiceCard>
              <h3 className="flex items-center gap-2">
                <FaShoppingCart size={18} className="text-teal-600" />
                Errands & Shopping
              </h3>
              <p>
                Help with grocery shopping, pharmacy pick-ups, and
                essential errands to simplify daily living.
              </p>
            </SubServiceCard>

            <SubServiceCard>
              <h3 className="flex items-center gap-2">
                <FaCar size={18} className="text-teal-600" />
                Transportation
              </h3>
              <p>
                Safe, reliable transportation to doctor appointments,
                community events, and social outings.
              </p>
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

export default CompanionCare;