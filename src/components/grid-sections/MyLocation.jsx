import { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import FaceIcon from '../../assets/face-map-icon.png';
import { FaPlus, FaMinus } from 'react-icons/fa';

const MyLocation = () => {
  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const mapStyles = [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
  ];

  const initialCenter = {
    lat: 35.99192,
    lng: -115.10983,
  };

  const [zoom, setZoom] = useState(12);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 3, 15));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 3, 3));

  const mapOptions = {
    styles: mapStyles,
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false,
    clickableIcons: false,
    draggable: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
  };

  return (
    <div className='grid-item my-location'>
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        className='map-display'
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={initialCenter}
          zoom={zoom}
          options={mapOptions}
        />
      </LoadScript>
      <div className='face-map-icon-container'>
        <img src={FaceIcon} alt='' className='face-map-icon' />
      </div>
      <div className='start-overlay'></div>
      <div className='zoom-buttons' >
        <button onClick={handleZoomOut} className={`${zoom == 3 ? 'hidden' : ''}`}>
          <FaMinus />
        </button>
        <button onClick={handleZoomIn} className={`${zoom == 15 ? 'hidden' : ''}`}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default MyLocation;
