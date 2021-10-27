import {offerMock} from './types';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  LoadOffers = 'main/LoadOffers',
  MainReset = 'main/reset'
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity;
}
export type LoadOffersAction = {
  type: ActionType.LoadOffers;
  offers: offerMock[];
}

export type MainResetAction = {
  type: ActionType.MainReset;
}

export type Actions = LoadOffersAction | ChangeCityAction | MainResetAction;
