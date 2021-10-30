import {offer} from './types';
import {AuthorizationStatus} from '../const';

export type State = {
  city: string;
  offers: offer[];
  authorizationStatus: AuthorizationStatus;
}
