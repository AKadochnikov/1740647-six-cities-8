import {ActionType} from '../types/action-types';
import {Offer} from '../types/types';
import {AuthorizationStatus} from '../const';

const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  currentCity: city,
} as const);

const changeOffers = () => ({
  type: ActionType.ChangeOffers,
} as const);

const mainReset = () => ({
  type: ActionType.MainReset,
} as const);

const loadOffers = (offers: Offer[]) => ({
  type: ActionType.LoadOffers,
  offers: offers,
} as const);

const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  authorizationStatus: authStatus,
} as const);

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export {changeCity, changeOffers, mainReset, loadOffers, requireAuthorization, requireLogout};
