import axios from 'axios';

const getPlace = (category: string, radius: number, lat: number, lng: number) =>
  axios.get(
    'https://dummyjson.com/products?limit=10&' +
      'category=' +
      category +
      '&radius=' +
      radius +
      '&lat=' +
      lat +
      '&lng=' +
      lng
  );

// const getPlace = (category: string, radius: number, lat: number, lng: number) =>
//   axios.get('/api/google-place?' + '?category=' + category + '&radius=' + radius + '&lat=' + lat + '&lng=' + lng);

export default getPlace;
