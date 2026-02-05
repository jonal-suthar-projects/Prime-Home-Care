import React from 'react';
import { FaUserMd, FaHeart, FaHandsHelping } from 'react-icons/fa';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesOverview.styles';

const ServicesOverview = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Our Core Services</ServicesH1>
      <ServicesWrapper>
        
        {/* Card 1: Personal Care */}
        <ServicesCard
          to="/services/personal-care"
          whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
        >
          <ServicesIcon>
            <FaHeart />
          </ServicesIcon>
          <ServicesH2>Personal Care</ServicesH2>
          <ServicesP>
            Dignified assistance with daily living activities like bathing, 
            dressing, grooming, and mobility support.
          </ServicesP>
        </ServicesCard>

        {/* Card 2: Companion Care */}
        <ServicesCard
          to="/services/companion-care"
          whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
        >
          <ServicesIcon>
            <FaHandsHelping />
          </ServicesIcon>
          <ServicesH2>Companion Care</ServicesH2>
          <ServicesP>
            Emotional support and socialization, including housekeeping, 
            errands, and maintaining a safe home environment.
          </ServicesP>
        </ServicesCard>

        {/* Card 3: Specialty Care */}
        <ServicesCard
          to="/services/specialty-care"
          whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
        >
          <ServicesIcon>
            <FaUserMd />
          </ServicesIcon>
          <ServicesH2>Specialty Care</ServicesH2>
          <ServicesP>
            Expert care for complex needs including Alzheimer’s, Dementia, 
            Parkinson’s, and chronic condition management.
          </ServicesP>
        </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ServicesOverview;