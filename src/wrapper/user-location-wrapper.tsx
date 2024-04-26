'use client';
import { ILocation, UserLocationContext } from '@/context/user-location-context';
import React, { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export const UserLocationWrapper: React.FC<Props> = ({ children }) => {
  const [location, setLocation] = useState<ILocation>({ lat: 0, lng: 0 });

  useEffect(() => {
    geoLocation();
  }, []);

  const geoLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  return <UserLocationContext.Provider value={{ location, setLocation }}>{children}</UserLocationContext.Provider>;
};
