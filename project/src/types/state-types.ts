import {Offer} from './types';
import {AuthorizationStatus} from '../const';

export type State = {
  city: string;
  offers: Offer[];
  authorizationStatus: AuthorizationStatus;
}
