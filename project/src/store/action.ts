import {ActionType, ChangeCityAction, LoadOffersAction, MainResetAction} from '../types/action-types';
import offers from '../mocks/offers';

const changeCity = (): ChangeCityAction => ({
  type: ActionType.ChangeCity,
});

const loadOffers = (): LoadOffersAction => ({
  type: ActionType.LoadOffers,
  offers: offers,
});

const mainReset = (): MainResetAction => ({
  type: ActionType.MainReset,
});

export {changeCity, loadOffers, mainReset};
