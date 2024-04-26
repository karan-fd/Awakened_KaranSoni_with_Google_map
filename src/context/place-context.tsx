'use client';
import { createContext } from 'react';

interface IPlaceContext {
  isLoading: boolean;
  category: string;
  radius: number;
  resturants: any;
  currentResturant: any;
  handleCategory: (val: string) => void;
  handleRadius: (val: number) => void;
  handleCurrentResturant: (item: any) => void;
}

const initailValue = {} as IPlaceContext;

export const PlaceConext = createContext<IPlaceContext>(initailValue);
