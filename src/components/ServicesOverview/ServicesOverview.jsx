import React from 'react';
import { FaUserMd, FaHeart, FaHandsHelping, FaBaby } from 'react-icons/fa';
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
        <ServicesCard
          whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
        >
          <ServicesIcon>
            <FaUserMd />
          </ServicesIcon>
          <ServicesH2>24/7 Live-In Care</ServicesH2>
          <ServicesP>
            Continuous, round-the-clock care for clients who require constant supervision and support.
          </ServicesP>
        </ServicesCard>

        <ServicesCard
          whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
        >
          <ServicesIcon>
            <FaHeart />
          </ServicesIcon>
          <ServicesH2>Personal Care</ServicesH2>
          <ServicesP>
            Assistance with daily activities like bathing, dressing, and meal
            preparation.
          </ServicesP>
        </ServicesCard>

        <ServicesCard
          whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
        >
          <ServicesIcon>
            <FaHandsHelping />
          </ServicesIcon>
          <ServicesH2>Companion Care</ServicesH2>
          <ServicesP>
            Providing friendship, conversation, and support for social and
            emotional well-being.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ServicesOverview;