'use client';
import { PlaceConext } from '@/context/place-context';
import { UserLocationContext } from '@/context/user-location-context';
import { reducer } from '@/utils/helpers/reducer';
import getPlace from '@shared/GlobalApi';
import debounce from 'debounce';
import React, { useContext, useEffect, useReducer } from 'react';

type Props = {
  children: React.ReactNode;
};

export const PlaceWrapper: React.FC<Props> = ({ children }) => {
  const { location } = useContext(UserLocationContext);

  const initialState = {
    isLoading: false,
    resturants: [],
    category: '',
    radius: 1000,
    currentResturant: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getResturant = () => {
    dispatch({ type: 'SET_LOADING' });
    getPlace(state.category, state.radius, location.lat, location.lng).then(res => {
      dispatch({
        type: 'GET_RESTURANTS',
        isLoading: true,
        // resturants: res.data.resturant.results,
        resturants: res.data.products,
      });
    });
  };

  useEffect(() => {
    getResturant();
  }, [state.category, state.radius, location.lat, location.lng]);

  const handleCategory = (val: string) => {
    dispatch({
      type: 'GET_CATEGORY',
      isLoading: true,
      category: val,
    });
  };

  const handleRadius = debounce((val: number) => {
    dispatch({
      type: 'GET_RADIUS',
      isLoading: true,
      radius: val,
    });
  }, 1000);

  const handleCurrentResturant = (curr: any) => {
    dispatch({
      type: 'GET_CURRENT_RESTURANT',
      curr: curr,
    });
  };

  return (
    <PlaceConext.Provider value={{ ...state, handleCategory, handleRadius, handleCurrentResturant }}>
      {children}
    </PlaceConext.Provider>
  );
};
