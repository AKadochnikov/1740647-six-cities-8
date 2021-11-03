import {Offers} from './types';
import {AuthorizationStatus} from '../const';

export type State = {
  city: string,
  offers: Offers,
  filteredOffers: Offers,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  email: string | null,
}
