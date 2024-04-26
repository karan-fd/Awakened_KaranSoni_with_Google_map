import React from 'react';
import { CategoryList, Range, Rating } from './partials';

const Resturant: React.FC = () => {
  return (
    <section className="resturant--section">
      <div className="container">
        <div className="grid xs:grid-cols-4">
          <aside className="grid gap-7 xs:col-span-1">
            <CategoryList />
            <Range />
            <Rating />
          </aside>
          <main className="xs:col-span-3"></main>
        </div>
      </div>
    </section>
  );
};

export default Resturant;
