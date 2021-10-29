import {city, offerMock} from './types/types';
import {LOCATIONS} from './const';

const ucFirst = (str: string): string => {
  if (!str) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
};
const getRating = (rating: number): number => (rating * 10) * 2;

const getOffers = (currentCity: string, offers: offerMock[]) => offers.slice().filter((offer) => offer.city.name === currentCity);

const getLocation = (currentCity: string): city => {
  const newLocation = LOCATIONS.filter((currentLocation) => currentLocation.city.name === currentCity);
  return newLocation[0].city;
};

export {getRating, ucFirst, getOffers, getLocation};

