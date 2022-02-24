import {City, Comment, CommentFromServer, Offer, OfferFromServer, Offers, SortBy} from './types/types';
import {AuthorizationStatus, LOCATIONS, CITIES} from './const';

const ucFirst = (str: string): string => {
  if (!str) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
};
const getRating = (rating: number): number => (Math.round(rating) * 10) * 2;

const getFilteredOffers = (currentCity: string, offers: Offers) => offers.slice().filter((offerItem) => offerItem.city.name === currentCity);

const getLocation = (currentCity: string): City => {
  const newLocation = LOCATIONS.filter((currentLocation) => currentLocation.city.name === currentCity);
  return newLocation[0].city;
};

const adaptOfferToClient = (offer: OfferFromServer): Offer => ({
  bedrooms: offer.bedrooms,
  city: offer.city,
  description: offer.description,
  goods: offer.goods,
  host: {
    avatarUrl: offer.host.avatarUrl,
    id: offer.host.id,
    isPro: offer.host.isPro,
    name: offer.host.name,
  },
  id: offer.id,
  images: offer.images,
  isFavorite: offer.isFavorite,
  isPremium: offer.isPremium,
  location: {
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
    zoom: offer.location.zoom,
  },
  maxAdults: offer.maxAdults,
  previewImage: offer.previewImage,
  price: offer.price,
  rating: offer.rating,
  title: offer.title,
  type: offer.type,
});

const adaptOffersToClient = (offers: OfferFromServer[]) => offers.map((offer) => adaptOfferToClient(offer));

const adaptCommentsToClient = (comments: CommentFromServer[]) => comments.map((commentItem): Comment => {
  const isPro: boolean = commentItem.user['isPro'];
  const avatarUrl: string = commentItem.user['avatarUrl'];
  const id: number = commentItem.user['id'];
  const name: string = commentItem.user['name'];
  return {
    ...commentItem,
    ...{
      user: {
        id: id,
        isPro: isPro,
        name: name,
        avatarUrl: avatarUrl,
      },
    },
  };
});

const humanizeDate = (date: Date): string => date.toLocaleDateString('en-Us', {month: 'long', year: 'numeric'});

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const getSortValue = (sortItems: SortBy): string[] => {
  const result: string[] = [];
  for (const newKey in sortItems) {
    const getKeyValue = <T extends SortBy, U extends keyof T>(key: U) => (obj: T) =>
      obj[key];
    result.push(getKeyValue(newKey)(sortItems));
  }
  return result;
};

const checkPasswordValidation = (value: string, item: HTMLInputElement) => {
  const regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/;
  if (!regPassword.test(value)){
    item?.setCustomValidity('Please enter a two-digit password, letter and number');
  } else {
    item?.setCustomValidity('');
  }
  item?.reportValidity();
};

const getRandomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;

const getRandomCity = (): string => {
  const cityIndex = getRandomInt(0, CITIES.length);
  return CITIES[cityIndex];
};

export {getRating, ucFirst, getFilteredOffers, getLocation, adaptOffersToClient, adaptOfferToClient, isCheckedAuth, adaptCommentsToClient, humanizeDate, getSortValue, checkPasswordValidation, getRandomCity};

