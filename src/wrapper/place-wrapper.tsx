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
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getResturant = () => {
    getPlace(state.category, state.radius, location.lat, location.lng).then(res => {
      //   console.log('res', res.data);
      dispatch({
        type: 'GET_RESTURANTS',
        isLoading: true,
        resturants: res.data.resturant.results,
      });
    });
  };

  useEffect(() => {
    getResturant();
  }, [state.category, state.radius, location.lat, location.lng]);

  const handleCategory = (val: string) => {
    dispatch({
      type: 'GET_CATEGORY',
      category: val,
    });
  };

  const handleRadius = debounce((val: number) => {
    dispatch({
      type: 'GET_RADIUS',
      radius: val,
    });
  }, 1000);

  return <PlaceConext.Provider value={{ ...state, handleCategory, handleRadius }}>{children}</PlaceConext.Provider>;
};
