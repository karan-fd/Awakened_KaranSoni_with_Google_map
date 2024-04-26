'use client';
import getPlace from '@shared/GlobalApi';
import React, { useEffect } from 'react';
import { CategoryList, Range, Rating } from './partials';
import { GoogleMapView } from './partials/GoogleMapView';

const Resturant: React.FC = () => {
  useEffect(() => {
    getResturant();
  }, []);

  const getResturant = () => {
    getPlace().then(res => {
      console.log(res.data.resturant.results);
    });
  };
  return (
    <main className="resturant--section">
      <div className="container">
        <div className="grid items-start gap-10 xs:grid-cols-4">
          <aside className="sticky top-10 grid gap-7 xs:col-span-1">
            <CategoryList />
            <Range />
            <Rating />
          </aside>
          <section className="sticky top-10 xs:col-span-3">
            <GoogleMapView />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Resturant;
