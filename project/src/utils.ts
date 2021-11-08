import {City, Comments, Offer, Offers, Comment} from './types/types';
import {LOCATIONS} from './const';
import {AuthorizationStatus} from './const';

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

const adaptOfferToClient = (offer: Offer) => {
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
};

const adaptOffersToClient = (offers: Offers) => offers.map((offer) => adaptOfferToClient(offer));

const adaptCommentsToClient = (comments: Comments) => comments.map((commentItem) => {
  const adaptedComment: Comment ={
    ...commentItem,
    ...{
      user:{
        id: commentItem.user['id'],
        isPro: commentItem.user['is_pro'],
        name: commentItem.user['name'],
        avatarUrl: commentItem.user['avatar_url'],
      },
    }};

  delete adaptedComment.user['is_pro'];
  delete adaptedComment.user['avatar_url'];

  return adaptedComment;
});

const humanizeDate = (date: Date): string => date.toLocaleDateString('en-Us', {month: 'long', year: 'numeric'});

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export {getRating, ucFirst, getFilteredOffers, getLocation, adaptOffersToClient, adaptOfferToClient, isCheckedAuth, adaptCommentsToClient, humanizeDate};

