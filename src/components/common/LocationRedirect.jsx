import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const LocationRedirect = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const loc = useLocation();

  useEffect(() => {
    if (!slug) {
      navigate('/services', { replace: true });
      return;
    }

    // forward slug as query param so Services can read it
    const search = new URLSearchParams(loc.search);
    search.set('location', slug);
    navigate(`/services?${search.toString()}`, { replace: true });
  }, [slug, navigate, loc.search]);

  return null;
};

export default LocationRedirect;
