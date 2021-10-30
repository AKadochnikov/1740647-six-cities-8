import {DEFAULT_CITY} from '../const';
import {State} from '../types/state-types';
import {Actions, ActionType} from '../types/action-types';
import {getOffers} from '../utils';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
};

const reducer = (state: State = initialState, action: Actions) : State => {
  switch (action.type){
    case ActionType.ChangeCity:
      return {...state, city: action.currentCity};
    case ActionType.ChangeOffers:
      return {...state, offers: getOffers(state.city, initialState.offers)};
    case ActionType.MainReset:
      return {...initialState, offers: getOffers(initialState.city, initialState.offers)};
    case ActionType.LoadOffers:
      return {...state, offers: action.offers};
    default:
      return {...state, offers: getOffers(state.city, state.offers)};
  }
};

export {reducer};
