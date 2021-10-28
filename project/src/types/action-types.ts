export enum ActionType {
  ChangeCity = 'main/changeCity',
  LoadOffers = 'main/LoadOffers',
  MainReset = 'main/reset'
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity;
  currentCity: string;
}
export type LoadOffersAction = {
  type: ActionType.LoadOffers;
}

export type MainResetAction = {
  type: ActionType.MainReset;
}

export type Actions = LoadOffersAction | ChangeCityAction | MainResetAction;
