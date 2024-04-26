import { Dispatch, SetStateAction, createContext } from 'react';

export interface ILocation {
  lat: number;
  lng: number;
}

interface ILocationContext {
  location: ILocation;
  setLocation: Dispatch<SetStateAction<ILocation>>;
}

const initailValue: ILocationContext = {
  location: { lat: 0, lng: 0 },
  setLocation: () => {},
};

export const UserLocationContext = createContext<ILocationContext>(initailValue);
