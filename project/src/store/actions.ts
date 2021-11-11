import {ActionType} from '../types/action';
import {Offers, Offer, Comments} from '../types/types';
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

const loadPropertyData = (offer: Offer, comments: Comments, nearbyOffers: Offers) => ({
  type: ActionType.LoadPropertyData,
  payload: {
    offer,
    comments,
    nearbyOffers,
  },
} as const);

const refreshComments = (comments: Comments) => ({
  type: ActionType.RefreshComments,
  payload: {
    comments,
  },
} as const);

const resetPropertyData = () => ({
  type: ActionType.ResetPropertyData,
} as const);

const changeActiveSortBy = (sortItem: string) => ({
  type: ActionType.ChangeActiveSortBy,
  payload: {
    sortItem,
  },
} as const);

export {changeCity, changeOffers, loadOffers, requireAuthorization, requireLogout, loadEmail, loadPropertyData, resetPropertyData, changeActiveSortBy, refreshComments};
