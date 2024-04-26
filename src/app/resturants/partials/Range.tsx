'use client';
import React, { useState } from 'react';

export const Range: React.FC = () => {
  const [radius, setRadius] = useState<number>(1000);

  return (
    <div>
      <h4 className="text-lg font-semibold md:text-xl">Range (in meter):</h4>
      <p className="mt-3 w-full max-w-[250px]">
        <label htmlFor="search-range" className="block flex items-center justify-between text-right">
          <span>Range: </span>
          <span>
            {radius} meter{radius > 1 ? 's' : ''}
          </span>
        </label>
        <input
          type="range"
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
          name="search-range"
          id="search-range"
          min={0}
          max={5000}
          step={100}
          defaultValue={radius}
          onChange={e => setRadius(Number(e.target.value))}
        />
      </p>
    </div>
  );
};
