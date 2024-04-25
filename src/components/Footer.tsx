import React from 'react';

export const Footer: React.FC = () => {
  const date = new Date();

  return (
    <footer className="footer--section mt-10 bg-neutral-200 py-3">
      <div className="container">
        <ul className="list-none text-center md:flex md:items-center md:justify-between">
          <li className="md:order-2">
            Yours Truly:&nbsp;
            <a href="https://mkaran99.com" title="Karan Soni" target="_blank" rel="noreferrer">
              <b>Karan Soni</b>
            </a>
          </li>
          <li className="md:order-1">&copy; {date.getFullYear()}, All rights reserved.</li>
        </ul>
      </div>
    </footer>
  );
};
