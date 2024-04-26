'use client';
import { PlaceConext } from '@/context/place-context';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { Fragment, useContext } from 'react';
import { ResturantItem } from './ResturantItem';
import { ResturantItemPlaceholder } from '@/components/ResturantItemPlaceholder';

export const Resturanats: React.FC = () => {
  const { isLoading, resturants } = useContext(PlaceConext);
  return (
    <div className="max-w-full overflow-hidden">
      <h4 className="mb-4 text-lg font-semibold md:text-xl">Resturants Near me:</h4>
      <div className="min-w-full max-w-full overflow-hidden">
        <Splide
          options={{
            rewind: true,
            gap: 15,
            autoWidth: 180,
            pagination: false,
          }}
        >
          {!isLoading
            ? resturants &&
              resturants.map((item: any, idx: number) => {
                return (
                  <Fragment key={idx}>
                    <SplideSlide>
                      <ResturantItem item={item} />
                    </SplideSlide>
                  </Fragment>
                );
              })
            : [1, 2, 3].map((item, idx) => {
                return (
                  <Fragment key={idx}>
                    <ResturantItemPlaceholder />
                  </Fragment>
                );
              })}
        </Splide>
      </div>
    </div>
  );
};
