import {Offer} from './types';
import {AuthorizationStatus} from '../const';

export type State = {
  city: string;
  offers: Offer[];
  filteredOffers: Offer[];
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
}
