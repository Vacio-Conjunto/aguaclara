'use-client'
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = (props) => {
  useEffect(() => {
    console.log("props", props)
    const initializeMap = () => {
      const map = L.map('mapita').setView([25.7, -100.3], 10);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      return map;
    };

    const map = initializeMap();

    const customIcon = L.icon({
      iconUrl: '/drop.png', // Adjust the path to your icon
      iconSize: [32, 32], // Width and height of the icon
      iconAnchor: [16, 32], // Position the icon's anchor point
    });

    // Add markers based on the coordinates prop
    if (Array.isArray(props.coordenadas)) {
      props.coordenadas.forEach(coord => {
        L.marker([coord.latitud, coord.longitud], { icon: customIcon }).addTo(map);
      });
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [props]);

  return <div id="mapita" style={{ height: '100%' }}></div>;
};

export default MapComponent;
