import {ActionType} from '../types/action-types';
import {offer} from '../types/types';

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

const loadOffers = (offers: offer[]) => ({
  type: ActionType.LoadOffers,
  offers: offers,
} as const);

export {changeCity, changeOffers, mainReset, loadOffers};
