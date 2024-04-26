import { ResturantPage } from '@/modules/resturant';
import { PlaceWrapper } from '@/wrapper/place-wrapper';
import React from 'react';

const Resturant: React.FC = () => {
  return (
    <PlaceWrapper>
      <ResturantPage />
    </PlaceWrapper>
  );
};

export default Resturant;
