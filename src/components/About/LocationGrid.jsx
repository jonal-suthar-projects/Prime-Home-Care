import React from 'react';
import { Link } from 'react-router-dom';
import {
  LocationsSection,
  LocationsGrid,
  LocationCard,
} from './LocationGrid.styles';

const LocationGrid = () => {
  return (
    <LocationsSection>
      <div className="container">
        <h2>Areas We Serve</h2>
        <p className="intro-text">
          Prime Home Care proudly provides personalized, non-medical home care services throughout
          Middlesex and Mercer Counties, NJ.
        </p>

        <LocationsGrid>
          <LocationCard>
            <h3><span className="pin-icon">📍</span> Middlesex County, NJ</h3>
            <div className="pills">
              {[
                'South Brunswick','North Brunswick','New Brunswick','Cranbury','East Brunswick','Monroe','Old Bridge',
                'Piscataway','Plainsboro','South Plainfield','Woodbridge','Edison',
                'Highland Park','Jamesburg','Metuchen',
                'Middlesex','Milltown','Sayreville'
              ].map((town) => {
                const slug = town.toLowerCase()
                  .replace(/[^a-z0-9\s-]/g, '')
                  .trim()
                  .replace(/\s+/g, '-') + '-nj';
                return (
                  <Link key={town} to={`/locations/${slug}`} className="pill">
                    {town}
                  </Link>
                );
              })}
            </div>
          </LocationCard>

          <LocationCard>
            <h3><span className="pin-icon">📍</span> Mercer County, NJ</h3>
            <div className="pills">
              {[
                'Princeton','East Windsor','Ewing','Hamilton','Lawrence Township',
                'West Windsor','Hightstown','Trenton'
              ].map((town) => {
                const slug = town.toLowerCase()
                  .replace(/[^a-z0-9\s-]/g, '')
                  .trim()
                  .replace(/\s+/g, '-') + '-nj';
                return (
                  <Link key={town} to={`/locations/${slug}`} className="pill">
                    {town}
                  </Link>
                );
              })}
            </div>
          </LocationCard>
        </LocationsGrid>
      </div>
    </LocationsSection>
  );
};

export default LocationGrid;
