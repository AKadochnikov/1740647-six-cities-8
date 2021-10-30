import {ActionType} from '../types/action-types';

const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  currentCity: city,
} as const);

const loadOffers = () => ({
  type: ActionType.LoadOffers,
} as const);

const mainReset = () => ({
  type: ActionType.MainReset,
} as const);

export {changeCity, loadOffers, mainReset};
