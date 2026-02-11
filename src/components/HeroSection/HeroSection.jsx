import React from 'react';
import { Button } from '../common/Button';
import background from '../../assets/backg2.jpg'
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from './HeroSection.styles';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        {/* Placeholder background image */}
        <img src={background} alt="Caring hands" />
      </HeroBg>
      <HeroContent>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ><HeroH1>
            Welcome to Prime Home Care - New Jersey
          </HeroH1>

        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <HeroP>
            Providing 24/7 Compassionate & Professional Home Care Support.
          </HeroP>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <HeroBtnWrapper>
            <Button to="/contact" $big="true" $fontBig="true">
              Get in Touch
            </Button>
          </HeroBtnWrapper>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;