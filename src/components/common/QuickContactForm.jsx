import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonSubmit } from './Button';

const FormContainer = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: ${({ $compact }) => ($compact ? '1.5rem' : '2.5rem')};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  border-top: 5px solid ${({ theme }) => theme.primary};
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textDark};
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 0.95rem;
  font-family: 'Poppins', sans-serif;
  background: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.neutralMedium || '#ccc'};
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 0.95rem;
  font-family: 'Poppins', sans-serif;
  background: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.neutralMedium || '#ccc'};
  border-radius: 5px;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const FormMessage = styled(motion.div)`
  padding: 0.75rem;
  border-radius: 5px;
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;
  
  &.success { background: #d4edda; color: #155724; }
  &.error { background: #f8d7da; color: #721c24; }
`;

const QuickContactForm = ({ title = "Contact Us", compact = false }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    // REPLACE THESE WITH YOUR ACTUAL KEYS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setFormStatus('success');
        setIsSubmitting(false);
        form.current.reset();
      }, () => {
        setFormStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <FormContainer $compact={compact}>
      <FormTitle>{title}</FormTitle>
      <form ref={form} onSubmit={sendEmail}>
        <FormGroup>
          <Input type="text" name="user_name" placeholder="Full Name" required />
        </FormGroup>
        <FormGroup>
          <Input type="email" name="user_email" placeholder="Email Address" required />
        </FormGroup>
        <FormGroup>
          <Input type="tel" name="user_phone" placeholder="Phone Number" required />
        </FormGroup>
        <FormGroup>
          <Textarea name="message" placeholder="How can we help?" required />
        </FormGroup>
        <ButtonSubmit type="submit" style={{ width: '100%' }} disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Get Help Now'}
        </ButtonSubmit>

        <AnimatePresence>
          {formStatus === 'success' && (
            <FormMessage className="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Message sent! We'll call you shortly.
            </FormMessage>
          )}
          {formStatus === 'error' && (
            <FormMessage className="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Error sending. Please call us directly.
            </FormMessage>
          )}
        </AnimatePresence>
      </form>
    </FormContainer>
  );
};

export default QuickContactForm;