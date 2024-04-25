'use client';
import { ICategory } from '@models/category';
import { CateData } from '@shared/category-data';
import Image from 'next/image';
import React, { useState } from 'react';

export const CategoryList: React.FC = () => {
  //   const categories = CateData;
  const [categories, setCategories] = useState<ICategory[]>(CateData);
  const [selectedCate, setSelectedCate] = useState<string | number>(0);
  return (
    <div>
      <h4 className="text-lg font-semibold md:text-xl">Select Food Type:</h4>
      <ul className="mt-5 grid grid-cols-[repeat(auto-fill,_minmax(150px,1fr))] gap-3">
        {categories &&
          categories.map((item, idx) => {
            return (
              <li
                key={item.id}
                className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border border-solid border-transparent bg-gray-100 px-2 py-5 grayscale hover:grayscale-0 ${selectedCate === idx ? 'border-purple-200 bg-purple-50 grayscale-0' : null}`}
                onClick={() => setSelectedCate(idx)}
              >
                <figure>
                  <Image src={item.icon} width={48} height={48} alt={item.name} />
                </figure>
                <p className="mt-3 font-medium leading-tight text-gray-900">{item.name}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
