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
  }
`;

const MapContainer = styled.div`
  margin-top: 2rem;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;

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
  border: 1px solid ${({ theme }) => theme.neutralMedium};
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.9rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.neutralMedium};
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-height: 140px;
`;

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_6bp29wy",     
        "template_l9yxq4i",     
        form.current,
        "vaLwprI_jO9gokp6p"     
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error);
          alert("Message failed ❌ Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <ContactPageContainer>
      <PageHeaderContainer>
        <PageTitle>
          Contact Us
        </PageTitle>
        <PageSubtitle>
          Call (848)-218-1140 for compassionate and reliable home care services. We provide 24/7 personalized in-home senior care, and dedicated support tailored to your loved one’s needs  ensuring comfort, safety, and independence at home.
        </PageSubtitle>
      </PageHeaderContainer>

      <ContactLayout>
        <div className="container">

          
          <ScrollAnimation>
            <ContactInfo>
              <h3>Contact Us for Home Care Services</h3>

              <p>
                We're here to help with trusted 24 hour home care in NJ. Reach
                out to us today to learn more or schedule a free consultation.
              </p>

              <p>
                <FaMapMarkerAlt /> 13 Point Of Woods Dr,
                <br /> Monmouth Junction, NJ-08852
              </p>

              <p>
                <FaPhone /> (848)-218-1140
              </p>

              <p>
                <FaEnvelope /> info@primehomecarenj.com
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

          
          <ScrollAnimation>
            <ContactForm ref={form} onSubmit={sendEmail}>

              <FormGroup>
                <Label>Full Name</Label>
                <Input
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Email Address</Label>
                <Input
                  type="email"
                  name="user_email"
                  placeholder="john@example.com"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Contact Number</Label>
                <Input
                  type="tel"
                  name="user_phone"
                  placeholder="(555) 123-4567"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Message</Label>
                <Textarea
                  name="message"
                  placeholder="How can we help you?"
                  required
                />
              </FormGroup>

              <ButtonSubmit type="submit">
                {isSubmitting ? "Sending..." : "Send Message"}
              </ButtonSubmit>

            </ContactForm>
          </ScrollAnimation>

        </div>
      </ContactLayout>
    </ContactPageContainer>
  );
};

export default Contact;
