import React from 'react';
import { MapSection, MapFrame } from './MapWrapper.styles';

const MapWrapper = ({ src }) => {
  const defaultSrc = 'https://www.google.com/maps/d/u/1/embed?mid=1P4-NNjSNTsF2Mn1jcF-eTghtGawDCBU&ehbc=2E312F';
  return (
    <MapSection>
      <div className="container">
        <MapFrame
          title="Prime Home Care Service Area - Middlesex & Mercer"
          src={src || defaultSrc}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </MapSection>
  );
};

export default MapWrapper;
