import {City, Offer, Offers} from './types/types';
import {LOCATIONS} from './const';
import {AuthorizationStatus} from './const';

const ucFirst = (str: string): string => {
  if (!str) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
};
const getRating = (rating: number): number => (rating * 10) * 2;

const getOffers = (currentCity: string, currentOffer: Offer) => currentOffer.city.name === currentCity;

const getLocation = (currentCity: string): City => {
  const newLocation = LOCATIONS.filter((currentLocation) => currentLocation.city.name === currentCity);
  return newLocation[0].city;
};

const adaptOffersToClient = (offers: Offers) => offers.map((offer) => {
  const adaptedOffer: Offer ={
    ...offer,
    ...{
      previewImage: offer['preview_image'],
      isFavorite: offer['is_favorite'],
      isPremium: offer['is_premium'],
      maxAdults: offer['max_adults'],
      host:{
        id: offer.host['id'],
        isPro: offer.host['is_pro'],
        name: offer.host['name'],
        avatarUrl: offer.host['avatar_url'],
      },
    }};


  delete adaptedOffer['preview_image'];
  delete adaptedOffer['is_favorite'];
  delete adaptedOffer['is_premium'];
  delete adaptedOffer['max_adults'];
  delete adaptedOffer.host['is_pro'];
  delete adaptedOffer.host['avatar_url'];

  return adaptedOffer;
});

const adaptOffersToServer = (offers: Offers) => offers.map((offer) => {
  const adaptedOffer: Offer ={
    ...offer,
    ...{
      'preview_image': offer.previewImage,
      'is_favorite': offer.isFavorite,
      'is_premium': offer.isPremium,
      'max_adults': offer.maxAdults,
      host:{
        'id': offer.host.id,
        'is_pro': offer.host.isPro,
        'name': offer.host.name,
        'avatar_url': offer.host.avatarUrl,
      },
    }};

  delete adaptedOffer.previewImage;
  delete adaptedOffer.isFavorite;
  delete adaptedOffer.isPremium;
  delete adaptedOffer.maxAdults;
  delete adaptedOffer.host.isPro;
  delete adaptedOffer.host.avatarUrl;

  return adaptedOffer;
});

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export {getRating, ucFirst, getOffers, getLocation, adaptOffersToClient, adaptOffersToServer, isCheckedAuth};

