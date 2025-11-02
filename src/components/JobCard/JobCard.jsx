import React from 'react';
import {
  Card,
  JobInfo,
  JobTitle,
  JobDetails,
  JobLocation,
  JobType,
  ApplyButton,
} from './JobCard.styles';
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';

const JobCard = ({ title, location, type }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)' }}
    >
      <JobInfo>
        <JobTitle>{title}</JobTitle>
        <JobDetails>
          <JobLocation>
            <FaMapMarkerAlt /> {location}
          </JobLocation>
          <JobType>
            <FaRegClock /> {type}
          </JobType>
        </JobDetails>
      </JobInfo>
      <ApplyButton to="/contact">Apply Now</ApplyButton>
    </Card>
  );
};

export default JobCard;