import {ActionType} from '../types/action';
import {Offers} from '../types/types';
import {AuthorizationStatus} from '../const';

const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: {
    city,
  },
} as const);

const changeOffers = () => ({
  type: ActionType.ChangeOffers,
} as const);

const loadOffers = (offers: Offers) => ({
  type: ActionType.LoadOffers,
  payload: {
    offers,
  },
} as const);

const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: {
    authStatus,
  },
} as const);

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

const loadEmail = (email: string) => ({
  type: ActionType.LoadEmail,
  payload: {
    email,
  },
} as const);


export {changeCity, changeOffers, loadOffers, requireAuthorization, requireLogout, loadEmail};
