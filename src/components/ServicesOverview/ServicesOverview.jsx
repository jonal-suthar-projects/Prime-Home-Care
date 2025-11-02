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
          <ServicesH2>Skilled Nursing</ServicesH2>
          <ServicesP>
            Professional medical care provided by licensed nurses in the comfort
            of your home.
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