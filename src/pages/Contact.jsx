import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser'; // Changed to @emailjs/browser as per previous setup
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import {
  PageHeaderContainer,
  PageTitle,
  PageSubtitle,
} from '../components/common/PageHeader';
import { ButtonSubmit } from '../components/common/Button';
import ScrollAnimation from '../components/common/ScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPageContainer = styled.div`
  background: ${({ theme }) => theme.body};
`;

const ContactLayout = styled.section`
  padding-bottom: 4rem;
  
  .container {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 3rem;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
    }
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.textDark};
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};
    margin-right: 1.5rem;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }
  
  div {
    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.25rem;
      color: ${({ theme }) => theme.textDark};
    }
    p {
      margin: 0;
      color: ${({ theme }) => theme.textSecondary};
      line-height: 1.6;
    }
    a {
      color: ${({ theme }) => theme.textSecondary};
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`;

// --- NEW MAP CONTAINER ---
const MapContainer = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  border: 2px solid ${({ theme }) => theme.cardBg};

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const ContactForm = styled.form`
  background: ${({ theme }) => theme.cardBg};
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  background: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.neutralMedium || '#ccc'};
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary}20;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  background: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.neutralMedium || '#ccc'};
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  transition: border-color 0.3s ease;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary}20;
  }
`;

const FormMessage = styled(motion.div)`
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1.5rem;
  font-weight: 500;
  text-align: center;
  
  &.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  
  &.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    // --- REMEMBER TO PASTE YOUR ACTUAL KEYS HERE ---
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus('success');
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setFormStatus('error');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <ContactPageContainer>
      <PageHeaderContainer>
        <PageTitle>Contact Us</PageTitle>
        <PageSubtitle>
          We're here to help. Reach out to us today to learn more or to
          schedule a free consultation.
        </PageSubtitle>
      </PageHeaderContainer>

      <ContactLayout>
        <div className="container">
          {/* LEFT COLUMN */}
          <ScrollAnimation>
            <ContactInfo>
              <h3>Get in Touch</h3>
              <p style={{ marginBottom: '2rem', color: '#666' }}>
                Have questions? Our team is ready to assist you.
                Contact us via phone, email, or by filling out the form.
              </p>

              <InfoItem>
                <FaMapMarkerAlt />
                <div>
                  <h4>Our Office</h4>
                  <p>
                    13 Point Of Woods Dr <br />
                    Monmouth Junction, NJ-08852
                  </p>
                </div>
              </InfoItem>

              <InfoItem>
                <FaPhone />
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:8482181140">(848)-218-1140</a></p>
                </div>
              </InfoItem>

              <InfoItem>
                <FaEnvelope />
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:info@primehomecarenj.com">info@primehomecarenj.com</a></p>
                </div>
              </InfoItem>

              {/* --- NEW GOOGLE MAP SECTION --- */}
              <MapContainer>
                <iframe 
                  title="Prime Home Care Location"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=13%20Point%20Of%20Woods%20Dr%2C%20Monmouth%20Junction%2C%20NJ%2008852&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </MapContainer>

            </ContactInfo>
          </ScrollAnimation>

          {/* RIGHT COLUMN */}
          <ScrollAnimation delay={0.2}>
            <ContactForm ref={form} onSubmit={sendEmail}>
              <FormGroup>
                <Label htmlFor="user_name">Full Name</Label>
                <Input type="text" name="user_name" id="user_name" placeholder="John Doe" required />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="user_email">Email Address</Label>
                <Input type="email" name="user_email" id="user_email" placeholder="john@example.com" required />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="user_phone">Contact Number</Label>
                <Input type="tel" name="user_phone" id="user_phone" placeholder="(555) 123-4567" required />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <Textarea name="message" id="message" placeholder="How can we help you?" required />
              </FormGroup>

              <ButtonSubmit type="submit" $big="true" $fontBig="false" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </ButtonSubmit>

              <AnimatePresence>
                {formStatus === 'success' && (
                  <FormMessage
                    className="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Message sent successfully! We will get back to you soon.
                  </FormMessage>
                )}
                {formStatus === 'error' && (
                  <FormMessage
                    className="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Failed to send message. Please try again later.
                  </FormMessage>
                )}
              </AnimatePresence>
            </ContactForm>
          </ScrollAnimation>
        </div>
      </ContactLayout>
    </ContactPageContainer>
  );
};

export default Contact;