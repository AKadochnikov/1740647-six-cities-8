import {Offers, Offer, Comments} from './types';
import {AuthorizationStatus} from '../const';
import {RootState} from '../store/root-reducer';

export type Authorization = {
  authorizationStatus: AuthorizationStatus,
  email: string | null,
}

export type Data = {
  city: string,
  offers: Offers,
  favoriteOffers: Offers,
  isFavoriteDataLoaded: boolean,
  isDataLoaded: boolean,
  activeOffer: Offer | null,
  comments: Comments,
  nearbyOffers: Offers,
  isPropertyDataLoaded: boolean,
  activeSortBy: string,
}

export type State = RootState;
