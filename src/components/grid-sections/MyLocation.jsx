import { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import FaceIcon from '../../assets/face-map-icon.png';
import { FaPlus, FaMinus } from 'react-icons/fa';

import { any } from 'prop-types';

const MyLocation = ({ isDarkTheme }) => {
  const minZoom = 3;
  const maxZoom = 12;

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const lightMapStyles = [
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

  const darkMapStyles = [
    {
      elementType: 'geometry',
      stylers: [{ color: '#212121' }],
    },
    {
      elementType: 'labels.icon',
      stylers: [{ visibility: 'off' }],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#212121' }],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [{ color: '#757575' }],
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9e9e9e' }],
    },
    {
      featureType: 'administrative.land_parcel',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#bdbdbd' }],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#181818' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#616161' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#1b1b1b' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [{ color: '#2c2c2c' }],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#8a8a8a' }],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [{ color: '#373737' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#3c3c3c' }],
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry',
      stylers: [{ color: '#4e4e4e' }],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#616161' }],
    },
    {
      featureType: 'transit',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#000000' }],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#3d3d3d' }],
    },
  ];

  const initialCenter = {
    lat: 35.99192,
    lng: -115.10983,
  };

  const [zoom, setZoom] = useState(9);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 3, maxZoom));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 3, minZoom));

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  function getMapStyles() {
    return isDarkTheme ? darkMapStyles : lightMapStyles;
  }

  const mapOptions = {
    styles: getMapStyles(),
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false,
    clickableIcons: false,
    draggable: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className='grid-item my-location'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={initialCenter}
        zoom={zoom}
        options={mapOptions}
      />
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

MyLocation.propTypes = {
  isDarkTheme: any,
};

export default MyLocation;
