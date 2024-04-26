import { ResturantPage } from '@/modules/resturants';
import { PlaceWrapper } from '@/wrapper/place-wrapper';
import getPlace from '@shared/GlobalApi';
import React, { useEffect } from 'react';

const Resturant: React.FC = () => {
  return (
    <PlaceWrapper>
      <ResturantPage />
    </PlaceWrapper>
  );
};

export default Resturant;
