'use client';
import { MarkerF, OverlayView } from '@react-google-maps/api';
import React, { useContext } from 'react';
import { ResturantItem } from './ResturantItem';
import { PlaceConext } from '@/context/place-context';

type Props = {
  item: any;
};

export const Marker: React.FC<Props> = ({ item }) => {
  const { currentResturant, handleCurrentResturant } = useContext(PlaceConext);

  return (
    <MarkerF
      position={item?.geometry?.location}
      onClick={() => handleCurrentResturant(item)}
      icon={{
        url: '/icon-resturant-marker.svg',
        // eslint-disable-next-line
        // @ts-expect-error
        scaledSize: {
          width: 12,
          height: 12,
        },
      }}
    >
      {currentResturant?.reference === item?.reference ? (
        <OverlayView position={item?.geometry?.location} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
          <ResturantItem theme="white" item={item} direction={true} />
        </OverlayView>
      ) : null}
    </MarkerF>
  );
};
