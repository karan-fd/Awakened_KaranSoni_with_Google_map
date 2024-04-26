'use client';
import { PlaceConext } from '@/context/place-context';
import { UserLocationContext } from '@/context/user-location-context';
import { GoogleMap, LoadScript, MarkerF, OverlayView } from '@react-google-maps/api';
import React, { Fragment, useContext } from 'react';
import { ResturantItem } from './ResturantItem';
import { Marker } from './Marker';

export const GoogleMapView: React.FC = () => {
  const { location } = useContext(UserLocationContext);
  const { resturants, currentResturant, handleCurrentResturant } = useContext(PlaceConext);

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
            // center={currentResturant?.name ? currentResturant?.geometry?.location : location}
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
            {resturants &&
              resturants.map(
                (item: any, idx: number) =>
                  idx <= 7 && (
                    <Fragment key={idx}>
                      <Marker item={item} />
                    </Fragment>
                  )
              )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};
