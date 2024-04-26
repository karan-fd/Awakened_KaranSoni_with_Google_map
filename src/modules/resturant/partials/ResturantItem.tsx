import { PlaceConext } from '@/context/place-context';
import { UserLocationContext } from '@/context/user-location-context';
import Image from 'next/image';
import React, { useContext, useEffect } from 'react';

type Props = {
  item: any;
  theme?: 'white';
  direction?: boolean;
};

export const ResturantItem: React.FC<Props> = ({ item, theme, direction = false }) => {
  const { distance, handleCurrentResturant, updateDistance } = useContext(PlaceConext);
  const { location } = useContext(UserLocationContext);

  useEffect(() => {
    calculateDistance(item?.geometry?.location.lat, item?.geometry?.location.lng, location.lat, location.lng);
  }, []);

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const earthRadius = 6371; // in kilometers

    const degToRad = (deg: number) => {
      return deg * (Math.PI / 180);
    };

    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lng2 - lng1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c;

    updateDistance(distance.toFixed(1));
    return distance.toFixed(2); // Return the distance with 2 decimal places
  };

  const onDirectionClick = () => {
    window.open(
      'https://www.google.com/maps/dir/?api=1&origin=' +
        location.lat +
        ',' +
        location.lng +
        '&destination=' +
        item?.geometry?.location.lat +
        ',' +
        item?.geometry?.location.lng +
        '&travelmode=driving'
    );
  };

  return (
    <article
      className={`w-full max-w-[180px] cursor-pointer ${theme === 'white' ? 'min-w-[125px] max-w-[125px] -translate-x-1/2 translate-y-2 rounded-lg bg-white p-2 transition-all xl:hover:scale-[1.25]' : null}`}
      onClick={() => handleCurrentResturant(item)}
    >
      <figure
        className={`flex h-[125px] w-full  overflow-hidden rounded-lg shadow-md ${theme === 'white' ? 'h-[75px]' : null}`}
      >
        <Image
          src={item.thumbnail}
          // src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=180&photoreference=${photoRef}&key=${GOOGLE_API_KEY}`}
          width={0}
          height={0}
          className="h-full w-full overflow-hidden object-cover object-center "
          alt={item.title}
        />
      </figure>
      <h3 className={`mt-1 mt-2 text-sm font-bold`}>{item.title}</h3>
      <p className="mt-1 text-xs">{item.formatted_address}</p>
      <p className="mt-2 flex items-center justify-between text-xs leading-tight">
        <span>⭐ {item.rating}</span>
        {direction ? <span>{distance} Km</span> : null}
      </p>
      {direction ? (
        <>
          <span className="mt-2 block border-t"></span>
          <p
            onClick={() => onDirectionClick()}
            className="mt-2 flex min-h-7 items-center justify-center rounded-full border border-solid border-blue-500 px-2 py-1 font-medium leading-tight text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Get Direction
          </p>
        </>
      ) : null}
    </article>
  );
};
