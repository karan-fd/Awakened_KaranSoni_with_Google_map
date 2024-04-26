'use client';
import { RatingList } from '@shared/resturant-data';
import React, { useEffect, useState } from 'react';

export const Rating: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<number[]>([]);

  function onSeletRating(isChecked: boolean, val: number) {
    if (isChecked) {
      setSelectedRating([...selectedRating, val]);
      return;
    }
    setSelectedRating(selectedRating.filter(n => n !== val));
  }

  return (
    <div>
      <h4 className="text-lg font-semibold md:text-xl">Rating:</h4>
      <ul className="mt-3">
        {RatingList &&
          RatingList.map((item, idx) => {
            return (
              <li key={idx}>
                <input
                  type="checkbox"
                  name={`select-rating-${idx}`}
                  id={`select-rating-${idx}`}
                  className="select-rating-style"
                  onChange={e => onSeletRating(e.target.checked, item.name)}
                />
                <label htmlFor={`select-rating-${idx}`}>{item.icon}</label>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
