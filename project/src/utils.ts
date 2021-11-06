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
//Todo Если хватить времени сделаю валидацию с всплывающим окном пока недогоняю что не так делаю, кажется надо делать управляемую форму.
/*const checkPasswordValidation =  (item: HTMLInputElement) => {
  const regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/;
  const passwordValue = item.value;
  if (!regPassword.test(passwordValue)){
    item.setCustomValidity('Please enter a two-digit password, letter and number');
  }
  item.reportValidity();
  return item;
};*/

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export {getRating, ucFirst, getFilteredOffers, getLocation, adaptOffersToClient, adaptOfferToClient, isCheckedAuth};

