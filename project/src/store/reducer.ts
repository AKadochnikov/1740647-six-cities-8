import offers from '../mocks/offers';
import {DEFAULT_CITY} from '../const';
import {State} from '../types/state-types';
import {ActionType, Actions} from '../types/action-types';
import {getOffers} from '../utils';

const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
};

const reducer = (state: State = initialState, action: Actions) : State => {
  switch (action.type){
    case ActionType.ChangeCity:
      return {...state, city: action.currentCity};
    case ActionType.LoadOffers:
      return {...state, offers: getOffers(state.city, initialState.offers)};
    case ActionType.MainReset:
      return {...initialState, offers: getOffers(initialState.city, initialState.offers)};
    default:
      return {...state, offers: getOffers(state.city, state.offers)};
  }
};

export {reducer};
