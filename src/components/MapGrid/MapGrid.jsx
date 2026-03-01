import React from 'react';
import { MapGridContainer, MapCard, MapContainer, MapImg, Pin } from './MapGrid.styles';
import MiddlesexMapImg from '../../assets/Middlesex_County_Map.svg.webp';
import MercerMapImg from '../../assets/Mercer_County_Map.svg.webp';

const middlesexPins = [
    { top: '72%', left: '32%', label: 'South Brunswick' },
    { top: '82%', left: '22%', label: 'Plainsboro' },
    { top: '35%', left: '60%', label: 'Edison' },
];

const mercerPins = [
    { top: '35%', left: '75%', label: 'Princeton' },
    { top: '80%', left: '55%', label: 'Hamilton' },
];

const MapGrid = () => {
    return (
        <MapGridContainer>
            <MapCard>
                <h3 style={{ fontSize: '1.2rem', margin: '0' }}>Middlesex County</h3>
                <MapContainer>
                    <MapImg src={MiddlesexMapImg} alt="Middlesex County Map" />
                    {middlesexPins.map((pin) => (
                        <Pin key={pin.label} style={{ top: pin.top, left: pin.left }} data-label={pin.label}>📍</Pin>
                    ))}
                </MapContainer>
            </MapCard>

            <MapCard>
                <h3 style={{ fontSize: '1.2rem', margin: '0' }}>Mercer County</h3>
                <MapContainer>
                    <MapImg src={MercerMapImg} alt="Mercer County Map" />
                    {mercerPins.map((pin) => (
                        <Pin key={pin.label} style={{ top: pin.top, left: pin.left }} data-label={pin.label}>📍</Pin>
                    ))}
                </MapContainer>
            </MapCard>
        </MapGridContainer>
    );
};

export default MapGrid;