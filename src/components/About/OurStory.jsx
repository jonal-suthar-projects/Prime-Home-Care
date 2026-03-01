import React from 'react';
import {
  StorySection,
  StoryGrid,
  StoryImage,
  StoryContent,
  PhotoCaption,
} from './OurStory.styles';

const OurStory = ({ photo, name, role, children }) => {
  return (
    <StorySection>
      <div className="container">
        <StoryGrid>
          <div style={{ textAlign: 'center' }}>
            <StoryImage src={photo} alt={name} />
            <PhotoCaption>
              <div>{name}</div>
              <div>{role}</div>
            </PhotoCaption>
          </div>

          <StoryContent>{children}</StoryContent>
        </StoryGrid>
      </div>
    </StorySection>
  );
};

export default OurStory;
