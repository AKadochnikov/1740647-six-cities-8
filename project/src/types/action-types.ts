import {loadOffers, changeCity, mainReset} from '../store/action';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  LoadOffers = 'main/LoadOffers',
  MainReset = 'main/reset'
}

export type Actions =
  ReturnType<typeof loadOffers>
  | ReturnType<typeof changeCity>
  | ReturnType<typeof mainReset>;
