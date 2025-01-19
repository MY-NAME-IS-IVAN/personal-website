import { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import FaceIcon from '../../assets/face-map-icon.png';
import { FaPlus, FaMinus } from 'react-icons/fa';

const MyLocation = () => {
  const minZoom = 3;
  const maxZoom = 12;

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const mapStyles = [
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [
        {
          saturation: 36,
        },
        {
          color: '#000000',
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      featureType: 'all',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'on',
        },
        {
          color: '#ffffff',
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: 'all',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#d6d6d6',
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#c2c2c2',
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#dadada',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#d0d0d0',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e6e6e6',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#c9d6de',
        },
      ],
    },
  ];

  const initialCenter = {
    lat: 35.99192,
    lng: -115.10983,
  };

  const [zoom, setZoom] = useState(9);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 3, maxZoom));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 3, minZoom));

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
      <div className='zoom-buttons'>
        <button
          onClick={handleZoomOut}
          className={`${zoom == minZoom ? 'hidden' : ''}`}
        >
          <FaMinus />
        </button>
        <button
          onClick={handleZoomIn}
          className={`${zoom == maxZoom ? 'hidden' : ''}`}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default MyLocation;
