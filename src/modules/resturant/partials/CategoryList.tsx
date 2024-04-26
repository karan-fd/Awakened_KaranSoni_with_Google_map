'use client';
import { PlaceConext } from '@/context/place-context';
import { CateData } from '@shared/resturant-data';
import Image from 'next/image';
import React, { useContext, useState } from 'react';

export const CategoryList: React.FC = () => {
  const [selectedCate, setSelectedCate] = useState<string | number>();
  const { handleCategory } = useContext(PlaceConext);
  return (
    <div>
      <h4 className="text-lg font-semibold md:text-xl">Food Type:</h4>
      <ul className="mt-5 grid grid-cols-[repeat(auto-fill,_minmax(125px,1fr))] gap-3">
        {CateData &&
          CateData.map((item, idx) => {
            return (
              <li
                key={item.id}
                className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border border-solid bg-gray-100 px-2 py-5 grayscale hover:grayscale-0 ${selectedCate === idx ? 'border-purple-200 bg-purple-50 grayscale-0' : 'border-transparent'}`}
                onClick={() => {
                  setSelectedCate(idx);
                  handleCategory(item.value);
                }}
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
