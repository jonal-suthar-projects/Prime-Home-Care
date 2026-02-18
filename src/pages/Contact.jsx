import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import {
  PageHeaderContainer,
  PageTitle,
  PageSubtitle,
} from "../components/common/PageHeader";
import { ButtonSubmit } from "../components/common/Button";
import ScrollAnimation from "../components/common/ScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- STYLES ---------------- */

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
  }

  p {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.textSecondary};
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  svg {
    color: ${({ theme }) => theme.primary};
    margin-top: 4px;
  }
`;

const MapContainer = styled.div`
  margin-top: 2rem;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};

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
  margin-bottom: 6px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSecondary};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.neutralMedium || "#ccc"};
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary}20;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.9rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.neutralMedium || "#ccc"};
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-height: 140px;
  resize: vertical;
  transition: 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary}20;
  }
`;

const FormMessage = styled(motion.div)`
  padding: 1rem;
  border-radius: 6px;
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

/* ---------------- COMPONENT ---------------- */

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    emailjs
      .sendForm(
        "service_6bp29wy",     // Your EmailJS Service ID
        "template_l9yxq4i",    // Your Template ID
        form.current,
        "vaLwprI_jO9gokp6p"     // Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("success");
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setFormStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <ContactPageContainer>
      <PageHeaderContainer>
        <PageTitle>
          24 Hour In-Home Senior Care in New Jersey | Contact Us
        </PageTitle>
        <PageSubtitle>
          Call (848)-218-1140 for trusted home care services NJ. We offer 24 hour
          home care, in-home senior care, and support from leading agencies in
          New Jersey.
        </PageSubtitle>
      </PageHeaderContainer>

      <ContactLayout>
        <div className="container">

          {/* LEFT SIDE */}
          <ScrollAnimation>
            <ContactInfo>
              <h3>Contact Us for Home Care Services</h3>

              <p>
                We're here to help with trusted 24 hour home care in NJ.
                Reach out today to schedule a free consultation.
              </p>

              <p>
                <FaMapMarkerAlt />
                13 Point Of Woods Dr,<br />
                Monmouth Junction, NJ-08852
              </p>

              <p>
                <FaPhone />
                (848)-218-1140
              </p>

              <p>
                <FaEnvelope />
                info@primehomecarenj.com
              </p>

              <MapContainer>
                <iframe
                  title="Prime Home Care Location"
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=13%20Point%20Of%20Woods%20Dr%2C%20Monmouth%20Junction%2C%20NJ%2008852&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  loading="lazy"
                />
              </MapContainer>
            </ContactInfo>
          </ScrollAnimation>

          {/* RIGHT SIDE */}
          <ScrollAnimation delay={0.2}>
            <ContactForm ref={form} onSubmit={sendEmail}>

              <FormGroup>
                <Label>Full Name</Label>
                <Input type="text" name="user_name" required />
              </FormGroup>

              <FormGroup>
                <Label>Email Address</Label>
                <Input type="email" name="user_email" required />
              </FormGroup>

              <FormGroup>
                <Label>Contact Number</Label>
                <Input type="tel" name="user_phone" required />
              </FormGroup>

              <FormGroup>
                <Label>Message</Label>
                <Textarea name="message" required />
              </FormGroup>

              <ButtonSubmit type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </ButtonSubmit>

              <AnimatePresence>
                {formStatus === "success" && (
                  <FormMessage
                    className="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Message sent successfully! We will contact you soon.
                  </FormMessage>
                )}

                {formStatus === "error" && (
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
