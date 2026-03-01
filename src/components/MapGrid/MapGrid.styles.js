import styled from 'styled-components';

export const MapGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MapCard = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow};
  text-align: center;
  border: 1px solid #eee;
`;

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;
  border-radius: 8px;
  overflow: hidden;
`;

export const MapImg = styled.img`
  width: 100%;
  display: block;
  opacity: 0.9;
`;

export const Pin = styled.div`
  position: absolute;
  font-size: 1.8rem;
  transform: translate(-50%, -100%);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translate(-50%, -110%) scale(1.2);
  }
  
  &:hover::after {
    content: attr(data-label);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 0.7rem;
    white-space: nowrap;
    z-index: 10;
  }
`;