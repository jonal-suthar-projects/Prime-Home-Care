import React from 'react';
import { FaHeart, FaAward, FaBullseye, FaUsers } from 'react-icons/fa';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './AboutUsOverview.styles';

export const AboutUsOverview = () => {
  return (
    <ServicesContainer id="about-overview" style={{ background: 'transparent' }}>
      <ServicesH1>Our Foundation</ServicesH1>
      <ServicesWrapper>
        
        {/* Our Mission */}
        <ServicesCard as="div" whileHover={{ y: -10 }}>
          <ServicesIcon><FaBullseye /></ServicesIcon>
          <ServicesH2>Our Mission</ServicesH2>
          <ServicesP>
            Deliver exceptional in-home care that promotes independence, 
            preserves dignity, and enhances quality of life.
          </ServicesP>
        </ServicesCard>

        {/* Our Commitment */}
        <ServicesCard as="div" whileHover={{ y: -10 }}>
          <ServicesIcon><FaAward /></ServicesIcon>
          <ServicesH2>Our Commitment</ServicesH2>
          <ServicesP>
            Reliable, personalized support — available 24/7 — with 
            excellence as our standard.
          </ServicesP>
        </ServicesCard>

        {/* Our Team */}
        <ServicesCard as="div" whileHover={{ y: -10 }}>
          <ServicesIcon><FaUsers /></ServicesIcon>
          <ServicesH2>Our Team</ServicesH2>
          <ServicesP>
            Certified, experienced caregivers chosen not only for skill, 
            but for heart.
          </ServicesP>
        </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default AboutUsOverview;