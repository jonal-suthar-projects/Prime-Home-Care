import React from 'react';
import { Button } from '../common/Button';
import background from '../../assets/backg2.jpg';
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
        <img src={background} alt="Prime Home Care Agency, prime home health care, home care in New Jersey, Home Care NJ" />
      </HeroBg>

      <HeroContent>
        <HeroH1
          as={motion.h1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Prime Home Care Agency
        </HeroH1>

        <HeroP
          as={motion.p}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Looking for Prime Home Care Agency? Get reliable prime home health care and compassionate home care in New Jersey for your loved ones.
        </HeroP>

        <HeroBtnWrapper
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button to="/contact" $big="true" $fontBig="true">
            Get in Touch
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
