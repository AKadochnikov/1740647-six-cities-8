import {ActionType, ChangeCityAction, LoadOffersAction} from '../types/action-types';
import offers from '../mocks/offers';

const changeCity = (): ChangeCityAction => ({
  type: ActionType.ChangeCity,
});

const loadOffers = (): LoadOffersAction => ({
  type: ActionType.LoadOffers,
  offers: offers,
});

export {changeCity, loadOffers};
