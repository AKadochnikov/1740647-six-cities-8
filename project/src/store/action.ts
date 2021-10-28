import {ActionType, ChangeCityAction, LoadOffersAction, MainResetAction} from '../types/action-types';

const changeCity = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  currentCity: city,
});

const loadOffers = (): LoadOffersAction => ({
  type: ActionType.LoadOffers,
});

const mainReset = (): MainResetAction => ({
  type: ActionType.MainReset,
});

export {changeCity, loadOffers, mainReset};
