import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  TestimonialSection,
  TestimonialH2,
  TestimonialSlide,
  QuoteIcon,
  TestimonialText,
  TestimonialAuthor,
  AuthorImage,
  AuthorInfo,
} from './Testimonials.styles';

// --- UPDATED: New content for the carousel ---
const teamQuotes = [
  {
    quote:
      "We built Prime Home Care from a place of love, based on the care we'd want for our own family. Our promise is simple: to treat every client with dignity, compassion, and respect.",
    author: 'Jane M. Doe',
    relation: 'Founder & CEO',
    img: 'https://randomuser.me/api/portraits/women/44.jpg', // Placeholder
  },
  {
    quote:
      "A client's safety and well-being are our highest priorities. We are committed to the highest standards of clinical excellence and ensuring your loved ones are in safe, professional hands.",
    author: 'John R. Smith',
    relation: 'Director of Nursing',
    img: 'https://randomuser.me/api/portraits/men/32.jpg', // Placeholder
  },
  {
    quote:
      "It's all about the personal connection. We take the time to listen and match each family with the perfect caregiver, creating a supportive and trusting relationship from day one.",
    author: 'Emily White',
    relation: 'Client Care Coordinator',
    img: 'https://randomuser.me/api/portraits/women/65.jpg', // Placeholder
  },
];
// --- END OF UPDATE ---

const Testimonials = () => {
  return (
    <TestimonialSection>
      <div className="container">
        {/* --- UPDATED: New Title --- */}
        <TestimonialH2>Our Commitment to You</TestimonialH2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
        >
          {/* --- UPDATED: Now mapping 'teamQuotes' --- */}
          {teamQuotes.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialSlide>
                <QuoteIcon>
                  <FaQuoteLeft />
                </QuoteIcon>
                <TestimonialText>{testimonial.quote}</TestimonialText>
                <TestimonialAuthor>
                  <AuthorImage src={testimonial.img} alt={testimonial.author} />
                  <AuthorInfo>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.relation}</p>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </TestimonialSection>
  );
};

export default Testimonials;