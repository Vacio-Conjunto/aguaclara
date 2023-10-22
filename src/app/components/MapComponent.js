import React, {useEffect} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  useEffect(() => {
    const initializeMap = () => {
      const map = L.map('mapita').setView([25.7, -100.3], 10);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      return map;
    };

    const map = initializeMap();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return <div id="mapita" style={{height: '100%'}}></div>;
};

export default MapComponent;
