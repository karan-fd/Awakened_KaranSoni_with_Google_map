import React from 'react';
import Image from 'next/image';

type Props = {
  item: any;
};

export const ResturantItem: React.FC<Props> = ({ item }) => {
  const GOOGLE_API_KEY = process.env.NEXT_PUBLI_GOOGLE_MAP_API_KEYS;
  const photoRef = item.photos ? item.photos[0]?.photo_reference : '';
  return (
    <article className="w-full max-w-[180px] cursor-pointer">
      <figure className="flex h-[125px] w-full  overflow-hidden rounded-lg shadow-md">
        <Image
          src={item.thumbnail}
          // src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=180&photoreference=${photoRef}&key=${GOOGLE_API_KEY}`}
          width={0}
          height={0}
          className="h-full w-full overflow-hidden object-cover object-center "
          alt={item.title}
        />
      </figure>
      <h3 className="mt-1 mt-2 text-sm font-bold">{item.title}</h3>
      <p className="mt-1 text-xs">{item.formatted_address}</p>
      <p className="mt-2 text-xs leading-tight">⭐ {item.rating}</p>
    </article>
  );
};
