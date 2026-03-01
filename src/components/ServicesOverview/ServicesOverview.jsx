import React from 'react';
import { FaUserMd, FaHeart, FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesOverview.styles';

export const ServicesOverview = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Our Care Services</ServicesH1>
      <ServicesWrapper>

        <Link to="/services/personal-care" style={{ textDecoration: 'none' }} aria-label="Personal Care">
          <ServicesCard whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
          <ServicesIcon>
            <FaHeart />
          </ServicesIcon>
          <ServicesH2>Personal Care</ServicesH2>
          <ServicesP>
            Professional assistance with daily activities including bathing,
            grooming, mobility support, and hygiene to help seniors maintain
            dignity and independence at home.
          </ServicesP>
          </ServicesCard>
        </Link>

        <Link to="/services/companion-care" style={{ textDecoration: 'none' }} aria-label="Companion Care">
          <ServicesCard whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
          <ServicesIcon>
            <FaHandsHelping />
          </ServicesIcon>
          <ServicesH2>Companion Care</ServicesH2>
          <ServicesP>
            Emotional support, companionship, light housekeeping, meal
            preparation, and errands to improve quality of life for seniors
            receiving home care in New Jersey.
          </ServicesP>
          </ServicesCard>
        </Link>

        <Link to="/services/specialty-care" style={{ textDecoration: 'none' }} aria-label="Specialty Care">
          <ServicesCard whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
          <ServicesIcon>
            <FaUserMd />
          </ServicesIcon>
          <ServicesH2>Specialty Care</ServicesH2>
          <ServicesP>
            Specialized care for Alzheimer’s, dementia, Parkinson’s, and other
            complex conditions delivered by experienced caregivers trained in
            advanced home health support.
          </ServicesP>
          </ServicesCard>
        </Link>

      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ServicesOverview;