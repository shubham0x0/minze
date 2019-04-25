import { Layout } from '../theme';
import collections from './collection.json';
import geocode from './geocode.json';

// import  from './collection.json';

export const getCollections = () => {
  // console.warn('CALLED');
  // return fetch('https://developers.zomato.com/api/v2.1/collections?city_id=1&count=10', {
  //   headers: {
  //     Accept: 'application/json',
  //     'User-Key': '5ac52fcf011dbdb12e8a10ed28519fb6'
  //   }
  // }).then(response => {
  //   return response.json();
  // });
  return collections;
};

export const getActivities = (location: any) => {
  // console.warn('CALLED');
  // console.warn(location);
  // return fetch(
  //   `https://developers.zomato.com/api/v2.1/geocode?lat=${location.coords.latitude}&lon=${location.coords.longitude}`,
  //   {
  //     headers: {
  //       Accept: 'application/json',
  //       'User-Key': '5ac52fcf011dbdb12e8a10ed28519fb6'
  //     }
  //   }
  // ).then(response => {
  //   return response.json();
  // });
  return geocode;
};

export const getRegionForCoordinates = (points: any[], zoom: number = 200) => {
  const distanceDelta = Math.exp(Math.log(360) - zoom * Math.LN2);
  return {
    latitude: points[0],
    longitude: points[1],
    latitudeDelta: distanceDelta,
    longitudeDelta: distanceDelta
  };
};
