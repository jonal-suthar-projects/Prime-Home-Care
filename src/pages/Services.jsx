import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaChevronDown, FaBath, FaUsers, FaUserMd } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHeaderContainer, PageTitle, PageSubtitle } from '../components/common/PageHeader';
import PersonalCare from './PersonalCare';
import CompanionCare from './CompanionCare';
import SpecialtyCare from './SpecialtyCare';

const Container = styled.div`
  background: ${({ theme }) => theme.body};
  min-height: 100vh;
`;

const AccordionSection = styled.section`
  max-width: 1100px;
  margin: 2.5rem auto 6rem auto;
  padding: 0 20px;
`;

const AccordionItem = styled.div`
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.cardBg};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const AccordionHeader = styled(motion.button)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px 20px;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-weight: 800;
  color: ${({ theme }) => theme.textDark};
  text-align: center;
  font-size: 1.15rem;
`;

const AccordionContent = styled(motion.div)`
  padding: 12px 18px 18px 18px;
  color: ${({ theme }) => theme.textSecondary};
  background: ${({ theme }) => theme.cardBg};
`;

const HeaderIcon = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.primary};
`;

const HeaderHint = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-top: 6px;
`;

const titleCase = (str) => str.replace(/\b\w/g, c => c.toUpperCase());

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const slug = params.get('location');

  const locationName = slug
    ? (() => {
        const base = slug.replace(/-nj$/i, '');
        const words = base.split('-').map(w => titleCase(w));
        return words.join(' ');
      })()
    : null;

  const panels = [
    { title: 'Personal Care', Component: PersonalCare, Icon: FaBath },
    { title: 'Companion Care', Component: CompanionCare, Icon: FaUsers },
    { title: 'Specialty Care', Component: SpecialtyCare, Icon: FaUserMd },
  ];

  return (
    <Container>
      <PageHeaderContainer>
        <PageTitle>{`Comprehensive Home Care Services — ${locationName ? `${locationName}, NJ` : 'NJ'}`}</PageTitle>
        <PageSubtitle>{`Trusted, personalized in-home care services across ${locationName ? `${locationName}, NJ` : 'NJ'} — from companion care to post-hospital support and daily living assistance.`}</PageSubtitle>
      </PageHeaderContainer>

      <AccordionSection>
        {panels.map((p, idx) => {
          const Open = activeIndex === idx;
          const PanelComponent = p.Component;
          const Icon = p.Icon;
          return (
            <AccordionItem key={p.title}>
              <AccordionHeader
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                aria-expanded={Open}
              >
                <HeaderIcon><Icon /></HeaderIcon>
                <div style={{ fontSize: 20 }}>{p.title}</div>
                <HeaderHint>{Open ? 'Click to collapse' : 'Click to expand'}</HeaderHint>
                <motion.span style={{ marginTop: 8 }} animate={{ rotate: Open ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <FaChevronDown />
                </motion.span>
              </AccordionHeader>

              <AnimatePresence initial={false}>
                {Open && (
                  <AccordionContent
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.36, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <PanelComponent />
                  </AccordionContent>
                )}
              </AnimatePresence>
            </AccordionItem>
          );
        })}
      </AccordionSection>
    </Container>
  );
};

export default Services;
