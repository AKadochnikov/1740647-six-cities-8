import {changeOffers, changeCity, mainReset, loadOffers} from '../store/action';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeOffers = 'main/changeOffers',
  MainReset = 'main/reset',
  LoadOffers = 'data/loadOffers',
}

export type Actions =
  ReturnType<typeof changeOffers>
  | ReturnType<typeof changeCity>
  | ReturnType<typeof mainReset>
  | ReturnType<typeof loadOffers>;
