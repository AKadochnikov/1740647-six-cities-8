import {city, offer} from './types/types';
import {LOCATIONS} from './const';

const ucFirst = (str: string): string => {
  if (!str) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
};
const getRating = (rating: number): number => (rating * 10) * 2;

const getOffers = (currentCity: string, offers: offer[]) => offers.slice().filter((currentOffer) => currentOffer.city.name === currentCity);

const getLocation = (currentCity: string): city => {
  const newLocation = LOCATIONS.filter((currentLocation) => currentLocation.city.name === currentCity);
  return newLocation[0].city;
};

//TODO набросок адаптера
/*static adaptToClient(event) {
  const adaptedEvent = Object.assign(
    {},
    event,
    {
      basePrice: event['base_price'],
      dateFrom: dayjs(event['date_from'], 'YYYY-MM-DDTHH:mm:ssZ[Z]'),
      dateTo: dayjs(event['date_to'], 'YYYY-MM-DDTHH:mm:ssZ[Z]'),
      isFavorite: event['is_favorite'],
    },
  );

  delete adaptedEvent['base_price'];
  delete adaptedEvent['date_from'];
  delete adaptedEvent['date_to'];
  delete adaptedEvent['is_favorite'];

  return adaptedEvent;
}

static adaptToServer(event) {
  const adaptedEvent = Object.assign(
    {},
    event,
    {
      'base_price': event.basePrice,
      'date_from': event.dateFrom.toISOString(),
      'date_to': event.dateTo.toISOString(),
      'is_favorite': event.isFavorite,
    },
  );

  delete adaptedEvent.basePrice;
  delete adaptedEvent.dateFrom;
  delete adaptedEvent.dateTo;
  delete adaptedEvent.isFavorite;

  return adaptedEvent;
}
}*/

export {getRating, ucFirst, getOffers, getLocation};

