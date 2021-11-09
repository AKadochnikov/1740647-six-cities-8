import {City, Comment, CommentInServer, Offer, OfferInServer, Offers, SortBy} from './types/types';
import {AuthorizationStatus, LOCATIONS} from './const';

const ucFirst = (str: string): string => {
  if (!str) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
};
const getRating = (rating: number): number => (rating * 10) * 2;

const getFilteredOffers = (currentCity: string, offers: Offers) => offers.slice().filter((offerItem) => offerItem.city.name === currentCity);

const getLocation = (currentCity: string): City => {
  const newLocation = LOCATIONS.filter((currentLocation) => currentLocation.city.name === currentCity);
  return newLocation[0].city;
};

const adaptOfferToClient = (offer: OfferInServer): Offer => ({
  bedrooms: offer.bedrooms,
  city: offer.city,
  description: offer.description,
  goods: offer.goods,
  host: {
    avatarUrl: offer.host.avatar_url,
    id: offer.host.id,
    isPro: offer.host.is_pro,
    name: offer.host.name,
  },
  id: offer.id,
  images: offer.images,
  isFavorite: offer.is_favorite,
  isPremium: offer.is_premium,
  location: {
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
    zoom: offer.location.zoom,
  },
  maxAdults: offer.max_adults,
  previewImage: offer.preview_image,
  price: offer.price,
  rating: offer.rating,
  title: offer.title,
  type: offer.type,
});

const adaptOffersToClient = (offers: OfferInServer[]) => offers.map((offer) => adaptOfferToClient(offer));

const adaptCommentsToClient = (comments: CommentInServer[]) => comments.map((commentItem): Comment => {
  const isPro: boolean = commentItem.user['is_pro'];
  const avatarUrl: string = commentItem.user['avatar_url'];
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

export {getRating, ucFirst, getFilteredOffers, getLocation, adaptOffersToClient, adaptOfferToClient, isCheckedAuth, adaptCommentsToClient, humanizeDate, getSortValue};

