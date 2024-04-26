'use client';
import { UserLocationContext } from '@/context/user-location-context';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import React, { useContext } from 'react';

export const GoogleMapView: React.FC = () => {
  const { location } = useContext(UserLocationContext);

  const mapContainerStyle = {
    width: '100%',
    height: '60vh',
  };
  return (
    <div>
      <h4 className="mb-5 text-lg font-semibold md:text-xl">Google Map Extension</h4>
      <div className="overflow-hidden rounded-xl">
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLI_GOOGLE_MAP_API_KEYS as string}
          mapIds={['ca902d3a0d99e66e']}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={location}
            zoom={16}
            options={{ mapId: 'ca902d3a0d99e66e' }}
          >
            <MarkerF
              position={location}
              icon={{
                url: '/icon-map-marker.svg',
                // eslint-disable-next-line
                // @ts-expect-error
                scaledSize: {
                  width: 36,
                  height: 36,
                },
              }}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};
