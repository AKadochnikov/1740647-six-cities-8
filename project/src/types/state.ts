import {Offers} from './types';
import {AuthorizationStatus} from '../const';
import {RootState} from '../store/root-reducer';

export type Authorization = {
  authorizationStatus: AuthorizationStatus,
  email: string | null,
}

export type Data = {
  city: string,
  offers: Offers,
  isDataLoaded: boolean,
}

export type State = RootState;
