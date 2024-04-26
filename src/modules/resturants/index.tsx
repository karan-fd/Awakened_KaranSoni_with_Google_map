'use client';
import React from 'react';
import { CategoryList, GoogleMapView, Range, Rating } from './partials';

export const ResturantPage: React.FC = () => {
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
