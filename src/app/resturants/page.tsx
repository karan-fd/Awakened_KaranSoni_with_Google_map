import React from 'react';
import { CategoryList } from './partials/CategoryList';

const Resturant: React.FC = () => {
  return (
    <section className="resturant--section">
      <div className="container">
        <div className="grid">
          <aside className="">
            <CategoryList />
          </aside>
          <main className=""></main>
        </div>
      </div>
    </section>
  );
};

export default Resturant;
